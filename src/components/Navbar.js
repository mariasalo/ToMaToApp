import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import Cart from './Cart';

const Navbar = ()=>{
    const padding = { padding: 5 }
    return(
      // <div>
      //   <Router>
      //     <div>
      //       <div>
      //         <Link style={padding} to="/">home</Link>
      //         {/* <Link style={padding} to="/ruoat">selaa ruokia</Link> */}
      //         <Link style={padding} to="/cart">varaukset</Link>
      //         <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
      //       </div>
      //       <Route exact path="/" render={() => <Home />} />
      //       {/* <Route path="/notes" render={() => <Notes />} /> */}
      //       <Route path="/cart" render={() => <Cart />} />
      //     </div>
      //   </Router>
      // </div>
          <nav className="nav-wrapper">
              <div className="container">
                  <Link to="/" className="brand-logo">logo</Link>
                  
                  <ul className="right">
                      <li><Link to="/">Shop</Link></li>
                      <li><Link to="/cart">My cart</Link></li>
                      {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
                  </ul>
              </div>
          </nav>
    )
}



export default Navbar;

  

  
