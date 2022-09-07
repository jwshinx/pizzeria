import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = (props) => {
  // console.log("+++> props.item:", props.item)
  const { name, image_url, location, slug } = props.item

  return (
    <div className='bg-red-50'>
      <div className='text-lg hover:text-blue-500'>
        <Link to={`/restaurants/${slug}`} state={{ color: 'red' }}>
          {name}
        </Link>
      </div>
      <div>{location}</div>
      <div>
        <img className='object-cover h-48 w-96' src={image_url} alt={image_url}/>
      </div>
    </div>
  )
}

export default Restaurant
