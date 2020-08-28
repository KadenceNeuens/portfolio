import React from 'react';
import { useEffect } from 'react';
import Gallery from './Gallery/gallery';

import {galleryItems} from './Gallery/art/galleryItems';

export default function Art(props)
{
    
    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <Gallery data={ galleryItems }/>
        </>
    )
}