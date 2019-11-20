import React, {Component} from 'react'


export default class Tuote extends Component {
    render () {
        return (
            <div className="card">
            <div className="card-image">
                    <img src={this.props.data.img} alt={this.props.data.title}/>
                    <span className="card-title"></span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
             </div>

                <div className="card-content">
                    <p><b>{this.props.data.nimi}</b></p>
                    <p>{this.props.data.kuvaus}</p>
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

{/* let itemList = this.props.items.map(item=>{
    return(
        <Tuote key={item.id} data={item}>


                
         </Tuote>
    ); */}