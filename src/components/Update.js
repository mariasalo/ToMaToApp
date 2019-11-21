import React, { Component } from "react";
// import '../toiminnallisuudet/LuoTuote';
import MuokkaaTuote from '../toiminnallisuudet/MuokkaaTuote';
import PoistaTuote from "../toiminnallisuudet/PoistaTuote";

 
class Update extends Component {
  state = {tuote: "", data: []}
  componentDidMount() {
    this.setState({tuote: this.props.location.data.nimi, data: this.props.location.data})
  }
    render() {
     return (
         <div className="container">
        <div className="update">
          <h3 className="center"></h3>
          <div className="box"></div>
          <p></p>
          <div><MuokkaaTuote nimi={this.state.tuote} id={this.state.data.tuoteId}/></div>  
          <div><PoistaTuote nimi={this.state.tuote} id={this.state.data.tuoteId}/></div> 
          {/* <div><PoistaTuote/></div> */}
          
          </div>
          </div>
        )
    }
  
}
 
export default Update;