import React from 'react'
import Card from './Card'

const Icebergs = ({icebergs}) => {
  return (
    <>
    {
        icebergs.map((iceberg) => {
            return (
                <div>
                    <Card key={iceberg.id} beach={iceberg} />
                </div>
            )
        })
    }

</>
  )
}

export default Icebergs
