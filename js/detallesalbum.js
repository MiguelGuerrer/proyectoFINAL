let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then (function(response){
    return response.json()
}).then(function(data){
    console.log(data);

    let generos = `Este disco no tiene generos asignados`
    for (let i = 0; i < data.genres.data.length; i++) {
        if (i==0) {
            generos = `<a href="./detallegeneros.html?id=${data.genres.data[i].id}">${data.genres.data[i].name}</a>`;
        } else{
            generos += `, <a href="./detallegeneros.html?id=${data.genres.data[i].id}">${data.genres.data[i].name}</a>`;
        }   
    } 
    console.log(generos);

    let canciones = ''
    for (let i = 0; i < data.tracks.data.length; i++) {
        canciones += `<a href="./detallecancion.html?id=${data.tracks.data[i].id}"><li class="lista2">${data.tracks.data[i].title}</li></a>`;
    }

    document.querySelector(".articleDetail div").innerHTML =`<img src="${data.cover_medium}" alt="" class="imgDetailAlbum">
    <h3 class="nombreAlbum">${data.title}</h3>
    <h3 class="artista">${data.artist.name}</h3>
    <h4 class="genero">${generos}</h4>
    <h4 class="public"> ${data.release_date}</h4>
    <br>
    <ul class="lista-cancion123">${canciones}</ul>`
})

.catch(function(error)
{ console.log(error);
})