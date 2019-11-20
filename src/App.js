import React, { Component } from 'react';
// import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
// import LuoTuote from './LuoTuote';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <LuoTuote/>
//     </div> 
//   );
// }

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
}

export default App;

