import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import Cart from './Cart';
import Add from './Add';

const Navbar = ()=>{
    const padding = { padding: 5 }
    return(
        
      // <div>
      //   <Router>
      //     <div>
      //       <div>
      //         <Link to="/">home</Link>
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
                  <Link to="/" className="brand-logo">ToMaTo</Link>
                  
                  <ul className="right">
                      <li><Link to="/">Etsi</Link></li>
                      <li><Link to="/add">Ilmoita</Link></li>
                      <li><Link to="/cart">Profiili</Link></li>
                      {/* <li><Link to="/cart"><i className="material-icons">eco</i></Link></li> */}
                  </ul>
              </div>
          </nav>
    )
}



export default Navbar;

  

  
