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
      console.log(res.data)
      setRecommend(res.data)
      // console.log('Successfully Send',)
    }
    catch (e) {
      console.log(e)
    }
  }



  return (
    <div className='flex flex-col space-y-2 h-full bg-[#121212] p-8 mx-[5%] border-none rounded-lg'>
      <form action='POST'>
        <div className='text-white font-semibold text-xl p-2 rounded-md'><h1>Choose a song you vibe with...</h1></div>

        <div className='py-4'>

          <Select options={options} className='text-black' onChange={handleSelect} />

        </div>

        <div>

          <button className='bg-black text-green-400 font-semibold p-2 rounded-md outline hover:bg-green-400 hover:border-black border-3 hover:text-black' onClick={submit}>Recommend</button>

        </div>

      </form>

      <div className='m-2 p-2 h-full text-wrap grid lg:grid-cols-4 md:grid-cols-2'>
        {Object.entries(recommends).map(([song, url], index) => (
          <div key={index} className='flex flex-col p-8 m-5'>
            <img src={url} alt='image' width={250} height={250} className='border-none rounded-md' />
            <span className='p-2 sm:text-sm md:text-sm lg:text-lg' >{song}</span>
          </div>


        ))}
      </div>
    </div>
  )
}

export default Recommendation
