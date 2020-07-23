import React, {component} from 'react';
import {Link} from 'react-router-dom'

class NavItem extends React.Component
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
            <>
            <li><Link to={this.props.route}>{this.props.name}</Link></li>
            </>
        )
    }
}

export default NavItem