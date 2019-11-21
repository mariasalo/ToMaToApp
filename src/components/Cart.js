import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem} from './actions/cartActions'
class Cart extends Component{

    
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    
    render(){
          
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <div className="add-remove">
                                            {/* <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link> */}
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Poista</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Sinulla ei ole varattuja tuotteita.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Varaamasi tuotteet:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

