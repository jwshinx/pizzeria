import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Restaurants from './restaurants/Restaurants'
import Restaurant from './restaurant/Restaurant'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Restaurants />}/>
      <Route exact path="/restaurants/:slug" element={<Restaurant />}/>
    </Routes>
  )
}

export default App
