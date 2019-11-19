import React from 'react';  
import axios from 'axios';  
import './LuoTuote.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import { postLisää } from './tuoteService';

class LuoTuote extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Nimi:'',  
Kuvaus:'',  
Lkm:'',
Sijainti:'',   
}  
}   
LuoTuote=()=>{  
  postLisää(this.lisääTuotteet)
//   axios.post('http://localhost:52564/Api/Student/AddotrUpdatestudent/', {Nimi:this.state.Nimi, Kuvaus:this.state.Kuvaus,  
//   Lkm:this.state.Lkm, Sijainti:this.state.Sijainti})  
// .then(json => {  
// if(json.data.Status==='Success'){  
//   console.log(json.data.Status);  
//   alert("Data Save Successfully");  
// this.props.history.push('/HaeTuote')  
// }  
// else{  
// alert('Data not Saved');  
// debugger;  
// this.props.history.push('/HaeTuote')  
// }  
// })  
}  
lisääTuotteet(data){ //me lisättiin tämä, ei varmaan toimi :D
  this.setState({ tuotteet: data });  
}
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Lisää tuote</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Otsikko</Label>  
          <Col sm={10}>  
            <Input type="text" name="Nimi" onChange={this.handleChange} value={this.state.Nimi} placeholder="Tuotteen nimi" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="address" sm={2}>Kuvaus</Label>  
          <Col sm={10}>  
            <Input type="text" name="Kuvaus" onChange={this.handleChange} value={this.state.Kuvaus} placeholder="Kuvaus" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Lkm</Label>  
          <Col sm={10}>  
            <Input type="text" name="Lkm" onChange={this.handleChange} value={this.state.Lkm} placeholder="Lukumäärä" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Sijainti</Label>  
          <Col sm={10}>  
            <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="Sijainti" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.LuoTuote} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default LuoTuote;  