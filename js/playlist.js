//PLAYLISTTT

    //Recupero el storage. tengo un string
    let recuperoStorage = localStorage.getItem('playlist');
    //Lo transformo en array con parse
    let playlist = JSON.parse(recuperoStorage);
    //destino de los datos en el html
    let playlist1 = document.querySelector('.ulplaylist');


    //Necesitamos recorrer el array de playlist
    for (let i=0; i<playlist.length; i++){
        //buscarYMostrarPlaylist
    buscarYMostrarPlaylist(playlist[i]);
    }


    function buscarYMostrarPlaylist(id){
        let url =`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`
        
        //buscamos info de la api
        fetch(url)
        .then( function(response){
            return response.json();//convertimos la info en formato json
        })
        .then(function(data){
            //procesar
            // let info = data.data;
            console.log(data)
            // let resultados = '';
            playlist1.innerHTML += ` <div class="divplaylist">
            <i class="fa-solid fa-heart"></i> 
            <li class="divplaylist2" type="none" >${data.title}</li>
        </div>` 
        
        })
        .catch( function(e){
            console.log(e);
        })
    }
    
