import React from 'react';
import {Route, Switch} from 'react-router-dom'

import NavItem from './navItem'

import Game_A from './Games/game_a'
import Game_B from './Games/game_b'
import Game_C from './Games/game_c'

export default function Games(props)
{

    return(
        <>
            <ul>
                <NavItem name="Game A" route="/games/game_a">Game A</NavItem>
                <NavItem name="Game B" route="/games/game_b">Game B</NavItem>
                <NavItem name="Game C" route="/games/game_c">Game C</NavItem>
            </ul>
            <Switch>
                <Route path="/games/game_a" component={Game_A}/>
                <Route path="/games/game_b" component={Game_B}/>
                <Route path="/games/game_c" component={Game_C}/>
                <Route component={null} />
            </Switch>
        </>
    )
}