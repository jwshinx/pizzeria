import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = (props) => {
  console.log("+++> props.item:", props.item)
  const { name, image_url, location, slug } = props.item

  return (
    <div className='p-2'>
      <div className='text-lg'>
        <Link to={`/restaurants/${slug}`}>
          {name}
        </Link>
      </div>
      <div>{location}</div>
      <div>
        <img src={image_url} alt={image_url}/>
      </div>
    </div>
  )
}

export default Restaurant
