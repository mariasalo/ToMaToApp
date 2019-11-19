import React, {Component} from 'react'
import Data from './Data.js';

export default class Datalist extends Component {

    render () {
        var list = this.props.topics.map((data, key) => {
                return (
                    <Data data={data} id={data.id} key={key}/>
                  );
                });
        
        return (
            <table id='data-list'>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>ID</th>
                        <th>Rotu</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}