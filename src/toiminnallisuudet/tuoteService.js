import axios from 'axios';

//Tässä GET pyyntö:
export default function getKaikki(callback){
axios.get('https://localhost:44376/api/tomaatti/1')  
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

//Tässä POST pyyntö: // tämä on kesken !
export function postLisää(){
  axios.post('https://localhost:44376/api/tomaatti/1', {Nimi:this.state.Nimi, Kuvaus:this.state.Kuvaus,  
  Lkm:this.state.Lkm, Sijainti:this.state.Sijainti})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/HaeTuote')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/HaeTuote')  
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

//Tässä DELETE pyyntö: // tämä on kesken !
export function deletePoista(){
     axios.delete('http://localhost:44376/Api/tomaatti/Deletepoista?id='+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    }) 
  }




