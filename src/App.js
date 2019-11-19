import React from 'react';
// import LuoTuote from './LuoTuote';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';
// import DataBox from './DataBox.js'
import LuoTuote from './LuoTuote';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TomaattiAPP! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LuoTuote/>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navheader">
//           <div className="collapse navbar-collapse" >
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <Link to={'/LuoTuote'} className="nav-link">Luo Tuote</Link>
//               </li>
//             </ul>
//           </div>
//         </nav> <br />
//         <Switch>
//           <Route exact path='/LuoTuote' component={LuoTuote} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
