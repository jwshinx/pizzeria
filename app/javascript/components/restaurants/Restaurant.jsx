import React from 'react'

const Restaurant = (props) => {
  console.log("+++> props.item:", props.item)
  const { name, image_url, location } = props.item

  return (
    <div className='p-2'>
      <div className='text-lg'>{name}</div>
      <div>{location}</div>
      <div>
        <img src={image_url} alt={image_url}/>
      </div>
    </div>
  )
}

export default Restaurant
