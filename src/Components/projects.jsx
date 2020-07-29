import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Carousel from './Carousel/carousel';
import {projectCarouselItems} from './Carousel/CarouselItems/projectCarouselItems'

import Portfolio from './Projects/project_a';
import Project_B from './Projects/project_b';
import Project_C from './Projects/project_c';

export default function Projects(props)
{

    return(
        <>
            <Carousel data={projectCarouselItems}/>
            <div className="Entry">
                <Switch>
                    <Route path="/projects/project_a" component={Portfolio}/>
                    <Route path="/projects/project_b" component={Project_B}/>
                    <Route path="/projects/project_c" component={Project_C}/>
                    <Route component={null} />
                </Switch>
            </div>
        </>
    )
}