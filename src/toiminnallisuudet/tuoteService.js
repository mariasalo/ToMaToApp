import axios from 'axios';

//Tässä GET pyyntö:
export default function getKaikki(callback){
axios.get('https://localhost:44376/api/tomaatti/')  
.then(response => {  
  //this.setState({ business: response.data }); 
  // console.log(response, 'onnistui')
  callback(response.data) 
  // debugger;  

})  
.catch(function (error) {  
  console.log(error);  
})  
}

// Tässä GET pyyntö Id:n perusteella
export function getById(id){
        axios.get('https://localhost:44376/api/tomaatti/'+id)  
            .then(response => {  
                this.setState({  
                Id: response.data.tuoteId,   
                Nimi: response.data.Nimi,   
                Kuvaus: response.data.Kuvaus,  
                Lkm: response.data.Lkm,  
                Sijainti: response.data.Sijainti });  
    
            })  
            .catch(function (error) {  
                console.log(error);  
            })  
}

//Tässä POST pyyntö
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
// debugger;
// this.props.history.push('/HaeTuote')  
}  
})  
}

//Tässä PUT pyyntö: // tämä on kesken ! 
// Sitten lähetetään muokatut tiedot PUT pyynnöllä:
export function putMuokkaa(obj, id)
{
  const options = {
    headers: {'Access-Control-Allow-Methods':  '*', 
              'Access-Control-Allow-Origin': '*'}
  };

  //
  console.log(obj);
  axios.put('https://localhost:44376/api/tomaatti/update/'+id, obj) 
          .then(
            response => response.addHeader("Access-Control-Allow-Origin", "*"))
            //  response.addHeader("Access-Control-Allow-Methods", '*')
            // response => response.addHeader("Access-Control-Request-Method", "GET, PUT, POST, DELETE, OPTIONS"));
          // res => console.log(res.data))
          
          .catch(res => console.log(res))
          ;  
}


//Tässä DELETE pyyntö: // tämä on kesken !
export function deletePoista(id){
     axios.delete('http://localhost:44376/Api/tomaatti/Deletepoista?id='+id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Ilmoitus poistettu onnistuneesti!!');  
    }  
    }) 
  }




