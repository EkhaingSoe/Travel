import React from 'react'
import { people } from '../data'

const Users = () => {
  return (
    <div className='flex items-center '>
      {
        people.map((person)=>{
            return(
                <img src={person.image} alt="" className='w-10 h-10 rounded-full object-cover -ml-2 cursor-pointer hover:z-50' />
            )
        })
      }
    </div>
  )
}

export default Users
