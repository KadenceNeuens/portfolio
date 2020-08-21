import React from 'react';
import { useEffect } from 'react';

export default function About(props)
{
    
    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <h2>About Me</h2>
            <h3>This is the About page.</h3>
        </>
    )
}