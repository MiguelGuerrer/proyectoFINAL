let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`)
.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
        let nombreArtista = document.querySelector('#nombre-artista12')
        nombreArtista.innerText = `${data.name}`

        let top5Canciones = document.querySelector('#listaTop5-canciones')
        top5Canciones.innerText = `${data.tracklist}`
        for (let i = 0; i <= 5; i++) {
        }

        let imagenArtista = document.querySelector('')
        imagenArtista.innerText = `${data.picture_big}`
})

.catch(function (error) {
    console.log(error);
})