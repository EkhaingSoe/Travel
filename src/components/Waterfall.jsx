import React from 'react'
import Card from './Card'

const Waterfall = ({waterfalls}) => {
  return (
    <>
    {
        waterfalls.map((waterfall) => {
            return (
                <div>
                    <Card key={waterfall.id} beach={waterfall} />
                </div>
            )
        })
    }

</>
  )
}

export default Waterfall
