let qs = location.search;
let qsOL = new URLSearchParams(qs);
let id = qsOL.get('idGenero');

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`

fetch(endpoint)
.then(function(response) {
    return response.json();
})
.then(function(data) { 
    console.log(data);
    
    let etiquetaGenero = document.querySelector('#tituloGenero');
    etiquetaGenero.innerText = `Genero : ${data.name}`
   

}).catch(function(error) {
    console.log(error);
})