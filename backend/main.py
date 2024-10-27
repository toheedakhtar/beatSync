from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors
import pickle
import requests
from concurrent.futures import ThreadPoolExecutor  # For parallel API calls

app = Flask(__name__)
cors = CORS(app, origins='*')

normalized_data = pickle.load(open('knn_music_data.pkl', 'rb'))
df = pickle.load(open('df_data.pkl', 'rb'))

# Cache for API responses
song_cache = {}

@app.route("/")
def home():
    return 'BACKEND FOR beatSync'



def get_song_info(song_name):
    # Check cache first
    if song_name in song_cache:
        return song_cache[song_name]
    
    url_data = requests.get(f'https://saavn.dev/api/search/songs?query={song_name}').json()
    
    try:
        song_data = url_data['data']['results'][0]
        song_dict = {
            'song_name': song_data['name'],
            'song_url': song_data['url'],
            'image_url': song_data['image'][2]['url'],
            'album_name': song_data['album']['name'],
            'artist': song_data['artists']['primary'][0]['name'],
            'year': song_data['year'],
            'label': song_data['label'],
            'download_url': song_data['downloadUrl'][-1]['url']
        }
        
        if (len(song_dict['song_name']) > len(song_name)):
            song_dict['song_name'] = song_name

        # Cache the song info for future requests
        song_cache[song_name] = song_dict
        return song_dict
    except:
        return "Bad Response"

@app.route("/api/song", methods=['POST'])
def recommend():
    data = request.get_json()

    try:
        song_idx = df[df['Name'] == data['value']].index.tolist()[0]
        knn = NearestNeighbors(n_neighbors=13, algorithm='auto', metric='cosine') 
        knn.fit(normalized_data)
        distances, indices = knn.kneighbors([normalized_data[song_idx]])

        # Gather song names to fetch info
        song_names = df['Name'].iloc[indices[0]].tolist()
        
        # Fetch data in parallel
        with ThreadPoolExecutor() as executor:
            songs_dict_arr = list(executor.map(get_song_info, song_names))

        # Remove unsuccessful responses
        songs_dict_arr = [song for song in songs_dict_arr if song != "Bad Response"]
        return jsonify(songs_dict_arr)
    except Exception as e:
        print('Error:', e)
        return jsonify(['Error occurred during recommendation'])

if __name__ == '__main__':
    app.run(debug=True, port=8000)