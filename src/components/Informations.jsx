import React from 'react'
import { information } from '../data'

const Informations = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 my-20'>
      {
        information.map((info)=>{
            return(
                <div key={info.id} className='border group flex items-center justify-center py-10 shadow-md rounded-md cursor-pointer   ' >
                     <div>
                        <h1 className='text-orange-500 group-hover:translate-x-3 transition-all duration-500 text-2xl font-semibold mb-5'>{info.number}</h1>
                        <h1 className='text-center font-semibold'>{info.text}</h1>
                     </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Informations
