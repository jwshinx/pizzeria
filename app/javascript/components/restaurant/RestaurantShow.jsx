import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

import WeightImage from '../../images/weight.png'
import HeartImage from '../../images/heart.png'

const RestaurantShow = (props) => {
  const [restaurant, setRestaurant] = useState({})
  const [reviews, setReviews] = useState([])
  const { slug } = useParams()

  // const location = useLocation()
  // const { pathname } = location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/restaurants/${slug}`)
        setReviews(data.included)
        setRestaurant(data.data.attributes)
      } catch (err) {
        console.log("+++> err:", err)
      }
    }
    fetchData()
  }, [])

  const displayReviews = reviews.map(item => {
    return (
      <div key={item.id} className='m-3'>
        <div className='text-sm'>{item.attributes.title}</div>
        <div className='text-sm'>{item.attributes.description}</div>
        <div className='text-sm'>{item.attributes.score}</div>
      </div>
    )
  })

  return (
    <div
      className='flex flex-col md:flex-row items-center justify-center min-h-screen bg-slate-100'
    >
      <div
        className='flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'
      >
        <div>
          <img
            className='mx-auto duration-200 w-60 hover:scale-105'
            src={restaurant.image_url}
            alt={restaurant.image_url}
          />
        </div>
        <div class="flex flex-col space-y-6">
          <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            <div class="max-w-sm text-2xl font-medium">
              {restaurant.name}
            </div>

            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p class="line-through">$39</p>
              <p class="text-5xl font-bold">$29</p>
              <p class="text-sm font-light text-gray-400">
                This offer is valid for a large cheese pizza.
              </p>
              <p className='text-lg leading-snug'>Average score: {restaurant.avg_score}</p>
              <p className='text-lg leading-snug'>Location: {restaurant.location}</p>
              {displayReviews}
            </div>

            <div class="group">
              <button
                class="w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg transition-all duration-150"
              >
                <div class="px-8 py-4 bg-blue-500 rounded-lg duration-150 rounded-lg group-hover:bg-blue-700">Add to cart</div>
              </button>
            </div>

            <div class="flex items-center space-x-3 group">
              <div
                class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
              ></div>
              <div class="text-sm">In stock today</div>
            </div>

            <div
              class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
            >
              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 bodrder-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src={WeightImage} alt="" class="w-8" />
                <span>Add to cart</span>
              </button>

              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 bodrder-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src={HeartImage} alt="" class="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default RestaurantShow
