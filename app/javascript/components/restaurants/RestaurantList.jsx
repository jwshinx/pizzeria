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
      <div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
        <h1 className='text-4xl text-center font-medium text-black'>Pizzerias</h1>
        <Link
          to={`/restaurants/new`}
          className="py-1 px-14 text-center text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
        >
          Create
        </Link>
      </div>
      <div
        className="bg-slate-300 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 rounded-2xl shadow-2xl p-3"
      >
        {list}
      </div>
    </Fragment>
  )
}

export default RestaurantList
