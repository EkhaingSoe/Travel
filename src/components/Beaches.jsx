import React from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'

const Beaches = ({ beaches }) => {
    return (
        <>
            {
                beaches.map((beach) => {
                    return (
                       
                            <Card key={nanoid()} beach={beach} />
                       
                    )
                })
            }

        </>
    )
}

export default Beaches
