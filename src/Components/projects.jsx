import React from 'react';
import {Route} from 'react-router-dom';

import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider';
import {projectSliderItems} from './ImageLinkSlider/SliderItems/projectSliderItems'

import ImageLinkSliderPage from './Projects/image-link-slider';
import MIDISynth from './Projects/MIDISynth';
import Project_C from './Projects/project_c';
import { useEffect } from 'react';

export default function Projects(props)
{
    const {handler} = props
    useEffect(() => {
        console.log("success")
        handler()
    })

    return(
        <>
            <ImageLinkSlider data={projectSliderItems} height="10em" width="20em"/>
            <div className="Entry">
                <Route path="/projects/image-link-slider" component={ImageLinkSliderPage}/>
                <Route path="/projects/midisynth" component={MIDISynth}/>
                <Route path="/projects/project_c" component={Project_C}/>
                <Route component={null} />
            </div>
        </>
    )
}