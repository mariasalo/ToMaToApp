import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import HaeTuote from '../toiminnallisuudet/HaeTuote';
//import talletaTuotteet from '..toiminnallisuudet/TuoteService.js'; // ei toimi
import getKaikki from '../toiminnallisuudet/tuoteService';

 class Home extends Component{
//nämä kuntoon:-----
    constructor(props) {  
        super(props);  
        //this.state = 
        this.state = {tuotteet: []};  
      }  
      componentDidMount(){  
        // debugger;  
        getKaikki(this.talletaTuotteet)
      }  
  //tämä liittyy GET pyyntöön joka on tuoteService.js luokassa
      talletaTuotteet = (data) => {
          console.dir(data)
        this.setState({ tuotteet: data });
      }
      //YLLÄOLEVAT LISÄTTY
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){

        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title"></span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p><b>{item.title}</b></p>
                            <p>{item.desc}</p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Kaikki tuotteet</h3>
                <div className="box">
                    {itemList}
                </div>

                <div><HaeTuote tuotteet={this.state.tuotteet}/></div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
