import React from 'react';
import {Link} from 'react-router-dom'

export default function NavImageItem(props) {
    return (
        <>
            <Link className="Nav-Image-Item" to={props.route}>
                <img className="Nav-Image" src = {props.src}>
                </img>
                <label className="Nav-Image-Label">
                        {props.name}
                </label>
            </Link>
        </>
    )
}