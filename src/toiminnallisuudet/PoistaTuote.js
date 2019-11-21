import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
import { deletePoista } from './tuoteService';

class PoistaTuote extends Component {  
  constructor(props) {  
    super(props);  
   
    }  

    // export default class HaeTuote extends React.Component {
    //   state = {
    //     id: '',
    //   }
      
    // handleChange = event => {
    //   this.setState({ id: event.target.value });
    // }
  
    // handleSubmit = event => {
    //   event.preventDefault();

    poistaTuote= () =>{  // tämä on kesken !
      deletePoista(this.props.id)
    //  axios.delete('http://localhost:52564/Api/Student/Deletestudent?id='+this.props.obj.Id)  
    // .then(json => {  
    // if(json.data.Status==='Delete'){  
    // alert('Record deleted successfully!!');  
    // }  
    // })  
    }  


  render() {  
    return (  
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          {/* <button type="submit">Poista</button> */}
        </form>
      </div>
        // <tr>  
        //    <td>  
        //     <button type="submit" className="btn btn-danger">Delete</button>  
        //   </td>  
        // </tr>   
    );  
  }  
}  
  
export default PoistaTuote;