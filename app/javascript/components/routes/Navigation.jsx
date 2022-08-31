import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='container flex w-full font-medium'>
      <Link to='/' className='hover:text-blue-500'>Home</Link>
      <Outlet />
    </div>
  )
}

export default Navigation
