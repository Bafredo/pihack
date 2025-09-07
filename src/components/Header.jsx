import React from 'react'
import logo from './../assets/logo.svg'

const Header = () => {
  return (
    <div className='w-full px-4 bg-[#703d92] h-[8vh] items-center'>
        <div className='flex items-center h-[100%] gap-3'>
            <h1>Home</h1>
            <img src={logo} className='text-[]' />
        </div>
    </div>
  )
}

export default Header