import React from 'react'
import Recommendation from './Recommendation'
import Navbar from './Navbar'
import MySongs from './MySongs'


const Home = () => {
  return (
    <>
      <div className="p-5 bg-black text-white"><Navbar /></div>
      <div className="h-screen flex text-white">
        {/* <div className="bg-black w-1/2 p-2"> <MySongs/> </div> */}
        <div className="bg-black w-full p-2"> <Recommendation /> </div>
        <div></div>
      </div>

    </>
  )
}

export default Home
