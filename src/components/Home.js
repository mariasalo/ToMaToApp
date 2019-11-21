import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import HaeTuote from '../toiminnallisuudet/HaeTuote';
//import talletaTuotteet from '..toiminnallisuudet/TuoteService.js'; // ei toimi
import getKaikki from '../toiminnallisuudet/tuoteService';
import Tuote from '../toiminnallisuudet/Tuote';

 class Home extends Component{
//nämä kuntoon:-----
    constructor(props) {  
        super(props);  
        //this.state = 
        this.state = {tuotteet: [
            {id:1,title:'Kurpitsakeitto', desc: "Keilaniemi, Espoo", price:110},
            {id:2,title:'Luomukananmunia', desc: "Kallio, Helsinki", price:80},
            {id:3,title:'Banaaneja', desc: "Punavuori, Helsinki",price:120},
            {id:4,title:'Riisiä', desc: "Otaniemi, Espoo", price:260},
            {id:5,title:'Leivonnaiset', desc: "Lehtisaari, Helsinki", price:160},
            {id:6,title:'Tomaatteja', desc: "Ruoholahti, Helsinki",price:90}
        ],};  
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
        //oma .js luokka addToCart sijaan jolle välitetään parametri
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

        let itemList2 = this.state.tuotteet.map(item=>{
            return(
                <Tuote key={item.id} data={item}>

                        
                 </Tuote>
        
            );
        })

        return(
            <div className="container">
                <h3 className="center"></h3>
                <div className="box">
                    {itemList}
                    {itemList2}
                </div>
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
