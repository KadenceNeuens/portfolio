import React, {component} from 'react';
import NavItem from './navItem.jsx';

class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const className = "foobar"
        // HTML here
        return (
            <div className={className}>
                <ul>
                    <NavItem name="About" route="/about"/>
                    <NavItem name="Projects" route="/projects"/>
                    <NavItem name="Art" route="/art"/>
                    <NavItem name="Music" route="/music"/>
                    <NavItem name="Games" route="/games"/>
                </ul>
            </div>
        )
    }
}

export default Nav