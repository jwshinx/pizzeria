import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const RestaurantShow = (props) => {
  const [restaurant, setRestaurant] = useState({})
  const [reviews, setReviews] = useState([])

  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/v1${pathname}`)
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
    <div className='px-10 py-3'>
      <h1 className='mb-4 text-4xl font-black'>{restaurant.name}</h1>
      <p className='text-lg leading-snug'>Average score: {restaurant.avg_score}</p>
      <p className='text-lg leading-snug'>Location: {restaurant.location}</p>
      <img className='object-cover h-48 w-96' src={restaurant.image_url} alt={restaurant.image_url}/>
      {displayReviews}
    </div>
  )
}

export default RestaurantShow
