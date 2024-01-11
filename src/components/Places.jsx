import React from 'react'
import places from "../data"
import Title from '../Title'
import Card from './Card'

const Places = () => {
  return (
    <div className='my-10 mx-10 xl:mx-0'>
      <div className='lg:flex lg:items-center lg:justify-between mb-4'>
        <Title title="Popular Places" />
        <ul className='flex items-center mt-3 lg:mt-0   lg:gap-10 text-sm font-semibold'>
            <li>
                <a href="">Beach</a>
            </li>
            <li>
                <a href="">Mountain</a>
            </li>
            <li>
                <a href="">Waterfall</a>
            </li>
            <li>
                <a href="">Icebergs</a>
            </li>
            <li>
                <a href="">View All</a>
            </li>
        </ul>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='col-span-1'>
        <Card beachName="Siasconset Beach" location="island" />
        </div>
        <div className='col-span-1'>
        <Card beachName="Siasconset Beach" location="island" />
        </div>
        <div className='col-span-1'>
        <Card beachName="Siasconset Beach" location="island" />
        </div>
       
      </div>
    </div>
  )
}

export default Places
