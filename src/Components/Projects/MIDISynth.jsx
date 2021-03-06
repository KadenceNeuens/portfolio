import React from 'react';
import MIDISynthImg from '../ImageLinkSlider/Images/MIDISynth.png'

export default function MIDISynth(props)
{
    return(
        <>
            <h2>MIDI Synthesizer</h2>
            <img src={MIDISynthImg} alt="MIDI Synthesizer App"/>
            <p>This is a simple MIDI enabled synthesizer I made using the JUCE framework in C++. It should work with
                MIDI input from any MIDI controller you own, keyboard or otherwise.</p>
            <p>You can download and try it out yourself <a href="https://drive.google.com/drive/folders/16CFX9_HKcSe8UnJvhb46sSi87mjz6a3z?usp=sharing">here!</a></p>
        </>
    )
}
