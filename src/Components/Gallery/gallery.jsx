/*=====================================================================================================//
 * Image Gallery
 * by Kadence Neuens
 * 
 * Check my repo at https://github.com/KadenceNeuens/image-gallery for more information and updates
 *====================================================================================================*/

import React from 'react'
import { useState } from 'react'
import { animated } from 'react-spring'
import ItemPreview from './itemPreview'
import './styles.css'
import GalleryItem from './galleryItem'

export default function Gallery(props)
{
    const [imageShown, setImageShown] = useState(false) 
    const [currentPreviewImage, setPreviewImage] = useState(null);
    const [currentPreviewCaption, setPreviewCaption] = useState(null);

    const galleryItems = props.data;

    const handler = () =>
    {
        setImageShown(false);
    }

    function previewItem(image, caption) {
        setPreviewImage(image);
        setPreviewCaption(caption);
        console.log(currentPreviewImage)
        console.log(currentPreviewCaption)
        setImageShown(true);
    }

    return(
        <>
        { imageShown ? (
        <animated.div className="Preview">
            <ItemPreview image={currentPreviewImage} caption={currentPreviewCaption} handler={handler}/>
        </animated.div>) : null}
        
        <div className="Gallery">
            {
            galleryItems.map((item, index) => (
                <div className="Section" key={index}>
                    <h2 key={index}>{item.section}</h2>
                    {
                    item.images.map((current, index) => (
                        <div onClick={() => previewItem(current.image, current.caption)} key={index}>
                            <GalleryItem className="Image-Item" key={index} image={current.image} caption={current.caption}/>
                        </div>
                    ))
                    }
                </div>
            ))
            }
        </div>
        </>
    )
}