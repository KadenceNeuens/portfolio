import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Carousel from './Carousel/carousel';
import {projectCarouselItems} from './Carousel/CarouselItems/projectCarouselItems'

import ImageLinkSlider from './Projects/image-link-slider';
import MIDISynth from './Projects/MIDISynth';
import Project_C from './Projects/project_c';

export default function Projects(props)
{

    return(
        <>
            <Carousel data={projectCarouselItems}/>
            <div className="Entry">
                <Route path="/projects/image-link-slider" component={ImageLinkSlider}/>
                <Route path="/projects/midisynth" component={MIDISynth}/>
                <Route path="/projects/project_c" component={Project_C}/>
                <Route component={null} />
            </div>
        </>
    )
}