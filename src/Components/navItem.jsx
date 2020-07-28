import React from 'react';
import {Link} from 'react-router-dom'

export default function NavItem(props){

    return (
        <>
        <li><Link to={props.route}>{props.name}</Link></li>
        </>
    )

}