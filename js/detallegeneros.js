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


let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) { 
   
    let contenido = '';

    let artistas = data.data;

    console.log(artistas);
    
    let etiquetaArtistas = document.querySelector('#artistasGenero');
    
    for (let i = 0; i < 6 ;i++) {
        contenido += `<div class="hola"> 
                                    <a href="detallegeneros.html">  <img src="${artistas[i].picture}" alt="" class="imgcanciones" ></a>
                                    <h2 class="nombress">${artistas[i].name}</h2>
                                </div> `
        
    }

    etiquetaArtistas.innerHTML = contenido;
   

}).catch(function(error) {
    console.log(error);
})