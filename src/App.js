import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Nav from './Components/nav.jsx'
import Home from './Components/Home.jsx'

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
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={Home} />
            <Route path="/projects" component={Home} />
            <Route path="/art" component={Home} />
            <Route path="/music" component={Home} />
            <Route component={Error} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
