import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

const Navbar = ()=>{
    const padding = { padding: 5 }
    return(
      <div>
        <Router>
          <div>
            <div>
              <Link style={padding} to="/">home</Link>
              <Link style={padding} to="/ruoat">selaa ruokia</Link>
              <Link style={padding} to="/kayttaja">varaukset</Link>
            </div>
            {/* <Route exact path="/" render={() => <Home />} />
            <Route path="/notes" render={() => <Notes />} />
            <Route path="/users" render={() => <Users />} /> */}
          </div>
        </Router>
      </div>
    )
}

export default Navbar;

  

  
