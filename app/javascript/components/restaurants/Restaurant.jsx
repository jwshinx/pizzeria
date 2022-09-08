import React from 'react'
import { Link } from 'react-router-dom'

import BookmarkImage from '../../images/bookmark.svg'

const Restaurant = (props) => {
  // console.log("+++> props.item:", props.item)
  const { name, image_url, location, slug } = props.item

  return (
    <div className='relative group'>
      <img className='object-cover h-full w-96' src={image_url} alt={image_url}/>
      <div
        className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-50 group-hover:opacity-100 bg-opacity-40 group-hover:text-blue-500'
      >
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <Link to={`/restaurants/${slug}`} state={{ color: 'red' }}>
              <p className="text-sm">{name}</p>
              <p className="text-sm">{location}</p>
            </Link>
          </div>
          <div className="flex items-center">
            <img src={BookmarkImage} alt="bookmark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
