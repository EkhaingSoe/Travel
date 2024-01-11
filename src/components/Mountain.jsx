import React from 'react'
import Card from './Card'

const Mountain = ({mountains}) => {
  return (
    <>
    {
        mountains.map((mountain) => {
            return (
                <div>
                    <Card key={mountain.id} beach={mountain} />
                </div>
            )
        })
    }

</>
  )
}

export default Mountain
