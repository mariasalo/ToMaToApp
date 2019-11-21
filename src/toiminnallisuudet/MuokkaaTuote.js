import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../toiminnallisuudet/LuoTuote';  
import { putMuokkaa, getById } from './tuoteService';

class MuokkaaTuote extends React.Component {  
    constructor(props) {  
        super(props)  
        
    this.onChangeNimi = this.onChangeNimi.bind(this);  
    this.onChangeKuvaus = this.onChangeKuvaus.bind(this);  
    this.onChangeLkm = this.onChangeLkm.bind(this);  
    this.onChangeSijainti = this.onChangeSijainti.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
    
            this.state = {  
            Nimi: '',  
            Kuvaus: '',  
            Lkm: 1,  
            Sijainti: ''  
        }  
    }  
    
    // componentDidMount() {   
       
    //     }
    //     // putMuokkaa(this.state) //id parametrinä ? miten ?
        
    //     // axios.get('https://localhost:44376/api/tomaatti/'+this.props.match.params.id)
    //     // axios.get('https://localhost:44376/api/tomaatti/20')   
    //     //     .then(response => {  
    //     //         this.setState({   
    //     //         Nimi: response.data.Nimi,   
    //     //         Kuvaus: response.data.Kuvaus,  
    //     //         Lkm: response.data.Lkm,  
    //     //         Sijainti: response.data.Sijainti });  
    //     //     console.log(response);
    //     //     })  
    //     //     .catch(function (error) {  
    //     //         console.log(error);  
    //     //     })  
    // }  
    
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
        Lkm: parseInt(e.target.value) 
    });  
}  
    onChangeSijainti(e) {  
        this.setState({  
            Sijainti: e.target.value
        });  
    }  
    
    onSubmit(e) {  
    // debugger;  
    e.preventDefault();  
    const obj = {  
        // tuoteID: this.props.match.params.id,  
        Nimi: this.state.Nimi,  
        Kuvaus: this.state.Kuvaus,  
        Lkm: this.state.Lkm,  
        Sijainti: this.state.Sijainti  
    
    };  
    putMuokkaa(obj, this.props.id);

    // axios.put('https://localhost:44376/api/tomaatti/update/'+this.props.match.params.id, obj) 
    // // axios.put('https://localhost:44376/api/tomaatti/20', obj)  
    //     .then(res => console.log(res.data));  
    //     debugger;  
    //     // this.props.history.push('/HaeTuote')  
    }  
    
    render() {  
        return (  
            <Container className="App">  
    
                <h4 className="PageHeading">Muokkaa ilmoituksen tietoja</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Nimi</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Nimi" value={this.state.Nimi} onChange={this.onChangeNimi}  
                                placeholder={this.props.nimi} />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="kuvaus" sm={2}>Kuvaus</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Kuvaus" value={this.state.Kuvaus} onChange={this.onChangeKuvaus} placeholder="Esim. laatu, parasta ennen -päivämäärä, valmistaja" />  
                            </Col>  
                        </FormGroup>  
                            <FormGroup row>  
                            <Label for="lkm" sm={2}>Lkm</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="Lkm" value={this.state.Lkm} onChange={this.onChangeLkm} placeholder="Lkm" />  
                            </Col>  
                        </FormGroup>  
                            <FormGroup row>  
                            <Label for="sijainti" sm={2}>Sijainti</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Sijainti"value={this.state.Sijainti} onChange={this.onChangeSijainti} placeholder="Mistä tuotteen voi hakea esim. Keilaniemi" />
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
    
export default MuokkaaTuote;  
