import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Restaurants from './restaurants/Restaurants'
import Restaurant from './restaurant/Restaurant'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route index path="/" element={<Restaurants />}/>
        <Route path="/restaurants" element={<Restaurants />}/>
        <Route path="/restaurants/:slug" element={<Restaurant />}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
