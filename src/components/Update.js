import React, { Component } from "react";
// import '../toiminnallisuudet/LuoTuote';
import MuokkaaTuote from '../toiminnallisuudet/MuokkaaTuote';
import Edit from "../toiminnallisuudet/MuokkaaTuote";
import DeleteTuote from "../toiminnallisuudet/PoistaTuote";

 
class Update extends Component {
    render() {

     return (
         <div className="container">
        <div className="update">
          <h3 className="center"></h3>
          <div className="box"></div>
          
          <p>Muokkaa ilmoitusta:</p>
          {/* <div><MuokkaaTuote/></div> tai <div><Edit/></div> riippuen tietty mitä MuokkaaTuote palauttaa?*/}
          
          {/* <div className="poistoon"></div> */}
          {/* <p><DeleteTuote/></p> */}
{/* 
          { <div><PoistaTuote/></div> } */}
          
          </div>
          </div>
        )
    }
  
}
 
export default Update;