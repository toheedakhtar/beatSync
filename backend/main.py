from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors
import pickle
import requests

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
        songs_dict = {song: get_song_cover(song) for song in songs}
        print(songs_dict)

        if songs_dict:
            return songs_dict
        else:
            return ['', 'There', 'is ', 'an', 'error']
    except:
        print('Error')
        return ['', 'There', 'is ', 'an', 'error']


def get_song_cover(song_name):
    # url_data = requests.get(f'https://saavn.dev/api/search/songs?query={song_name}').json()
    # print(url_data['success'])
    # url =  url_data['data']['results'][0]['image'][2]['url']
    url = 'https://e-cdn-images.dzcdn.net/images/cover/df5c13b1fc432ae674c700a0b0e47fcf/500x500-000000-80-0-0.jpg'
    return url

def get_song_info(song_name):
    # url_data = requests.get(f'https://saavn.dev/api/search/songs?query={song_name}').json()
    url_data = {"success":true,"data":{"total":1,"start":-9,"results":[{"id":"4mVnO-xa","name":"Falling","type":"song","year":"2020","releaseDate":null,"duration":163,"label":"Magic Records","explicitContent":false,"playCount":143,"language":"instrumental","hasLyrics":false,"lyricsId":null,"url":"https://www.jiosaavn.com/song/falling/RAU9XzsdT1I","copyright":"© 2020 Trevor Daniel","album":{"id":"55766776","name":"Falling","url":"https://www.jiosaavn.com/album/falling/p9p,HvwVGdM_"},"artists":{"primary":[{"id":"3993374","name":"Coopex","role":"primary_artists","image":[{"quality":"50x50","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-500x500.jpg"}],"type":"artist","url":"https://www.jiosaavn.com/artist/coopex-songs/eXQXK8gaGeI_"},{"id":"2515906","name":"Tim Moyo","role":"primary_artists","image":[{"quality":"50x50","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-500x500.jpg"}],"type":"artist","url":"https://www.jiosaavn.com/artist/tim-moyo-songs/matjNT7rH40_"}],"featured":[],"all":[{"id":"752877","name":"Ryan Vojtesak","role":"music","image":[],"type":"artist","url":"https://www.jiosaavn.com/artist/ryan-vojtesak-songs/mSl4ApO-ceM_"},{"id":"10925932","name":"Kim Candilora","role":"music","image":[],"type":"artist","url":"https://www.jiosaavn.com/artist/kim-candilora-songs/6QsCySzb62w_"},{"id":"8749113","name":"Martin Kottmeier","role":"music","image":[],"type":"artist","url":"https://www.jiosaavn.com/artist/martin-kottmeier-songs/w2s3F2O6i0c_"},{"id":"7208364","name":"Tristan Norton","role":"music","image":[],"type":"artist","url":"https://www.jiosaavn.com/artist/tristan-norton-songs/9Ns6tYs5L3A_"},{"id":"3161959","name":"Trevor Daniel","role":"music","image":[{"quality":"50x50","url":"https://c.saavncdn.com/artists/Trevor_Daniel_20200113094002_50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/artists/Trevor_Daniel_20200113094002_150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/artists/Trevor_Daniel_20200113094002_500x500.jpg"}],"type":"artist","url":"https://www.jiosaavn.com/artist/trevor-daniel-songs/bMWzVJB7lBo_"},{"id":"7739401","name":"Danny Lee Snodgrass Jr.","role":"music","image":[],"type":"artist","url":"https://www.jiosaavn.com/artist/danny-lee-snodgrass-jr.-songs/scYnuBwLMCI_"},{"id":"3993374","name":"Coopex","role":"singer","image":[{"quality":"50x50","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/910/On-the-Line-English-2019-20200105104401-500x500.jpg"}],"type":"artist","url":"https://www.jiosaavn.com/artist/coopex-songs/eXQXK8gaGeI_"},{"id":"2515906","name":"Tim Moyo","role":"singer","image":[{"quality":"50x50","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/391/Stay-Here-Undone-English-2018-20181005211913-500x500.jpg"}],"type":"artist","url":"https://www.jiosaavn.com/artist/tim-moyo-songs/matjNT7rH40_"}]},"image":[{"quality":"50x50","url":"https://c.saavncdn.com/040/Falling-Instrumental-2020-20240702091717-50x50.jpg"},{"quality":"150x150","url":"https://c.saavncdn.com/040/Falling-Instrumental-2020-20240702091717-150x150.jpg"},{"quality":"500x500","url":"https://c.saavncdn.com/040/Falling-Instrumental-2020-20240702091717-500x500.jpg"}],"downloadUrl":[{"quality":"12kbps","url":"https://aac.saavncdn.com/040/23d3f8168f0274672101d6a9b298242d_12.mp4"},{"quality":"48kbps","url":"https://aac.saavncdn.com/040/23d3f8168f0274672101d6a9b298242d_48.mp4"},{"quality":"96kbps","url":"https://aac.saavncdn.com/040/23d3f8168f0274672101d6a9b298242d_96.mp4"},{"quality":"160kbps","url":"https://aac.saavncdn.com/040/23d3f8168f0274672101d6a9b298242d_160.mp4"},{"quality":"320kbps","url":"https://aac.saavncdn.com/040/23d3f8168f0274672101d6a9b298242d_320.mp4"}]}]}}

    print(url_data)



if __name__ == '__main__':
    app.run(debug=True, port=8000)