let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`)
.then (function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

        let title = document.querySelector('.nombreartistast')
        title.innerText = data.name

        let top5Canciones = document.querySelector('.top5')
        top5Canciones.innerText = data.tracklist
        for (let i = 0; i <= 5; i++) {
        }

        let imagenArtista = document.querySelector('.imgDetailArtista"')
        imagenArtista.innerHTML += `<img src="${data.picture_medium}" alt="">`
})

.catch(function (error) {
    console.log(error);
})
