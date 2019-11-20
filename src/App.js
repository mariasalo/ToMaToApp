import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Add from './components/Add';
import Update from './components/Update';

import './index.css';

// import LuoTuote from './LuoTuote';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/update" component={Update}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }

}

export default App;
