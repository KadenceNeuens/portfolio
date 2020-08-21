import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { useEffect } from 'react';

import ImageLinkSlider from './ImageLinkSlider/imageLinkSlider';
import {gameSliderItems} from './ImageLinkSlider/SliderItems/gameSliderItems'

import Game_A from './Games/game_a';
import Game_B from './Games/game_b';
import Game_C from './Games/game_c';
export default function Games(props)
{

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return(
        <>
            <ImageLinkSlider data={gameSliderItems} height="10em" width="20em"/>
            <Route path="/games/game_a" component={Game_A}/>
            <Route path="/games/game_b" component={Game_B}/>
            <Route path="/games/game_c" component={Game_C}/>
            <Route component={null} />
        </>
    )
}