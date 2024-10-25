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


    try:
        song_idx = df[df['Name'] == data['value']].index.tolist()[0]
        knn = NearestNeighbors(n_neighbors=13, algorithm='auto', metric='cosine') 
        knn.fit(normalized_data)
        distances, indices = knn.kneighbors([normalized_data[song_idx]])
        print(f"Songs recommended for {df['Name'].iloc[song_idx]}")


        for index in indices:
            songs = (df['Name'].iloc[index].tolist())
        # print(songs, '\n\'n')
        # print(type(songs))
        if songs:
            return songs
        else:
            return ['There', 'is ', 'an', 'error']
    except:
        print('Error')
        return ['There', 'is ', 'an', 'error']


# function to test if all songs are recommending - True
# def recommend_test():
#     for i in range(3624):
#         knn = NearestNeighbors(n_neighbors=13, algorithm='auto', metric='cosine') 
#         knn.fit(normalized_data)
#         distances, indices = knn.kneighbors([normalized_data[i]])
#         print(f"\n\nSongs recommended for {df['Name'].iloc[i]}")


#         for index in indices:
#             songs = (df['Name'].iloc[index].tolist())
#         print(i, songs, '\n\'n')






if __name__ == '__main__':
    app.run(debug=True, port=8000)