import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../toiminnallisuudet/LuoTuote';  

import { putMuokkaa } from './tuoteService';
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
        
    this.onChangeName = this.onChangeNimi.bind(this);  
    this.onChangeRollNo = this.onChangeKuvaus.bind(this);  
    this.onChangeClass = this.onChangeLkm.bind(this);  
    this.onChangeAddress = this.onChangeSijainti.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
    
            this.state = {  
            Nimi: '',  
            Kuvaus: '',  
            Lkm: '',  
            Sijainti: ''  
        }  
    }  
    
    componentDidMount() {   // kesken !
        putMuokkaa() //id parametrinä ? miten ?
        
        // axios.get('http://localhost:52564/Api/Tomaatti/StudentdetailById?id='+this.props.match.params.id)  
        //     .then(response => {  
        //         this.setState({   
        //         Nimi: response.data.Nimi,   
        //         Kuvaus: response.data.Kuvaus,  
        //         Lkm: response.data.Lkm,  
        //         Sijainti: response.data.Sijainti });  
    
        //     })  
        //     .catch(function (error) {  
        //         console.log(error);  
        //     })  
    }  
    
    onChangeNimi(e) {  
    this.setState({  
        Nimi: e.target.value  
    });  
    }  
    onChangeKuvaus(e) {  
    this.setState({  
        Kuvaus: e.target.value  
    });    
    }  
    onChangeLkm(e) {  
    this.setState({  
        Lkm: e.target.value  
    });  
}  
    onChangeSijainti(e) {  
        this.setState({  
            Sijainti: e.target.value  
        });  
    }  
    
    onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        tuoteID: this.props.match.params.id,  
        Nimi: this.state.Nimi,  
        Kuvaus: this.state.Kuvaus,  
        Lkm: this.state.Lkm,  
        Sijainti: this.state.Sijainti  
    
    };  
    axios.post('http://localhost:52564/Api/Student/AddotrUpdatestudent/', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/HaeTuote')  
    }  
    render() {  
        return (  
            <Container className="App">  
    
                <h4 className="PageHeading">Update Student Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Nimi" value={this.state.Nimi} onChange={this.onChangeNimi}  
                                placeholder="Tuotteen nimi" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Kuvaus</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Kuvaus" value={this.state.Kuvaus} onChange={this.onChangeKuvaus} placeholder="Kuvaus" />  
                            </Col>  
                        </FormGroup>  
                            <FormGroup row>  
                            <Label for="Password" sm={2}>Class</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Lkm" value={this.state.Lkm} onChange={this.onChangeLkm} placeholder="Lkm" />  
                            </Col>  
                        </FormGroup>  
                            <FormGroup row>  
                            <Label for="Password" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Sijainti"value={this.state.Sijainti} onChange={this.onChangeSijainti} placeholder="Sijainti" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                            <Button type="submit" color="success">Submit</Button>{' '}  
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
    
export default Edit;  
