import React, { Component } from "react";
import LuoTuote from '../toiminnallisuudet/LuoTuote';
import MuokkaaTuote from '../toiminnallisuudet/MuokkaaTuote';
 
class Add extends Component {
    render() {

     return (
         <div className="container">
        <div className="add">
          <h3 className="center"></h3>
          <div className="box"></div>
          <div><LuoTuote/></div>
          <div><MuokkaaTuote/></div>
          </div>
          </div>
        )
    }
  
}
 
export default Add;






