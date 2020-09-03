import React from 'react';
import { useEffect } from 'react';

export default function Error(props)
{

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return(
        <>
            <p>Error: Page not found</p>
        </>
    )
}