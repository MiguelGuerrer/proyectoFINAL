//PLAYLISTTT

    //Recupero el storage. tengo un string
    let recuperoStorage = localStorage.getItem('playlist');
    //Lo transformo en array con parse
    let playlist = JSON.parse(recuperoStorage);
    //destino de los datos en el html

    let section = document.querySelector('.cuerpo')

    if (playlist==null || playlist.length == 0) {

        section.innerHTML = '<p>No hay canciones en la playlist!</p>';
    }
    else{
        //Necesitamos recorrer el array de playlist
    for (let i=0; i<playlist.length; i++){
        
        let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${playlist[i]}`
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
    }
    
