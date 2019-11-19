import React, {Component} from 'react'
import Datalist from './Datalist.js'
import data from './data.json'

export default class DataBox extends Component {

    constructor (props) {
        super(props);
        this.state = { exvalue: 0 }
    }

    example = (data) => {
        this.setState({exvalue : data})
    }

    render () {
        // var data = require('./data.json');

        return (
            <div className='topic-box'>
                <Datalist topics={data}/>
                {/* <Counter example={this.example} exvalue={this.state.exvalue}></Counter>  */}
            </div>
        );
    }
}