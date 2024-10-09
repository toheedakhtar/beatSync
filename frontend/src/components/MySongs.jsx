import React from 'react'

const MySongs = () => {
  return (
    <div className=' bg-[#121212] h-full'>
        <div className='text-white font-semibold text-xl p-2 rounded-md'>Saved Songs</div>
        <div className='p-1 py-4 flex flex-col h-sceen'>
            <div className="border border-gray-400 m-2 p-3 px-5 rounded-sm bg-black">Song 1</div>
            <div className="border border-gray-400 m-2 p-3 px-5 rounded-sm bg-black">Song 2</div>
            <div className="border border-gray-400 m-2 p-3 px-5 rounded-sm bg-black">Song 3</div>

        </div>
    </div>
  )
}

export default MySongs
