import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Restaurant from './Restaurant'

const RestaurantList = () => {
  console.log("+++> RestaurantList 0")
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchRestaurants = async () => {
    try {
      const resp = await axios.get('/api/v1/restaurants.json')
      setRestaurants(resp.data.data)
      setIsLoading(false)
    } catch (err) {
      console.log("+++> err:", err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

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
      {isLoading &&
        <div
          className='flex flex-col justify-center items-center text-2xl font-medium'
        >
          Loading...
        </div>
      }
      {!isLoading &&
        <>
          <div
            className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'
          >
            <h1 className='text-4xl text-center font-medium text-black'>Pizzeriass</h1>
            <Link
              to={`/restaurants/new`}
              className="py-1 px-14 text-center text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
            >
              Createxxx
            </Link>
          </div>
          <div
            className="bg-slate-300 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 rounded-2xl shadow-2xl p-3"
          >
            {list}
          </div>
        </>
      }
    </Fragment>
  )
}

export default RestaurantList
