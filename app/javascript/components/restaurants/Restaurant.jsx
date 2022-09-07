import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = (props) => {
  // console.log("+++> props.item:", props.item)
  const { name, image_url, location, slug } = props.item

  return (
    <div className='relative group bg-red-50'>
      <img className='object-cover h-full w-96' src={image_url} alt={image_url}/>
      <div
        className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'
      >
        <div class="flex justify-between w-full hover:text-blue-500">
          <div class="font-normal">
            <p class="text-sm">{name}</p>
            <p class="text-sm">{location}</p>
            <p class="text-xs">245 likes - 109 Shares</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
