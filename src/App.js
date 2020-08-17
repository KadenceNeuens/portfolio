import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Nav from './Components/nav.jsx'
import Home from './Components/home.jsx'
import About from './Components/about.jsx'
import Projects from './Components/projects.jsx'
import Art from './Components/art.jsx'
import Music from './Components/music.jsx'
import Games from './Components/games.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <li><Link to="/">Kadence Neuens</Link></li>
        </h1>
        <Nav/>
      </header>
      <div className="App-body">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/art" component={Art} />
        <Route path="/music" component={Music} />
        <Route path="/games" component={Games} />
        <Route component={null} />
      </div>
    </div>
  );
}

export default App;
