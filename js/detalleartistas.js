let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/?url=https://api.deezer.com/artist/${id}`)
.then (function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

        let title = document.querySelector('.nombreartistast')
        title.innerText = data.name

        let imagenArtista = document.querySelector('.imgDetailArtista"')
        imagenArtista.innerHTML += `<img src="${data.picture_medium}" alt="">`
})

.catch(function (error) {
    console.log(error);
})


/*top cinco 
let rutaFive= `https://cors-anywhere.herokuapp.com/?url=https://api.deezer.com/artist/${id}/top?limit=5`

fetch(rutaFive)
.then(function (response) {
  return response.json(); 
})
.then(function (data) {  
    console.log(data);
    let imprimirTop = document.querySelector('.top5');*/
  /*for (let i = 0; i < data.data.length; i++) {
    let canciones = data.data[i].title;
    console.log(canciones)

    imprimirTop.innerHTML+=` 
    
    <li>${canciones}</li>
    `
    

    }
 
    
  
})

.catch(function (error) {
    console.log('el error fue '+ error)
})*/