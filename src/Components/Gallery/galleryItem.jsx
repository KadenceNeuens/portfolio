import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function GalleryItem(props)
{
    const [hover, setHover] = useSpring(()=>({transform: 'scale(1.0)', boxShadow: '0.2em 0.2em 1em 0.2em rgba(0,0,0,0.4)'}))
    return(
        <animated.div className="Image-Item-Wrapper" style={hover}
        onMouseEnter={()=>setHover({transform: 'scale 1.08', boxShadow: '0.2em 0.2em 0.5em 0.2em rgba(0,0,0,0.4)'})}
        onMouseLeave={()=>setHover({transform: 'scale 1.0', boxShadow: '0.2em 0.2em 0.2em 0.1em rgba(0,0,0,0.3)'})}>
        <div className="Image-Item">
            <img src={props.image} alt={props.caption}/>
        </div>
        </animated.div>
    )
}