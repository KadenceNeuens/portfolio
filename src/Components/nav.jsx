import React from 'react';
import NavItem from './navItem.jsx';

export default function Nav()
{
    return (
        <>
            <ul>
                <NavItem name="About" route="/about"/>
                <NavItem name="Projects" route="/projects"/>
                <NavItem name="Art" route="/art"/>
                <NavItem name="Music" route="/music"/>
                <NavItem name="Games" route="/games"/>
            </ul>
        </>
    )
}