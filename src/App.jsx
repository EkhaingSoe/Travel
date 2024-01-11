import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Places from './components/Places'
import Blog from './components/Blog'

const App = () => {
  return (
    <div className='font-poppins xl:mx-10  '>
      <Nav/>
      <Home/>
      <Places/>
      <Blog/>
    </div>
  )
}

export default App
