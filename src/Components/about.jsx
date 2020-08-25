import React from 'react';
import { useEffect } from 'react';
import './about.css'

export default function About(props)
{
    
    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <div className="Wrapper">
                <div className="About">
                    <p>
                        Hey! I've spent most of my life in front of a computer. I live to create art, software, games, and music.
                        I'm always trying to improve my skills so I can create the best experience possible through every medium I 
                        choose to express myself. 
                    </p>
                </div>
                <div>
                    <p>
                        My main interests are:
                    </p>
                    <ul className="Interests">
                        <li>Programming</li>
                        <li>Writing/Producing Music</li>
                        <li>Digital/Traditional Art {"("}Especially Pixel Art{")"}</li>
                        <li>Cooking</li>
                        <li>Videography</li>
                    </ul>
                    <p>
                        You can find me on the following platforms: 
                    </p>
                    <ul className="Socials">
                        <li>Github</li>
                        <li>Instagram</li>
                        <li>Soundcloud</li>
                    </ul>
                </div>
            </div>
        </>
    )
}