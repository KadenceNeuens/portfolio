import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { initGoogleAnalytics, gaPageView } from './index.js'

// Page Components
import Nav from './Components/nav.jsx';
import Home from './Components/home.jsx';
import About from './Components/about.jsx';
import Projects from './Components/projects.jsx';
import Art from './Components/art.jsx';
import Music from './Components/music.jsx';
import Games from './Components/games.jsx';
import Error from './Components/error.jsx';

function App(props) {

  // Google Analytics
  useEffect(() => { initGoogleAnalytics(); }, []);
  useEffect(() => { gaPageView("Home"); }, []);

  // Home state for animation
  const [home, setHome] = useState(true)

  // Animation Springs
  const [title, setTitle] = useSpring(() => ({textShadow: '2px 2px 0 #A27500, 4px 4px 0 #0E1C6F'}));

  const [headerAnim, setHeaderAnim] = useSpring(() => ({
    top: '50%',
    transform: 'translateY(-50%)',
    position: 'absolute',
    marginTop: '0em'
  }))

  const [bodyAnim, setBodyAnim] = useSpring(() => ({
    opacity: 1,
    margin: '0em 0em 0em 0em'
  }))

  // Handler methods for home header animation
  const isHome = () => {
    if (home === false)
    {
      setHome(true);
      setHeaderAnim(() => ({
        top: '50%',
        transform: 'translateY(-50%)',
        position: 'absolute',
        marginTop: '0em'
      }))
      setBodyAnim(() => ({
        opacity: 0,
        margin: '0em 0em 0em 0em'
      }))
    }
  }

  const notHome = () => {
    if (home === true)
    {
      setHome(false);
      setHeaderAnim(() => ({
        top: '0%',
        transform: 'translateY(0%)',
        position: 'relative',
        marginTop: '5em'
      }))
      setBodyAnim(() => ({
        opacity: 1,
        margin: '0em 0em 2em 0em'
      }))
    }
  }

  return (
    <div className="App">
      <animated.div className="App-header" style={headerAnim}>
        <h1>
          <animated.div style={title}>
            <Link to="/"
            onMouseEnter={()=>setTitle({textShadow: '4px 4px 0 #006161, 8px 8px 0 #A27500'})}
            onMouseLeave={()=>setTitle({textShadow: '2px 2px 0 #A27500, 4px 4px 0 #0E1C6F'})}>Kadence Neuens</Link>
          </animated.div>
        </h1>
        <Nav className="Nav"/>
      </animated.div>
      <animated.div className="App-body" style={bodyAnim}>
        <Switch>
          <Route path="/"         render={()=> <Home      handler={isHome}/>} exact/>
          <Route path="/about"    render={()=> <About     handler={notHome}/>}/>
          <Route path="/projects" render={()=> <Projects  handler={notHome}/>}/>
          <Route path="/art"      render={()=> <Art       handler={notHome}/>}/>
          <Route path="/music"    render={()=> <Music     handler={notHome}/>}/>
          <Route path="/games"    render={()=> <Games     handler={notHome}/>}/>
          <Route path="/404"      render={()=> <Error     handler={notHome}/>}/>
          <Redirect to="/404"/>
        </Switch>
      </animated.div>
    </div>
  );
}

export default App;
