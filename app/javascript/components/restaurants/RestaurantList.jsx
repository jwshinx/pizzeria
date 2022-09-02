import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Restaurant from './Restaurant'

const RestaurantList = () => {
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
      <Restaurant
        key={item.attributes.name}
        item={item.attributes}
      />
    )
  })
  return (
    <Fragment>
      <div className='p-3'>
        <h1 className='text-4xl font-medium text-black'>Restaurants</h1>
        <p className='text-lg text-gray-500'>Food and conversation.</p>
        <Link to={`/restaurants/new`} >
          Create
        </Link>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {list}
      </div>
    </Fragment>
  )
}

export default RestaurantList
