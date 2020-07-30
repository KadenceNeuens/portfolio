import React from 'react';
import { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';

import CarouselItem from './carouselItem';

export default function Carousel(props)
{
    const carouselItems = props.data;
    const config = { mass: 5, tension: 2000, friction: 200 }

    const easeIn = useTrail(carouselItems.length, {
        from: {
            transform: 'translate3d(1080px,0,0)'
        },
        to: {
            transform: 'translate3d(0,0,0)'
        }

    })



    return (
        <div className="Nav-Image-Container">
            {
                easeIn.map((item, index) =>
                    (
                        <animated.div className="Nav-Image-Item" key={carouselItems[index]} style={item}>
                            <CarouselItem name={carouselItems[index].title} src={carouselItems[index].image} route={carouselItems[index].link}/>
                        </animated.div>
                    )
                )
            }
        </div>
    )
}