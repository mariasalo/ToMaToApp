import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import Cart from './Cart';
import Add from './Add';
import Update from './Update';

const Navbar = ()=>{
    const padding = { padding: 5 }
    return(
          <nav className="nav-wrapper">
              <div className="container">
                  <Link to="/" className="brand-logo left"><strong>ToMaTo</strong></Link>
                  
                  <ul className="right hide-on-small-only">
                      <li><Link to="/">Selaa tuotteita</Link></li>
                      <li><Link to="/add">Ilmoita uusi tuote</Link></li>
                      <li><Link to="/cart">Omat varaukset   </Link></li>
                      <li><i className="large material-icons md-48">account_box</i></li>
                  </ul>
              </div>
          </nav>
    )
}


export default Navbar;

  

  
