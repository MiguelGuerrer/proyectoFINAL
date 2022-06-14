let objeto = new URLSearchParams (location.search);
let search = objeto.get("search");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${search}`)
.then( function(respuesta){
    return respuesta.json()
})
.then( function(busqueda){
    console.log()
    
    let resultados = busqueda.data
    let resultadosB = document.querySelector(".articulo1")
    let encabezado = document.querySelector("#busqueda")
    for(let i = 0; i < resultados.length; i++){
        resultadosB.innerHTML += `<h4><a class="busqueda-palabra" href="detallecancion.html?id=${busqueda.data[i].id}">${busqueda.data[i].title}</a></h4>`
    }
})