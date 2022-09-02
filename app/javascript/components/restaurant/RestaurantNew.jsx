import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import RestaurantApi from '../utils/RestaurantApi'

const RestaurantNew = () => {
  const [enteredName, setEnteredName] = useState('')
  const [nameIsTouched, setNameIsTouched] = useState(false)
  const [enteredLocation, setEnteredLocation] = useState('')
  const [locationIsTouched, setLocationIsTouched] = useState(false)
  const [enteredImageUrl, setEnteredImageUrl] = useState('')
  const [imageUrlIsTouched, setImageUrlIsTouched] = useState(false)

  const nameIsValid = enteredName.trim() !== ""
  const nameIsInvalid = !nameIsValid && nameIsTouched
  const imageUrlIsValid = enteredImageUrl.trim() !== ""
  const imageUrlIsInvalid = !imageUrlIsValid && imageUrlIsTouched
  const locationIsValid = enteredLocation.trim() !== ""
  const locationIsInvalid = !locationIsValid && locationIsTouched

  let formIsValid = false

  if (nameIsValid && imageUrlIsValid && locationIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.currentTarget.value)
  }

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  }

  const locationInputChangeHandler = (event) => {
    setEnteredLocation(event.currentTarget.value)
  }

  const locationInputBlurHandler = (event) => {
    setLocationIsTouched(true);
  }

  const imageUrlInputChangeHandler = (event) => {
    setEnteredImageUrl(event.currentTarget.value)
  }

  const imageUrlInputBlurHandler = (event) => {
    setImageUrlIsTouched(true);
  }

  let navigate = useNavigate()

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setNameIsTouched(true)
    setLocationIsTouched(true)
    setImageUrlIsTouched(true)

    if (!nameIsValid || !locationIsValid || !imageUrlIsValid) {
      return
    }

    const data = { name: enteredName, location: enteredLocation, image_url: enteredImageUrl }

    RestaurantApi.post("/api/v1/restaurants", data).then((response) => {
      navigate("/restaurants", { replace: true });
    })

    setEnteredName('')
    setEnteredLocation('')
    setEnteredImageUrl('')
    setNameIsTouched(false)
    setLocationIsTouched(false)
    setImageUrlIsTouched(false)
  }

  return (
    <div className='flex item-center space-x-5'>
      <h1 className='w-1/3 mb-4 text-4xl font-black'>Register a new restaurant.</h1>
      <form className='w-2/3 max-w-lg' onSubmit={formSubmitHandler}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={enteredName}
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              id="name"
              type="text"
              placeholder="Enter restaurant name" 
            />
            <p 
              className={`${nameIsInvalid ? 'mt-2 text-xs text-red-500' : 'text-transparent'}`}
            >Please fill out this field.</p>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>Location</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={enteredLocation}
              onChange={locationInputChangeHandler}
              onBlur={locationInputBlurHandler}
              id="location"
              type="text"
              placeholder="Enter restaurant location" 
            />
            <p 
              className={`${locationIsInvalid ? 'mt-2 text-xs text-red-500' : 'text-transparent'}`}
            >Please fill out this field.</p>
          </div>
          <div className="w-full px-3 my-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='image-url'>Image Url</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={enteredImageUrl}
              onChange={imageUrlInputChangeHandler}
              onBlur={imageUrlInputBlurHandler}
              id="imageUrl"
              type="text"
              placeholder="Enter restaurant image url" 
            />
            <p 
              className={`${imageUrlIsInvalid ? 'mt-2 text-xs text-red-500' : 'text-transparent'}`}
            >Please fill out this field.</p>
          </div>
        </div>
        <button
          className={
            `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${formIsValid ? '' : 'opacity-50 cursor-not-allowed'}`
          }
        >Submit</button>
      </form>
    </div>
  )
}

export default RestaurantNew
