from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors
import pickle
import requests
from json import loads, dumps, dump

app = Flask(__name__)
cors = CORS(app, origins='*')


normalized_data = pickle.load(open('knn_music_data.pkl', 'rb'))
df = pickle.load(open('df_data.pkl', 'rb'))


@app.route("/api/song", methods=['POST'])
def recommend():
    data = request.get_json()

    try:
        song_idx = df[df['Name'] == data['value']].index.tolist()[0]
        knn = NearestNeighbors(n_neighbors=13, algorithm='auto', metric='cosine') 
        knn.fit(normalized_data)
        distances, indices = knn.kneighbors([normalized_data[song_idx]])
        # print(f"Songs recommended for {df['Name'].iloc[song_idx]}")


        for index in indices:
            songs = (df['Name'].iloc[index].tolist())
        

        songs_dict_arr = []

        for song in songs:
            songs_dict = get_song_info(song)
            if songs_dict !=  "Bad Response":
                songs_dict_arr.append(songs_dict)
        
        print(f'\n\n\song-dict-arr : \n{songs_dict_arr}\n\n')

        try:
            # print(songs_dict_arr)
            return songs_dict_arr
        except:
            print('cant serialize')

    except:
        print('Error')
        return ['', 'There', 'is ', 'an', 'error']
    
# make the songs_dict_arr serializable to send to frontend as json
def make_serializable(obj):
    if isinstance(obj, set):  # Convert sets to lists
        return list(obj)
    elif isinstance(obj, dict):  # Process nested dictionaries
        return {k: make_serializable(v) for k, v in obj.items()}
    elif isinstance(obj, list):  # Process nested lists
        return [make_serializable(elem) for elem in obj]
    else:
        return obj


def get_song_info(song_name):
    url_data = requests.get(f'https://saavn.dev/api/search/songs?query={song_name}').json()
   
    # for testing
    # url_data = loads(json_data)
    # if(url_data['success'] == True)
    try:
        song_name_data = url_data['data']['results'][0]['name']
        song_url = url_data['data']['results'][0]['url']
        image_url = url_data['data']['results'][0]['image'][2]['url']
        album_name = url_data['data']['results'][0]['album']['name']
        artist = url_data['data']['results'][0]['artists']['primary'][0]['name']
        year = url_data['data']['results'][0]['year']
        label = url_data['data']['results'][0]['label']
        download_url = url_data['data']['results'][0]['downloadUrl'][-1]['url']

        if (len(song_name_data) > len(song_name)): song_name_data=song_name 

        song_dict = {
            'song_name' : song_name_data,
            'song_url' : song_url,
            'image_url' : image_url,
            'album_name' : album_name,
            'artist' : artist,
            'year' : year,
            'label' : label,
            'download_url' : download_url
        }
        print(song_dict)
        return song_dict
    except:
        return 'Bad Response'
        



if __name__ == '__main__':
    app.run(debug=True, port=8000)