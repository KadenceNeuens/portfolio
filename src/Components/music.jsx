import React from 'react';
import { useEffect } from 'react';

export default function Music(props)
{

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <h2>Music</h2>
            <p>All of my music can be found on my Soundcloud</p>
        </>
    )
}