import React from 'react';
import GPSLogDriveSite from './Images/GPSLogDriveSite.png'

export default function GPSLogDrive(props)
{
    const paragraphStyles = {textAlign: 'left'}

    return(
        <>
            <h2>GPS Log Drive</h2>
            <img src={GPSLogDriveSite} style={{width: '100%'}} alt="View of the GPSLogDrive.com website"/>
            <p style={paragraphStyles}>
                GPS Log Drive was a research and design project made in collboration with <a href="https://ianeschervierck.com/">Ian Vierck</a> of the University of Oregon as part of their masters project, <a href="https://ianeschervierck.com/work/large-wood">Large Wood, Long Legacy</a>.
            </p>
            <p style={paragraphStyles}>
                The idea of strapping a GPS to a piece of wood is not a new one. Researchers, like the ones at HJ Andrews, have been doing similar projects for years. Inspired by the idea of documenting the log's journey, and imagining the voyage large wood takes from the mountains to the sea, <a href="https://wnb4.com/">Will Bonner</a> and <a href="https://ianeschervierck.com/">Ian Vierck</a> had the idea of tracking wood while it travels down the McKenzie River.
            </p>
            <p style={paragraphStyles}>
                GPS Log leveraged a sattelite tracking device made by <a href="https://www.findmespot.com/">SPOT</a> to track live data of its movements. The log was engineered like a boat to consistently float in the same orientation with its antenna pointing towards the sky. As the log pinged every two minutes, the data was displayed live on GPSLogDrive.com for folks to watch as it made its way downriver.
            </p>
            <p style={paragraphStyles}>
                I built this website to track GPS Log and share live information about its voyages. You can view the GPS Log Drive's past experiments and further information <a href="https://gpslogdrive.com/">here!</a>
            </p>
        </>
    )
}
