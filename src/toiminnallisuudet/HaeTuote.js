import React, { Component } from 'react';  
import axios from 'axios';  
import PoistaTuote from './PoistaTuote';
import Tuote from './Tuote';
import getKaikki from './tuoteService';  //tässä kutsutaan getKaikki funktiota tuoteServicestä
  
export default class HaeTuote extends Component {  
  
//   constructor(props) {  
//       super(props);  
//       //this.state = 
//       this.state = {tuotteet: []};  
//     }  
//     componentDidMount(){  
//       // debugger;  
//       getKaikki(this.talletaTuotteet)
//     }  
// //tämä liittyy GET pyyntöön joka on tuoteService.js luokassa
//     talletaTuotteet(data){
//       this.setState({ tuotteet: data });
//     }
      
    // tabRow(){  //looppaa datan läpi
    //   const list = this.state.tuotteet.map(function(object, i){  
    //       return <HaeTuote obj={object} key={i} />; 


    //   });  
    // }  
  
    render() {  //
      console.dir(this.props.tuotteet)
      const list = this.props.tuotteet.map(function(data, i){  
        return <Tuote data={data} id={data.tuoteId} nimi={data.nimi} kuvaus={data.kuvaus} lkm={data.lkm} key={i} />; 
      }); 
      return (  
        <div>  

          <h4 align="center">HaeTuote</h4>  
          <table className="tuote-lista" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Nimi</th>  
                <th>Kuvaus</th>  
                <th>Lkm</th>  
                {/* <th>Sijainti</th>   */}
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody>  
             { list }
            </tbody>  
          </table>

        </div>  
      );  
    }  
  }  