import React from 'react';
import NavItem from './navItem.jsx';

export default function Nav(props)
{

    return (
        <>
            <ul>
                <NavItem handler={props.handler} name="About" route="/about"/>
                <NavItem handler={props.handler} name="Projects" route="/projects"/>
                <NavItem handler={props.handler} name="Art" route="/art"/>
                <NavItem handler={props.handler} name="Music" route="/music"/>
                <NavItem handler={props.handler} name="Games" route="/games"/>
            </ul>
        </>
    )
}