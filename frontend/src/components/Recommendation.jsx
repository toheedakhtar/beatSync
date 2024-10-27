import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { songs, songsName } from '../songs'
import axios from 'axios'
import SongDisplay from './SongDisplay'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Recommendation = () => {

  const options = songs.map((song) => ({
    value: song,
    label: song
  }));

  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false);
  const [loading, isLoading] = useState(false)
  const [recommends, setRecommend] = useState([])


  function handleSelect(e) {
    setValue(e.value)
    setIsValid(e.value ? true : false);
  }


  const submit = async (e) => {
    e.preventDefault()
    try {
      isLoading(true)
      console.log(value)
      const res = await axios.post('https://beatsync.onrender.com//api/song', { value })
      setRecommend(res.data)
      { isLoading(false) }

    }
    catch (e) {
      console.log(e)
    }
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#000000', // Black background
      border: 'none',
      boxShadow: state.isFocused ? 'none' : 'none', // Removes outline
      '&:hover': { borderColor: '#1DB954' },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#000000', // Black background for the dropdown
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#1DB954' : '#000000',
      color: 'white',
      '&:hover': { backgroundColor: '#1DB954' },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };





  return (
    <div className='flex flex-col space-y-2 h-full bg-[#121212] p-8 mx-[5%] border-none rounded-lg'>
      <form action='POST'>
        <div className='text-white font-semibold text-xl p-2 rounded-md'><h1>Choose a song you vibe with...</h1>
          {isValid ? <p></p> : <span className='text-xs font-sans text-green-400'>(You must choose a song to get recommendations)</span>}
        </div>

        <div className='py-4 w-full flex space-x-2'>

          <Select options={options} className='text-black w-full' onChange={handleSelect} styles={customStyles} />

        </div>
        <div className=''>
          <button disabled={!isValid} className='bg-[#121212] text-green-400 font-semibold py-2 px-2 rounded-md outline hover:bg-green-400 hover:border-black border-3 hover:text-black' onClick={submit}>Recommend</button>
        </div>


      </form>


      {loading
        ? <SongDisplay /> :

        recommends && recommends.length > 0 && (
          <div className="text-wrap lg:flex flex-wrap justify-center align-center" >
            {recommends.map((song, index) => (
              < div key={index} className="m-3" >
                <SongDisplay song={song} />
              </div>
            ))
            }
          </div >
        )
      }


    </div >
  )
}

export default Recommendation
