import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
// import LuoTuote from './LuoTuote';
// import logo from './logo.svg';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';
<<<<<<< HEAD
import LuoTuote from './LuoTuote';
=======
// import DataBox from './DataBox.js'
// import LuoTuote from './LuoTuote';

>>>>>>> 904480543c055225bab71db870c2be6299f82160


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
  }}

}

<<<<<<< HEAD
//function App() {
  //return (
    //<div className="App">
      //<LuoTuote/>
    //</div>
  //);

  export default App;
=======
export default App;
>>>>>>> 904480543c055225bab71db870c2be6299f82160
