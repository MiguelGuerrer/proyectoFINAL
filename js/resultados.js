let objeto = new URLSearchParams (location.search);
//agarras el valor del search que es lo que busco el usuario
let search = objeto.get("search");


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${search}`)
.then( function(respuesta){
    return respuesta.json()
})
.then( function(busqueda){
    console.log(busqueda.data)
    
    //almacena en esa variable un bloque de infomracion que yo quiero mostrar
    let resultados = busqueda.data
   
    // articulo 1 el article y h2 el id busqueda
    let resultadosB = document.querySelector(".articulo1")
    let encabezado = document.querySelector("#busqueda")
    
    encabezado.innerText += `${search}`
    for(let i = 0; i < 12; i++){


            resultadosB.innerHTML += `
            


            <div class="div1"> 
        <a href="detallecancion.html" class="sinDelineado"?id=${busqueda.data[i].id}"><img  class="foto" src=${busqueda.data[i].album.cover}></a>
        <a class="ahome" href="detallecancion.html" class="sinDelineado""><h4  class="albums2322" >${busqueda.data[i].title}</h4></a> 
        </div>
            `

    }
}).catch(function (error) {
    console.error(error)
    alert(`No encontramos resultados para:${search}`)
})

