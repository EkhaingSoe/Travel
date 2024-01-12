import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Places from './components/Places'
import Blog from './components/Blog'
import PopularPlaces from './components/PopularPlaces'
import ExporsePlaces from './components/ExporsePlaces'
import Informations from './components/Informations'
import Partner from './components/Partner'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div className='font-poppins mx-4  lg:mx-20  '>
      <Nav/>
      <Home/>
      <PopularPlaces/>
      <Blog/>
      <ExporsePlaces/>
      <Informations/>
      <Gallery/>
      <Partner/>
      <Contact/>
    </div>
  )
}

export default App
