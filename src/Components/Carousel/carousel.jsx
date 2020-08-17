import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import CarouselItem from './carouselItem';

export default function Carousel(props)
{
    // Get data from array file
    const carouselItems = props.data;

    // Ref for image component width
    const componentWidth = useRef(0);

    // get width of all image items mapped
    const getItemsWidth = () => {return (componentWidth.current.clientWidth * carouselItems.length)}

    // windowWidth state
    const [winWidth, setWidth] = useState(window.innerWidth);

    // windowWidth listener
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
    });

    // Calculate bounds for Carousel
    const [leftBound, setLeftBound] = useState(((carouselItems.length * componentWidth.current.clientWidth) - winWidth) * -1);
    const updateLeftBound = () => { setLeftBound(((carouselItems.length * componentWidth.current.clientWidth) - winWidth) * -1)}

    // Ease in animation on mount
    const easeIn = useTrail(carouselItems.length, {
        from: {
            transform: 'translate3d(1080px,0,0)'
        },
        to: {
            transform: 'translate3d(0,0,0)'
        }

    })

    // Animation for drag
    const [{ xy }, setLocation] = useSpring(() => ({ xy: [0 , 0] }))

    // bind dragging actions
    const bindDraggable = useDrag(({ offset: [xy] }) =>
    {
        // Only allow dragging if items exceed window width
        if ( getItemsWidth() > winWidth ) 
        {
            setLocation({xy})
            updateLeftBound()
        }
    },
    {
        bounds: {right: 0, left: leftBound},
        rubberband: true
    }
    )

    return (
        <animated.div className="Nav-Image-Container" {...bindDraggable()} 
        style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px, 0, 0)`)
        }}>
            {
                easeIn.map((item, index) =>
                    (
                        <animated.div ref={componentWidth} className="Nav-Image-Item" key={index} style={item}>
                            <CarouselItem name={carouselItems[index].title} src={carouselItems[index].image} route={carouselItems[index].link}/>
                        </animated.div>
                    )
                )
            }
        </animated.div>
    )
}