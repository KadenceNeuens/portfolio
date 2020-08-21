import React, { useState } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Nav from './Components/nav.jsx'
import Home from './Components/home.jsx'
import About from './Components/about.jsx'
import Projects from './Components/projects.jsx'
import Art from './Components/art.jsx'
import Music from './Components/music.jsx'
import Games from './Components/games.jsx'

function App(props) {

  const [title, setTitle] = useSpring(() => ({textShadow: '2px 2px 0 #A27500, 4px 4px 0 #0E1C6F'}));

  const [headerAnim, setHeaderAnim] = useSpring(() => ({
    justifyContent: 'center',
    padding: '0 0 0 0'
  }))
  
  const bodyAnim = useSpring({
    opacity: 0
  })

  const isHome = () => {setHeaderAnim(() => ({
    justifyContent: 'center',
    padding: '0 0 0 0'
  }))}

  const notHome = () => {setHeaderAnim(() => ({
    justifyContent: 'flex-start',
    padding: '2em 0 0 0'
  }))}

  return (
    <animated.div className="App" style={headerAnim}>
      <header className="App-header">
        <h1>
          <animated.div style={title}>
            <Link to="/"
            onMouseEnter={()=>setTitle({textShadow: '4px 4px 0 #006161, 8px 8px 0 #A27500'})}
            onMouseLeave={()=>setTitle({textShadow: '2px 2px 0 #A27500, 4px 4px 0 #0E1C6F'})}>Kadence Neuens</Link>
          </animated.div>
        </h1>
        <Nav/>
      </header>
      <animated.div className="App-body">
        <Route path="/"         render={()=> <Home      handler={isHome}/>} exact/>
        <Route path="/about"    render={()=> <About     handler={notHome}/>}/>
        <Route path="/projects" render={()=> <Projects  handler={notHome}/>}/>
        <Route path="/art"      render={()=> <Art       handler={notHome}/>}/>
        <Route path="/music"    render={()=> <Music     handler={notHome}/>}/>
        <Route path="/games"    render={()=> <Games     handler={notHome}/>}/>
        <Route component={null} />
      </animated.div>
    </animated.div>
  );
}

export default App;
