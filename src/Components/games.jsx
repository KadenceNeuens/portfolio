import React from 'react';
import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import { gaPageView } from '../index.js'

import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider';
import {gameSliderItems} from './ImageLinkSlider/SliderItems/gameSliderItems'

import Game_A from './Games/game_a';
import Game_B from './Games/game_b';
import Game_C from './Games/game_c';
export default function Games(props)
{

    useEffect(() => { gaPageView("Games"); }, []);

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return(
        <>
            <p>Currently Empty</p>
            <ImageLinkSlider data={gameSliderItems} height="10em" width="20em"/>
            <Route path="/games/game_a" component={Game_A}/>
            <Route path="/games/game_b" component={Game_B}/>
            <Route path="/games/game_c" component={Game_C}/>
            <Route component={null} />
        </>
    )
}