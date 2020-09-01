import React from 'react';
import MIDISynthImg from '../ImageLinkSlider/Images/MIDISynth.png'

export default function MIDISynth(props)
{
    return(
        <>
            <h2>MIDI Synthesizer</h2>
            <img src={MIDISynthImg} alt="MIDI Synthesizer App"/>
            <p>This is a simple MIDI enabled synthesizer I made using the JUCE framework. It should work with
                MIDI input from any MIDI controller you own, keyboard or otherwise.</p>
            <p>You can download and try it out yourself <a href="google.com">here!</a></p>
        </>
    )
}
