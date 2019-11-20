import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

import HaeTuote from '../toiminnallisuudet/HaeTuote';
import LuoTuote from '../toiminnallisuudet/LuoTuote';

 class Home extends Component{
    
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
                <div class="col-md-4">
            <div className="container">
                <h3 className="center"></h3>
                <div className="box">
                    {itemList}
                </div>
<<<<<<< HEAD
                </div>
=======
                <div><HaeTuote/></div>
                <div><LuoTuote/></div>
>>>>>>> 904480543c055225bab71db870c2be6299f82160
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