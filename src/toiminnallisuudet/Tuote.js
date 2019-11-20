import React, {Component} from 'react'


export default class Tuote extends Component {
    render () {
        return (
            <tr className='tuote'>
                <td>{this.props.data.tuoteId}</td>
                <td>{this.props.data.nimi}</td>
                <td>{this.props.data.kuvaus}</td>
                <td>{this.props.data.lkm}</td>
                {/* <td>{this.props.object.Sijainti}</td> */}
            </tr>
        );
    }
}