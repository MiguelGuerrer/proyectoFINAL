fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(response){
    return response.json();
})
.then(function (data) {

    console.log(data);

        let topCanciones = data.tracks.data
        let topAlbums = data.albums.data
        let topArtistas = data.artists.data
        

        let cancion = document.querySelector(".topcanciones")
        let album = document.querySelector(".topalmbumes")
        let artista = document.querySelector(".topartistas")


    for (let i = 0; i < 5; i++) {
        cancion.innerHTML += `<div class="div1"> 
        <a href="detallecancion.html?id=${topCanciones[i].id}" class="sinDelineado"><img  class="foto" src=${topCanciones[i].album.cover_big}></a>
        <a class="ahome" href="detallecancion.html" class="sinDelineado"><h4  class="canciones2322" >${topCanciones[i].title_short}</h4></a> 
        </div>`
    } 
       
    for (let i = 0; i < 5; i++) {
        album.innerHTML += `<div class="div1"> 
        <a href="./detallealbum.html?id=${topAlbums[i].id}"><img  class="foto" src=${topAlbums[i].cover_big}></a>
        <a class="ahome" href="./detallealbum.html"><h4  class="albums2322" >${topAlbums[i].title}</h4></a> 
        </div>`
    }
 
    for (let i = 0; i < 5; i++) {
        artista.innerHTML += `<div class="div1"> 
        <a href="./detalleartistas.html?id=${topArtistas[i].id}"><img  class="foto" src=${topArtistas[i].picture_big}></a>
        <a class="ahome" href="./detalleartistas.html"><h4  class="albums2322" >${topArtistas[i].name}</h4></a> 
        </div>`
    }
})

    
