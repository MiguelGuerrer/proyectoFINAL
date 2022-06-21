let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`) //proporcionamos la ruta de donde queremos obtener los datos
.then (function(response){ //le pasamos el parametro de response
    return response.json() //transformamos la rta a un formato que podamos manipular
}).then(function(data){ //le pasamos el parametro data
    console.log(data); // log para ver por consola como me retorna la data

    let generos = `Este disco no tiene generos asignados` // Buscamos lo generos de la api
    for (let i = 0; i < data.genres.data.length; i++) {  // Recorremos el array de resultados
        if (i==0) { //Si existe un genero, va a reemplazar a el texto anterior
            generos = `<a href="./detallegeneros.html?id=${data.genres.data[i].id}">${data.genres.data[i].name}</a>`; 
        } else{ // Si existe mas de un genero, se lo agrega a la variable genros y se imprime
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

.catch(function(error) { //catch para atrapar los errores en cualquier instancia de fetch (si al momento de crear el data hay un error este me lo va a entregar)
    console.log(error); //log para que aparezca el error por consola
})