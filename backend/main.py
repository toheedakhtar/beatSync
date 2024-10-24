from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors
import pickle

app = Flask(__name__)
cors = CORS(app, origins='*')


normalized_data = pickle.load(open('knn_music_data.pkl', 'rb'))
df = pickle.load(open('df_data.pkl', 'rb'))


@app.route("/api/song", methods=['POST'])
def recommend():
    data = request.get_json()
    song_idx = df[df['Name'] == data['value']].index.tolist()[0]

    knn = NearestNeighbors(n_neighbors=13, algorithm='auto', metric='cosine') 
    knn.fit(normalized_data)
    distances, indices = knn.kneighbors([normalized_data[song_idx]])
    print(f"\n\n\nSongs recommended for {df['Name'][song_idx]} : \n")
    for index in indices:
        song = df['Name'][index].tolist()
    
    for i in song:
        print(i)
        
    
    return data




if __name__ == '__main__':
    app.run(debug=True, port=8000)