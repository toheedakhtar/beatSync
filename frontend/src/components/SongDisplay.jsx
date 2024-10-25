import React from 'react'

const SongDisplay = ({ song }) => {
    let { album_name, artist, download_url, image_url, label, song_name, song_url, year } = song;
    console.log(image_url)
    if (!image_url) {
        image_url = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Graduation_%28album%29.jpg/220px-Graduation_%28album%29.jpg'
    }
    return (
        <div className=''>
            <div className="p-4 bg-[#212121] text-white rounded-lg max-w-sm mx-auto">
                <div className='h-24 w-86'>
                    <h2 className="text-2xl font-semibold">{song_name}</h2>
                    <p className="text-lg text-gray-300">{artist}</p>
                </div>

                <img src={image_url} alt={`${song_name} cover`} className="w-80 h-80 rounded-lg py-2" />

                <div className="text-sm text-gray-400 space-y-1">
                    <p><strong>Album:</strong> {album_name}</p>
                    <p><strong>Label:</strong> {label}</p>
                    <p><strong>Year:</strong> {year}</p>
                </div>

                <div className="space-x-4">
                    <a href={song_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Listen on JioSaavn
                    </a>
                    <a href={download_url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                        Download
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SongDisplay
