import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
import { deletePoista } from './tuoteService';

class PoistaTuote extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    PoistaTuote= () =>{  // tämä on kesken !
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
        <tr>  
          {/* <td>  
            {this.props.obj.Nimi}  
          </td>  
          <td>  
            {this.data.nimi}  
          </td>  
          <td>  
            {this.data.kuvaus}  
          </td>  
          <td>  
            {this.props.obj.Sijainti}  
          </td>   */}
          <td>  
          <Link to={"/Add"}></Link>  
          </td>  
          {/* <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>   */}
        </tr>  
    );  
  }  
}  
  
export default PoistaTuote;



{/* <tr>  
<td>  
  {this.data.tuoteId}  
</td>  
<td>  
  {this.data.nimi}  
</td>  
<td>  
  {this.data.kuvaus}  
</td>  
<td>  
  {this.data.lkm}  
</td>  
<td>  
<Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
</td>  
<td>  
  <button type="button" onClick={this.deletePoista} className="btn btn-danger">Delete</button>  
</td>  
</tr>   */}