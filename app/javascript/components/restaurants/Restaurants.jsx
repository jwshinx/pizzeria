import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    axios.get('/api/v1/restaurants.json')
      .then(resp => {
        setRestaurants(resp.data.data)
      })
      .catch(err => console.log("+++> err:", err))
  }, [restaurants.length])

  const list = restaurants.map(item => {
    return (
      <li key={item.attributes.name}>
        {item.attributes.name}
      </li>
    )
  })
  return (
    <Fragment>
      <div className='p-10'>
        <h1 className='mb-4 text-4xl font-black'>Restaurants</h1>
        <p className='text-lg leading-snug'>Food and conversation.</p>
      </div>
      <div className='p-10'>
        <ul className='list-none'>{list}</ul>
      </div>
    </Fragment>
  )
}

export default Restaurants
