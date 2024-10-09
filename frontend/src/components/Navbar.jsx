import React from 'react'


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div>
        <img src="src/assets/logo.png" alt='beatSync' className='w-20 h-10 rounded-sm'/>
      </div>
      <div className='flex space-x-3'>
        <div>Login</div>
        <div>Signup</div>
      </div>
    </div>
    
  )
}

export default Navbar
