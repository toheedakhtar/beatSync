import React, { useState } from 'react'
import Select from 'react-select'
import { songs, songsName } from '../songs'
import axios from 'axios'

const Recommendation = () => {

  const options = songs.map((song) => ({
    value: song,   // Set the song name as the value
    label: song    // Set the song name as the label
  }));

  const [value, setValue] = useState('')
  console.log(value)

  function handleSelect(e) {
    setValue(e.value)
    // console.log(e.value)
  }


  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/', { value })
    }
    catch (e) {
      console.log(e)
    }
  }



  return (
    <div className='flex flex-col space-y-2  bg-[#121212] w-full h-full p-2'>
      <form action='POST'>
        <div className='text-white font-semibold text-xl  p-2 rounded-md'><h1>Choose a song you vibe with...</h1></div>
        <div className='py-4'>

          <Select options={options} className='text-black' onChange={handleSelect} />

        </div>
        <div>
          <button className='bg-green-400 text-black font-semibold p-3 rounded-md outline-none' onClick={submit}>Recommend</button>
        </div>
      </form>
    </div>
  )
}

export default Recommendation
