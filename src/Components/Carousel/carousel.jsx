import React from 'react';
import { useRef } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

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

    const [{ xy }, setLocation] = useSpring(() => ({ xy: [0 , 0] }))

    const bindDraggable = useDrag(({ offset: [xy] }) =>
    {
        setLocation({xy})
    },
    {
        bounds: {right: 0 , left: {}},
        rubberband: true
    }
    )

    return (
        <animated.div className="Nav-Image-Container" {...bindDraggable()} 
        style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px, 0, 0)`)
        }}
        >
            {
                easeIn.map((item, index) =>
                    (
                        <animated.div className="Nav-Image-Item" key={index} style={item}>
                            <CarouselItem name={carouselItems[index].title} src={carouselItems[index].image} route={carouselItems[index].link}/>
                        </animated.div>
                    )
                )
            }
        </animated.div>
    )
}