import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
// import LuoTuote from './LuoTuote';
// import logo from './logo.svg';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';
// import DataBox from './DataBox.js'
import LuoTuote from './LuoTuote';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }


//function App() {
  //return (
    //<div className="App">
      //<LuoTuote/>
    //</div>
  //);
//}

export default App;
