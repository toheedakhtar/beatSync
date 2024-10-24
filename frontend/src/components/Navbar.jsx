import React from 'react'


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div>
        <img src="src/assets/logo.png" alt='beatSync' className='w-12 h-15 rounded-sm' />
      </div>
      <div className='font-bold text-2xl font-serif text-green-500'>beatSync</div>
      {/* <div className='flex space-x-3'> */}
      {/* <div>Login</div>
        <div>Signup</div> */}
      {/* </div> */}
    </div>

  )
}

export default Navbar
