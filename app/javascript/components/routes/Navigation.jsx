import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex flex-col items-center w-full font-medium'>
      <div className='w-full p-2'>
        <Link to='/' className='hover:text-blue-500'>Home</Link>
      </div>
      <div className='w-full p-2'>
        <Outlet />
      </div>
    </div>
  )
}

export default Navigation
