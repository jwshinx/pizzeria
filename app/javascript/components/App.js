import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import RestaurantList from './restaurants/RestaurantList'
import RestaurantList from './restaurants/RestaurantList'
import RestaurantShow from './restaurant/RestaurantShow'
import Navigation from './routes/Navigation'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="/" element={<RestaurantList />}/>
          <Route path="/restaurants" element={<RestaurantList />}/>
          <Route path="/restaurants/:slug" element={<RestaurantShow />}/>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
