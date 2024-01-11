import React, { useState } from 'react'
import Title from '../Title'
import Card from './Card'
import { beaches, places ,mountains } from '../data'
import Places from './Places'
import Beaches from './Beaches'
import Mountain from './Mountain'

const ExporsePlaces = () => {
    const [selectedPlace, setSelectedPlace] = useState("Beach");
    const handleCategoryChange = (category) => {
        console.log(category);
        setSelectedPlace(category);

    };
    const renderContent = () => {
        switch (selectedPlace) {
          case 'Beach':
            return <Beaches beaches={beaches} />;
          case 'Mountain':
            return <Mountain mountains={mountains} />;
          case 'Waterfall':
            return <Beaches beaches={beaches} />;
            case 'Icebergs':
            return <Beaches beaches={beaches} />;
          default:
            return null;
        }
      };
    return (
        <div className='my-10 '>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-7'>
                <Title title="Explore Places" />
                <Places handleCategoryChange={handleCategoryChange} selectedPlace=
                    {selectedPlace} />

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {renderContent()}
            </div>
        </div>
    )
}

export default ExporsePlaces

