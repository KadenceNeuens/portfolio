import React from 'react';
import { useEffect } from 'react';

export default function Home(props)
{
    
    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
        </>
    )
}