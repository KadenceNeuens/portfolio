import React from 'react';
import { useEffect } from 'react';
import { animated } from 'react-spring';
import './preview.css';

export default function ItemPreview(props)
{
    const ESCAPE_KEY = 27;

    const {handler} = props
    const handleEsc = (event) =>
        {
           switch(event.keyCode)
            {
                case ESCAPE_KEY:
                    handler();
                    break;
                default:
                    break;
            }
        }
    useEffect(() =>{
        document.addEventListener('keydown', handleEsc);
        return () => { document.removeEventListener('keydown', handleEsc); }
    })

    return(
        <animated.div className="PreviewWrapper" onClick={props.handler}>
            <div className="OpaqueBackground"/>
            <div className="ImagePreview">
                <div className="Close">click anywhere to close!</div>
                <img src={props.image} alt={props.caption}/>
                <div className="LabelBackground"><label>{props.caption}</label></div>
            </div>
        </animated.div>
    )
}