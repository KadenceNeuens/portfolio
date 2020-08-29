import React from 'react';
import { animated } from 'react-spring';
import './preview.css';

export default function ItemPreview(props)
{

    return(
        <animated.div className="PreviewWrapper" onClick={props.handler}>
            <div className="OpaqueBackground"/>
            <div className="ImagePreview">
                {/* <div className="Close">X</div> */}
                <img src={props.image} alt={props.caption}/>
                <div className="LabelBackground"><label>{props.caption}</label></div>
            </div>
        </animated.div>
    )
}