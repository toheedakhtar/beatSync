import React from 'react'
import Recommendation from './Recommendation'
import Navbar from './Navbar'
// import MySongs from './MySongs'
// import AllSongs from './AllSongs'


const Home = () => {
  return (
    <>
      <div className="p-5 bg-black text-white"><Navbar /></div>
      <div className="h-full flex text-white">

        <div className="bg-black w-full h-screen p-2"> <Recommendation /> </div>

      </div>

    </>
  )
}

export default Home
