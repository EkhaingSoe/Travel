import React from 'react'
import { places } from '../data'
import { Link, NavLink } from 'react-router-dom'

const Places = ({handleCategoryChange,selectedPlace}) => {
  return (
    <ul className='flex items-center mt-3 lg:mt-0 gap-2 lg:gap-10 text-sm font-semibold'>
    {
      places.map((place)=>{
        return (
          <li key={place} onClick={(e) => {
            e.preventDefault();
            handleCategoryChange(place)}}>

            <a href="" className={`${selectedPlace===place?"text-orange-500":""}`}>{place}</a>
            
          </li>
        )
      })
    }
  </ul>
  )
}

export default Places

