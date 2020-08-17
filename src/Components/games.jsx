import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Carousel from './Carousel/carousel';
import {gameCarouselItems} from './Carousel/CarouselItems/gameCarouselItems'

import Game_A from './Games/game_a';
import Game_B from './Games/game_b';
import Game_C from './Games/game_c';
export default function Games(props)
{

    return(
        <>
            <Carousel data={gameCarouselItems}/>
            <Route path="/games/game_a" component={Game_A}/>
            <Route path="/games/game_b" component={Game_B}/>
            <Route path="/games/game_c" component={Game_C}/>
            <Route component={null} />
        </>
    )
}