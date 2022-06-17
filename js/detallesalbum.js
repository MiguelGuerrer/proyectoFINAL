let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/?url=https://api.deezer.com/album/${id}`)
.then (function(response){
    return response.json()
}).then(function(data){
    
})
