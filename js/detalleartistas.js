let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`)
.then (function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

        let title = document.querySelector('.nombreartistast')
        imprimir.innerHTML += `<h3 class="nombreartistast"> ${data.name} </h3>

        <img src="${data.picture_big}" alt="" class="imgDetailArtista">`
        /*title.innerText = data.name*/

        let imagenArtista = document.querySelector('.imgDetailArtista"')
        /*imagenArtista.innerHTML += `<img src="${data.picture_medium}" alt="">`*/
})
.catch(function (error) {
    console.log(error);
})

/*Top 5*/
let rutaTop5= `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`

fetch(rutaTop5)
.then(function (response) {
  return response.json(); 
})
.then(function (data) {  
    console.log(data);
    let imprimirTop5 = document.querySelector('.top5');
    for (let i = 0; i <=5; i++) {
    let canciones = data.data[i].title;
    console.log(canciones)

    imprimirTop5.innerHTML +=`<li>${canciones}</li>`
}
})

.catch(function (error) {
    console.log(error);
})