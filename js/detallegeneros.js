let qs = location.search;
let qsOL = new URLSearchParams(qs);
let id = qsOL.get('idGenero');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
let endpointArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`
fetch(endpoint)
.then(function(response) {
    return response.json();
})
.then(function(data) { 
    console.log(data);
    let etiquetaGenero = document.querySelector('.section5');

   
    etiquetaGenero.innerHTML += `Genero : ${data.name}  `
   

}).catch(function(error) {
    console.log(error);
})

fetch(endpointArtist)
.then(function(response) {
    return response.json();
})
.then(function(data) { 
    console.log(data);
    let topArtistas = data.data
    let etiquetaGenero = document.querySelector('#tituloGenero');
    for (let i = 0; i < 5; i++) {
        etiquetaGenero.innerHTML += `<div class="div1"> 
        <a href="./detalleartistas.html?id=${topArtistas[i].id}"><img  class="foto" src=${topArtistas[i].picture_big}></a>
        <a class="ahome" href="./detalleartistas.html"><h4  class="albums2322" >${topArtistas[i].name}</h4></a> 
        </div>`
    }
   
   

}).catch(function(error) {
    console.log(error);
})