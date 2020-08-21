import React from 'react';
import { useEffect } from 'react';

export default function Art(props)
{
    
    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <h2>Artwork</h2>
            <h3>My Artwork</h3>
        </>
    )
}