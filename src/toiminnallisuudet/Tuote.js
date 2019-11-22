import { Link, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import React, {Component} from 'react'
// import MuokkaaTuote from '../toiminnallisuudet/MuokkaaTuote';
import Itemc from '../images/itemc.jpg'

export default class Tuote extends Component {
    render () {
        return (
            <div className="card">
            <div className="card-image">
                    <img src={Itemc} alt={this.props.data.title}/>
                    <span className="card-title"></span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                    
             </div>

                <div className="card-content">
                    <p><b>{this.props.data.nimi}</b></p>
                    <p>{this.props.data.kuvaus}</p>
                    <p className ="btn-flat waves-effect waves-teal btn-small"><Link to={{pathname:`/update/${this.props.data.tuoteId}`, data: this.props.data }}><i className="material-icons">info</i></Link></p>
                </div>
                </div>
             

             /* <tr className='tuote'>
                <td>{this.props.data.tuoteId}</td>
                <td>{this.props.data.nimi}</td>
                <td>{this.props.data.kuvaus}</td>
                <td>{this.props.data.lkm}</td>
                <td>{this.props.object.Sijainti}</td> 
            </tr>   */
        );
    }
}