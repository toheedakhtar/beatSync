import React from 'react'

const Recommendation = () => {
  return (
    <div className='flex flex-col space-y-2  bg-[#121212] w-full h-full p-2'>
      <div className='text-white font-semibold text-xl  p-2 rounded-md'>Enter / Choose Songs you like </div>
      <div className='py-4'>
        <input type='text' placeholder='Enter your fav songs' className='bg-transparent border-2 border-gray-400 rounded-sm p-2 w-full outline-none' />
      </div>
      <div>
        <button className='bg-green-400 text-black font-semibold p-3 rounded-md outline-none'>Recommend</button>
      </div>
    </div>
  )
}

export default Recommendation
