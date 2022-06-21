let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

        let title = document.querySelector('.nombreartistast')
        title.innerHTML = `<h3 class="nombreartistast"> ${data.name} </h3>`

        let imagen = document.querySelector('.imgDetailArtista')
        console.log(imagen);
        imagen.src = data.picture_big /* puse src como si fuese un objeto literal entonces despues */

/*Top 5*/
let rutaTop5= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

fetch(rutaTop5)
.then(function (response) {
  return response.json(); 
})
.then(function (data) {  
    console.log(data);

    let imprimirTop5 = document.querySelector('.top5');
    for (let i = 0; i <=4; i++) {
    imprimirTop5.innerHTML +=`<a href="./detallealbum.html?id=${data.data[i].id}"> <li class="lista1">${data.data[i].title}</li> </a>`
}
})
})

.catch(function (error) {
    console.log(error);
})