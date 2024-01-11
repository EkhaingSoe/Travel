import React from 'react'
import { PiFlowerLotusThin } from "react-icons/pi";
import { ImLab } from "react-icons/im";


const Partner = () => {
    return (
        <div>
            <div className='flex items-center justify-start md:justify-between flex-wrap my-20 gap-10'>
                <div className='flex items-center gap-1 text-gray-400'>
                    <PiFlowerLotusThin className='text-4xl' />
                    <h1 className='text-2xl'>aven</h1>

                </div>
                <div className='flex items-center gap-1 text-gray-400'>
                    <ImLab  className='text-2xl' />
                    <h1 className='text-2xl font-light'>HEX<span className='font-medium'>LAB</span> </h1>

                </div>
                <div className='flex items-center gap-1 text-gray-400'>
                    <PiFlowerLotusThin className='text-4xl' />
                    <h1 className='text-2xl'>kanba</h1>

                </div>
                <div className='flex items-center gap-1 text-gray-400'>
                    <PiFlowerLotusThin className='text-4xl' />
                    <h1 className='text-2xl'>liva</h1>

                </div>
                <div className='flex items-center gap-1 text-gray-400'>
                    <PiFlowerLotusThin className='text-4xl' />
                    <h1 className='text-2xl'>amara</h1>

                </div>
            </div>
        </div>
    )
}

export default Partner
