import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { songs, songsName } from '../songs'
import axios from 'axios'

const Recommendation = () => {

  const options = songs.map((song) => ({
    value: song,   // Set the song name as the value
    label: song    // Set the song name as the label
  }));

  const [value, setValue] = useState('')
  const [recommends, setRecommend] = useState([])

  console.log(value)

  function handleSelect(e) {
    setValue(e.value)
    // console.log(e.value)
  }


  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/song', { value })
      setRecommend(res.data.slice(1))
      // console.log(res.data)
      // setRecommend(res.data)
      // console.log('Successfully Send',)
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

      <div className='m-2 p-2'>
        {recommends.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
