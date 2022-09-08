import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

import WeightImage from '../../images/weight.png'
import HeartImage from '../../images/heart.png'

const RestaurantShow = (props) => {
  console.log("+++> RestaurantShow props:", props)
  const [restaurant, setRestaurant] = useState({})
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  // const location = useLocation()
  // const { pathname } = location

  const fetchRestaurant = async (slug) => {
    try {
      const { data } = await axios.get(`/api/v1/restaurants/${slug}`)
      setReviews(data.included)
      setRestaurant(data.data.attributes)
      setIsLoading(false)
    } catch (err) {
      console.log("+++> err:", err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRestaurant(slug)
  }, [slug])

  const displayReviews = reviews.map(item => {
    return (
      <div key={item.id}>
        <div className='text-sm'>{item.attributes.title}</div>
        <div className='text-sm'>{item.attributes.description}</div>
        <div className='text-sm'>{item.attributes.score}</div>
      </div>
    )
  })

  return (
    <>
      {isLoading &&
        <div
          className='flex flex-col justify-center items-center text-2xl font-medium'
        >
          Loading...
        </div>
      }
      {!isLoading &&
        <div
          className='flex flex-col md:flex-row items-center justify-center bg-slate-100 m-3 p-3'
        >
          <div
            className='flex flex-col p-6 m-3 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-3'
          >
            <div>
              <img
                className='mx-auto duration-200 w-60 hover:scale-105'
                src={restaurant.image_url}
                alt={restaurant.image_url}
              />
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                <div>
                  <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                    Free Shippingfffo
                  </div>
                </div>
                <div className="max-w-sm text-2xl font-medium">
                  {restaurant.name}
                </div>

                <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                  <p className="line-through">$39</p>
                  <p className="text-5xl font-bold">$9</p>
                  <p className="text-sm font-light text-gray-400">
                    This offer is valid for a large cheese pizza.
                  </p>
                  <p className='text-sm'>Average score: {restaurant.avg_score}</p>
                  <p className='text-sm'>Location: {restaurant.location}</p>
                  {displayReviews}
                </div>

                <div className="group">
                  <button
                    className="w-full bg-blue-700 text-white rounded-lg group-hover:bg-blue-700 group-hover:shadow-lg transition-all duration-150"
                  >
                    <div className="px-8 py-4 bg-blue-500 rounded-lg duration-150 rounded-lg group-hover:bg-blue-700">Add to cart</div>
                  </button>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div
                    className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
                  ></div>
                  <div className="text-sm">In stock today</div>
                </div>

                <div
                  className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
                >
                  <button
                    className="flex items-center justify-center py-3 px-5 space-x-3 bodrder-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                  >
                    <img src={WeightImage} alt="" className="w-8" />
                    <span>Add to cart</span>
                  </button>

                  <button
                    className="flex items-center justify-center py-3 px-5 space-x-3 bodrder-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                  >
                    <img src={HeartImage} alt="" className="w-8" />
                    <span>Add to wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default RestaurantShow
