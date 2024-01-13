import React from 'react'
import Home from "../components/Home";
import Places from "../components/Places";
import Blog from "../components/Blog";
import PopularPlaces from "../components/PopularPlaces";
import ExporsePlaces from "../components/ExporsePlaces";
import Informations from "../components/Informations";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Partner from "../components/Partner";
import Users from '../components/Users';
import ScrollBtn from '../components/ScrollBtn';

const Root = () => {
  return (
    <div>
       <Home />
        <PopularPlaces />
        <Blog />
        <ExporsePlaces />
        <Informations />
        <Gallery />
        <Partner />
        <Contact />
        <ScrollBtn/>
    </div>
  )
}

export default Root
