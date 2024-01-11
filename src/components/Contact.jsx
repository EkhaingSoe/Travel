import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className='text-center font-semibold text-2xl mb-7'>Sign up to our newsletter</h1>
        <div className='  text-center mb-20 ' >
            <input type="email" className='outline-none shadow-md py-4 px-4 w-[300px]' placeholder='Enter Your Email Here' />
            <button className='bg-cyan-600 text-white rounded-r-lg px-7 py-4 '>Submit</button>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4'>
            <div>
                
            </div>
      </div>
    </div>
  )
}

export default Contact
