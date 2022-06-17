
let endpoint = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'


fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) { 
        console.log(data);
        for (let i = 1; i < 7; i++) {
            document.querySelector(`.article1`).innerHTML += `
            <div> 
            <a href="./detallegeneros.html?idGenero=${data.data[i].id}">  <img src="${data.data[i].picture}" alt="" class="imgcanciones" ></a>
            <h2 class="nombress">${data.data[i].name}</h2>

        </div> 
    ` 
            
        }
      

    }).catch(function(error) {
        console.log(error);
    })

