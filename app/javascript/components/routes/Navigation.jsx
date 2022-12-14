import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div
      className="p-3 m-3 space-y-3 md:space-y-0 shadow-2xl rounded-3xl"
    >
      <div
        className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-5 md:justify-end m-3 p-3'
      >
        <div className='group'>
          <Link to='/' >Home</Link>
          <div
            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
          ></div>
        </div>
        <div className='group'>
          <Link to='/' >Restaurants</Link>
          <div
            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
          ></div>
        </div>
        <div className='group'>
          <Link to='/' >Reviews</Link>
          <div
            className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
          ></div>
        </div>
      </div>
      <div className='w-full p-2'>
        <Outlet />
      </div>    
    </div>
  )
}

export default Navigation
