let objeto = new URLSearchParams (location.search);
let search = objeto.get("search");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${search}`)
.then( function(respuesta){
    return respuesta.json()
})
.then( function(busqueda){
    console.log(busqueda.data)
    
    let resultados = busqueda.data
    let resultadosB = document.querySelector(".articulo1")
    let encabezado = document.querySelector("#busqueda")
    
    for(let i = 0; i < resultados.length; i++){


            resultadosB.innerHTML += `
            


            <div class="div1"> 
        <a href="./detalleartistas.html?id=${busqueda.data[i].id}"><img  class="foto" src=${busqueda.data[i].album.cover}></a>
        <a class="ahome" href="./detalleartistas.html"><h4  class="albums2322" >${busqueda.data[i].title}</h4></a> 
        </div>
            `

    }
})

