import React from 'react';
import ImageLinkSliderPreview from './Images/ImageLinkSlider_Preview.gif'

export default function ImageLinkSlider(props)
{
    return(
        <>
            <h2>Image Link Slider</h2>
            {/* eslint-disable-next-line */}
            <img src={ImageLinkSliderPreview} alt="Preview animation for Image Link Slider"/>
            <p>A simple image link slider component built for React. Uses react-router-dom for 
                links, react-use-gesture for drag gesture scrolling, and react-spring for animation. 
                Easily re-style to fit different use cases.</p>
            <p>To learn more, check out the github repo 
                <a href="https://github.com/KadenceNeuens/image-link-slider"> here!</a></p>
        </>
    )
}
