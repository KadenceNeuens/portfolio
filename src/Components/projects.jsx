import React from 'react';
import {Route, Switch} from 'react-router-dom'

import NavItem from './navItem'

import Project_A from './Projects/project_a'
import Project_B from './Projects/project_b'

export default function Projects(props)
{

    return(
        <>
            <ul>
                <NavItem name="Project A" route="/projects/project_a">Project A</NavItem>
                <NavItem name="Project B" route="/projects/project_b">Project B</NavItem>
            </ul>
            <div className="Entry">
                <Switch>
                    <Route path="/projects/project_a" component={Project_A}/>
                    <Route path="/projects/project_b" component={Project_B}/>
                    <Route component={null} />
                </Switch>
            </div>
        </>
    )
}