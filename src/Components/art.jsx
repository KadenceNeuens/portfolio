import React from 'react';
import { useEffect } from 'react';
import Gallery from './Gallery/gallery';
import { gaPageView } from '../index.js'

import {galleryItems} from './Gallery/art/galleryItems';

import Illustrator from '../ArtIcons/icons8-adobe-illustrator-50.png';
import AfterEffects from '../ArtIcons/icons8-adobe-after-effects-50.png';
import Lightroom from '../ArtIcons/icons8-adobe-lightroom-50.png';
import Photoshop from '../ArtIcons/icons8-adobe-photoshop-50.png';
import PremierePro from '../ArtIcons/icons8-adobe-premiere-pro-50.png';
import Inkscape from '../ArtIcons/icons8-inkscape-50.png';

import './art.css'

export default function Art(props)
{
    
    useEffect(() => { gaPageView("Art"); }, []);

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <Gallery data={ galleryItems }/>
            <div className="Apps">
                <img src={Photoshop} alt="Adobe Photoshop"/>
                <img src={Illustrator} alt="Adobe Illustrator"/>
                <img src={Lightroom} alt="Adobe Lightroom"/>
                <img src={AfterEffects} alt="Adobe After Effects"/>
                <img src={PremierePro} alt="Adobe Premiere Pro"/>
                <img src={Inkscape} alt="Inkscape"/>
                <div className="IconSource">
                    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/adobe-illustrator">Adobe Illustrator</a>, <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/adobe-lightroom">Adobe Lightroom</a> and other icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
                </div>
            </div>
        </>
    )
}