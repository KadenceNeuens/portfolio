import React from 'react';
import { useState, useEffect } from 'react';

import CarouselItem from './carouselItem';

export default function Carousel(props)
{

    const carouselItems = props.data;

    return (
        <div class="Nav-Image-Container">
            {
                carouselItems.map((item, index) =>
                    (
                        <CarouselItem name={item.title} src={item.image} route={item.link}/>
                    )
                )
            }
        </div>
    )
}