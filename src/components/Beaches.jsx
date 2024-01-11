import React from 'react'
import Card from './Card'

const Beaches = ({ beaches }) => {
    return (
        <>
            {
                beaches.map((beach) => {
                    return (
                        <div>
                            <Card key={beach.id} beach={beach} />
                        </div>
                    )
                })
            }

        </>
    )
}

export default Beaches
