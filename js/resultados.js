let objeto = new URLSearchParams (location.search);
let search = objeto.get("search");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${search}`)
.then( respuesta =>{
    return respuesta.json()
})
.then( busqueda =>{
    console.log(busqueda)
    
    let resultados = busqueda.data
    let resultadosB = document.querySelector(".articulo1")
let encabezado = document.querySelector(".busqueda")
    encabezado.innerHTML +=

   ` <h2 class="h3"> Usted está buscando :${search}</h2> `

    for( i= 0; i <= resultados.length; i++){

    resultadosB.innerHTML +=
    
    `
        <h4><a href="detallecancion.html?id=${resultados[i].id}">${resultados[i].title}</a></h4>
    `
        }
})