import React, {Component} from 'react'

export default class Data extends Component {
    render () {
        return (
            <tr className='data'>
                <td>{this.props.data.nimi}</td>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.rotu}</td>
            </tr>
        );
    }
}