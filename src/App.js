import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Add from './components/Add';
import Update from './components/Update';
import MuokkaaTuote from './toiminnallisuudet/MuokkaaTuote';
import './index.css';
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
                    <Route path="/update" exact component={Update}/>
                    <Route exact path="/update/:id" component={MuokkaaTuote}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }

}

export default App;
