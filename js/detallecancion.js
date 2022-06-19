let queryString = location.search
let queryObject = new  URLSearchParams(queryString);
let id = queryObject.get('id');

console.log(id);

let url=(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)

fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

let cancion = document.querySelector('.centrado'); 
    //creamos ruta hacia nombre track
    cancion.innerText += data.title;

let img = document.querySelector(".imgDetailCancion");
    //creamos ruta hacia foto
    img.src += data.album.cover_medium;

let artista = document.querySelector(".centrado2");
    //creamos ruta hacia nombre artista
    artista.innerHTML +=  `<a class="drake" href="./detail-artist.html?id=${data.artist.id}"> ${data.artist.name} </a>`;

let album = document.querySelector(".centrado3");
    //creamos ruta hacia album
    album.innerHTML +=  `<a class="drake" href="./detail-album.html?id=${data.album.id}"> ${data.album.title} </a>`;

let player = document.querySelector(".iframe1");
    //creamos ruta hacia iframe
    player.innerHTML =`<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
    console.log(player.innerHTML);
    console.log(`src="https://widget.deezer.com/widget/dark/track/${id}"`);

    let playlist = [];
    
    //Recuperar datos del storage cn propiedad playlist
    let recuperoStorage = localStorage.getItem('playlist');

    //Chequear y agregar la información de local storage en el array
    if(recuperoStorage != null){ //distinto de null entonces 
        playlist = JSON.parse(recuperoStorage);// me devolvio algo q lo parseo y meto en playlist
    }

    //Chequear que el id esté en el array para cambiar el texto al usuario.
    if(playlist.includes(id)){ //uso method de arry nuevo
    document.querySelector('.playlistAdd').innerText = "Eliminar de mi playlist";
    }


    //Cuando el usuario haga click en "agregar a playlist" quiero q el id de track se guarde en mi array
    let playlistAdd = document.querySelector('.playlistAdd');
    console.log(playlistAdd);

    playlistAdd.addEventListener("click", function(){ //click comportamiento default

        //Chequear si el id está en el array
        if(playlist.includes(id)){//si si
            let idASacar = playlist.indexOf(id);//pido posicion
            playlist.splice(idASacar, 1);//desde posic saco 1
            document.querySelector('.playlistAdd').innerText = "Agregar a mi playlist";
        } else {// el if da falso osea q no esta guardado
            //Guardamos el id en el array
            playlist.push(id);
            console.log(playlist);
            document.querySelector('.playlistAdd').innerText = "Eliminar de mi playlist";
        }

    //Stringifeamos array de playlist
    let namesagregarParaStorage = JSON.stringify(playlist);
    //Lo guardamos dentro de localStorage
    localStorage.setItem('playlist', namesagregarParaStorage);
    console.log(localStorage);

    })
    
})


.catch(function(error){
  console.log(error);
})

