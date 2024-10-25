import React from 'react'
import Recommendation from './Recommendation'
import Navbar from './Navbar'
// import MySongs from './MySongs'
// import AllSongs from './AllSongs'


const Home = () => {
  return (
    <>
      <div className="p-2 bg-black text-white"><Navbar /></div>
      <div className="bg-black h-screen text-white">
        <div className="bg-black p-2"> <Recommendation /> </div>

      </div>

    </>
  )
}

export default Home
