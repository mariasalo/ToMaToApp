import React, { Component } from 'react';  
import axios from 'axios';  
import PoistaTuote from './PoistaTuote';
import getKaikki from './tuoteService';  //tässä kutsutaan getKaikki funktiota tuoteServicestä
  
export default class HaeTuote extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {tuotteet: []};  
    }  
    componentDidMount(){  
      // debugger;  
      getKaikki(this.talletaTuotteet)
    }  
//tämä liittyy GET pyyntöön joka on tuoteService.js luokassa
    talletaTuotteet(data){
      this.setState({ tuotteet: data });
    }
      
    tabRow(){  
      return this.state.tuotteet.map(function(object, i){  
          return <HaeTuote obj={object} key={i} />; 


      });  
    }  
  
    render() {  
      return (  
        <div>  
          {/* <HaeTuote/> */}
          <h4 align="center">HaeTuote</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Nimi</th>  
                <th>Kuvaus</th>  
                <th>Lkm</th>  
                <th>Sijainti</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>
          <div>
            {getKaikki(this.talletaTuotteet)}
          </div> 
        </div>  
      );  
    }  
  }  