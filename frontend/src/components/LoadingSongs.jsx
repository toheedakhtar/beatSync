import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSongs = () => {
    return (
        <div className='m-2 w-96'>

            <div className=''>
                <div className="p-4 bg-[#212121] text-white rounded-lg max-w-sm mx-auto">
                    <div className='h-24 w-86'>
                        <h2 className="text-2xl font-semibold">{<Skeleton baseColor="#202020" highlightColor="#444" />}</h2>
                        <p className="text-lg text-gray-300">{<Skeleton baseColor="#202020" highlightColor="#444" />}</p>
                    </div>

                    {/* <img src={''} alt={''} className="w-80 h-80 rounded-lg py-2" /> */}
                    <div className='className="w-80 rounded-lg py-2'>
                        {<Skeleton baseColor="#202020" highlightColor="#444" />}
                    </div>

                    <div className="text-sm text-gray-400 space-y-1">
                        <p><strong>Album:</strong> <Skeleton baseColor="#202020" highlightColor="#444" /></p>
                        <p><strong>Label:</strong> <Skeleton baseColor="#202020" highlightColor="#444" /></p>
                        <p><strong>Year:</strong> <Skeleton baseColor="#202020" highlightColor="#444" /></p>
                    </div>

                    <div className="space-x-4">
                        <a href={<Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Listen on JioSaavn
                        </a>
                        <a href={<Skeleton baseColor="#202020" highlightColor="#444" />} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                            Download
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoadingSongs
