let queryString = location.search //Caputro del url toda la qs
let queryObject = new URLSearchParams(queryString); //La transformamos en OL por new url..
let id = queryObject.get('id');//obtengo el id y lo pongo en url

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556${queryObject}`;

fetch( url )
.then( function(response){
return response.json();//convertimos la info en formato json
})
.then(function(data){
    console.log(data);
    //devuelve info de 1 track en innerText/HTML
    //usamos innerText e innerHTML para cambiar lo que esta dentro de las etiquetas del html

    let cancion = document.querySelector('.centrado'); 
    //creamos ruta hacia nombre track
    cancion.innerText += data.title;

    let img = document.querySelector(".imgDetailCancion");
    //creamos ruta hacia foto
    img.src += data.album.cover_big;

    let artista = document.querySelector(".centrado2");
    //creamos ruta hacia nombre artista
    artista.innerHTML +=  `<a href="./detail-artist.html?id=${data.artist.id}"> ${data.artist.name} </a>`;

    let album = document.querySelector(".centrado3");
    //creamos ruta hacia album
    album.innerHTML +=  `<a href="./detail-album.html?id=${data.album.id}"> ${data.album.title} </a>`;

    let player = document.querySelector(".iframe1");
    //creamos ruta hacia iframe
    player.innerHTML +=`<iframe src="https://open.spotify.com/embed/track/41wtwzCZkXwpnakmwJ239F${data.link}" width="100%" height="300" frameBorder="0"></iframe>`;

})