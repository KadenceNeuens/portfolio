import React from 'react';
import {Link} from 'react-router-dom'

export default function NavItem(props) {

    return (
        <>
        <li><Link onClick={props.handler} to={props.route}>{props.name}</Link></li>
        </>
    )
}