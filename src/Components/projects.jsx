import React from 'react';
import {Route} from 'react-router-dom';
import { gaPageView } from '../index.js'

import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider';
import {projectSliderItems} from './ImageLinkSlider/SliderItems/projectSliderItems'

import ImageLinkSliderPage from './Projects/image-link-slider';
import MIDISynth from './Projects/MIDISynth';
import RRandallSite from './Projects/rrandall-site';
import { useEffect } from 'react';

export default function Projects(props)
{

    useEffect(() => { gaPageView("Projects"); }, []);

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return(
        <>
            <ImageLinkSlider data={projectSliderItems} height="10em" width="20em"/>
            <div className="Entry">
                <Route path="/projects/image-link-slider" component={ImageLinkSliderPage}/>
                <Route path="/projects/midisynth" component={MIDISynth}/>
                <Route path="/projects/rrandall-site" component={RRandallSite}/>
                <Route component={null} />
            </div>
        </>
    )
}