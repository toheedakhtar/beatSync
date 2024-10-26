import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSongs from './LoadingSongs';


const SongDisplay = ({ song }) => {
    if (song) {
        console.log(song)

        let { album_name, artist, download_url, image_url, label, song_name, song_url, year } = song;
        // console.log(image_url)
        // if (!image_url) {
        //     image_url = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Graduation_%28album%29.jpg/220px-Graduation_%28album%29.jpg'
        // }
        return (
            <div className='w-96 h-full'>
                <div className="p-4 bg-[#212121] text-white rounded-lg max-w-sm mx-auto">
                    <div className='h-24 w-86'>
                        <h2 className="text-2xl font-semibold">{song_name || <Skeleton baseColor="#202020" highlightColor="#444" />}</h2>
                        <p className="text-lg text-gray-300">{artist || <Skeleton baseColor="#202020" highlightColor="#444" />}</p>
                    </div>

                    <img src={image_url} alt={`${song_name} cover`} className="w-80 h-80 rounded-lg py-2" />

                    <div className="text-sm text-gray-400 space-y-1">
                        <p><strong>Album:</strong> {album_name || <Skeleton baseColor="#202020" highlightColor="#444" />}</p>
                        <p><strong>Label:</strong> {label || <Skeleton baseColor="#202020" highlightColor="#444" />}</p>
                        <p><strong>Year:</strong> {year || <Skeleton baseColor="#202020" highlightColor="#444" />}</p>
                    </div>

                    <div className="space-x-4">
                        <a href={song_url || <Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Listen on JioSaavn
                        </a>
                        <a href={download_url || <Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            // <div className=''>
            //     <div className="p-4 bg-[#212121] text-white rounded-lg max-w-sm mx-auto">
            //         <div className='h-24 w-86'>
            //             <h2 className="text-2xl font-semibold">{<Skeleton baseColor="#202020" highlightColor="#444" />}</h2>
            //             <p className="text-lg text-gray-300">{<Skeleton baseColor="#202020" highlightColor="#444" />}</p>
            //         </div>

            //         <img src={'' } alt={`$`} className="w-80 h-80 rounded-lg py-2" />

            //         <div className="text-sm text-gray-400 space-y-1">
            //             <p><strong>Album:</strong> {<Skeleton baseColor="#202020" highlightColor="#444" />}</p>
            //             <p><strong>Label:</strong> {<Skeleton baseColor="#202020" highlightColor="#444" />}</p>
            //             <p><strong>Year:</strong> {<Skeleton baseColor="#202020" highlightColor="#444" />}</p>
            //         </div>

            //         <div className="space-x-4">
            //             <a href={<Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            //                 Listen on JioSaavn
            //             </a>
            //             <a href={<Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
            //                 Download
            //             </a>
            //         </div>
            //     </div>
            // </div>
            <div className='m-2 p-2 h-full text-wrap grid lg:flex flex-wrap justify-center align-center'>
                <LoadingSongs />
                <LoadingSongs />
                <LoadingSongs />
                <LoadingSongs />
                <LoadingSongs />
                <LoadingSongs />
            </div>

        )
    }
}

export default SongDisplay
