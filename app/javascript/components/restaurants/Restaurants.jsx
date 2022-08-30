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
      <div className="header">
        <h1>Restaurants</h1>
        <div className="subheader">Food and conversation.</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </Fragment>
  )
}

export default Restaurants
