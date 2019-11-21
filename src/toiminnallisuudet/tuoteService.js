import axios from 'axios';

//Tässä GET pyyntö:
export default function getKaikki(callback){
axios.get('https://localhost:44376/api/tomaatti/')  
.then(response => {  
  //this.setState({ business: response.data }); 
  // console.log(response, 'onnistui')
  callback(response.data) 
  debugger;  

})  
.catch(function (error) {  
  console.log(error);  
})  
}

//Tässä POST pyyntö:
export function postLisää(myJSON){
  console.log(myJSON)

axios.post('https://localhost:44376/api/tomaatti/', myJSON) 
.then(json => {  
if(json.status===200){  
  console.log(json.status);  
  alert("Lähetetty onnistuneesti");  
// this.props.history.push('/HaeTuote')  
}  
else{  
alert('Lähetys ei onnistunut');  
debugger;
// this.props.history.push('/HaeTuote')  
}  
})  
}

//Tässä PUT pyyntö: // tämä on kesken !
export function putMuokkaa(){
        axios.get('https://localhost:44376/api/tomaatti/?id'+this.props.match.params.id)  
            .then(response => {  
                this.setState({   
                Nimi: response.data.Nimi,   
                Kuvaus: response.data.Kuvaus,  
                Lkm: response.data.Lkm,  
                Sijainti: response.data.Sijainti });  
    
            })  
            .catch(function (error) {  
                console.log(error);  
            })  
}

//Tässä DELETE pyyntö: // tämä on kesken !, mikä parametri?
export function deletePoista(data){
     axios.delete('http://localhost:44376/api/Tomaatti/delete/${id}'+this.props.match.params.id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    }) 
  }




