import React from 'react'


const Navbar = () => {
  return (

    <div className='flex flex-row justify-around border-none rounded-lg'>
      <div>
        <img src="logo.png" alt='beatSync' height={100} width={100} className='rounded-sm p-1' />
      </div>
      {/* <div className='font-bold text-2xl font-serif text-green-400 px-5 flex items-center'>beatSync
      </div> */}
      {/* <div className='flex space-x-3'> */}
      {/* <div>Login</div>
        <div>Signup</div> */}
      {/* </div> */}
    </div>

  )
}

export default Navbar
