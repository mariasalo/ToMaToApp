import React from 'react';  
// import axios from 'axios';  
// import '../LuoTuote.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import { postLisää } from './tuoteService';

class LuoTuote extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Nimi:'',  
Kuvaus:'',  
Lkm: 1,
Sijainti:'',   
}  
}   
luoTuote=()=>{  
  // var obj = { nimi: this.state.Nimi, kuvaus: this.state.Kuvaus, lkm: this.state.Lkm };
  // postLisää(obj)
  postLisää(this.state);
}  

   
handleChange= (e)=> {  
// this.setState({[e.target.name]:e.target.value});  
this.setState({[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value}); 
// }  
// {
  // if(e.target.type === 'number'){
  //   this.setState({[e.target.name]: parseInt(e.target.value)});
  // }
  // if(e.target.type === isNaN){
  //   this.setState({[e.target.name]: null})
  // }
  // else{
  //   this.setState({[e.target.name]:e.target.value});
// }
}
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Lisää tuote</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="nimi" sm={2}>Otsikko</Label>  
          <Col sm={10}>  
            <Input type="text" name="Nimi" onChange={this.handleChange} value={this.state.Nimi} placeholder="Tuotteen nimi" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="kuvaus" sm={2}>Kuvaus</Label>  
          <Col sm={10}>  
            <Input type="text" name="Kuvaus" onChange={this.handleChange} value={this.state.Kuvaus} placeholder="Esim. laatu, parasta ennen -päivämäärä, valmistaja" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="lkm" sm={2}>Lkm</Label>  
          <Col sm={10}>  
            <Input type="number" name="Lkm" onChange={this.handleChange} value={this.state.Lkm} placeholder="Lukumäärä" required />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="sijainti" sm={2}>Sijainti</Label>  
          <Col sm={10}>  
            <Input type="text" name="Sijainti" onChange={this.handleChange} value={this.state.Sijainti} placeholder="Mistä tuotteen voi hakea esim. Keilaniemi" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.LuoTuote} className="btn btn-success">Lisää</button>  
          </Col>  
          {/* <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>   */}
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