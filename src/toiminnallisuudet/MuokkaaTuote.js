import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import '../toiminnallisuudet/LuoTuote';  
import { putMuokkaa, deletePoista, getById } from './tuoteService';
// import PoistaTuote from '../toiminnallisuudet/PoistaTuote';

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
    
    componentDidMount() {   
        getById(this.props.match.params.id).then((response)=>{
            this.setState({  
                Id: response.data.tuoteId,   
                Nimi: response.data.nimi,   
                Kuvaus: response.data.kuvaus,  
                Lkm: response.data.lkm,  
                Sijainti: response.data.sijainti });
        })
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
        Lkm: parseInt(e.target.value) 
    });  
}  
    onChangeSijainti(e) {  
        this.setState({  
            Sijainti: e.target.value
        });  
    }  

    // Tässä tuotteen poisto id:n mukaan (response ei toimi)
    poistaTuote = () => {
        console.log("koitetaan poistaa", this.props.match.params.id)
        deletePoista(this.props.match.params.id).then(()=>{
        this.props.history.push("/add")
        })
    }

    onSubmit(e) {  
    // debugger;  
    e.preventDefault();  
    const obj = {  
        Nimi: this.state.Nimi,  
        Kuvaus: this.state.Kuvaus,  
        Lkm: this.state.Lkm,  
        Sijainti: this.state.Sijainti  
    };  

    // Kutsutaan muokkaa funktiota tuoteServicestä
    putMuokkaa(obj, this.props.match.params.id);
  
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
                            <Button type="submit" color="success">Tallenna</Button>{' '}
                            </Col>  
                            <Col sm={1}>  
                                {/* <Button type="delete" color="danger">Poista</Button>{' '}   */}
                                <Button type="button" onClick={this.poistaTuote} className="btn btn-danger">Poista ilmoitus</Button>
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
