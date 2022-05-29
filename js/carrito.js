let userNoReg = JSON.parse(localStorage.getItem('usuario2'))
let usuario0 = JSON.parse(sessionStorage.getItem('usuario0'))
let usuario1 = JSON.parse(sessionStorage.getItem('usuario1'))
let usuario3 = JSON.parse(sessionStorage.getItem('usuario3'))



// let datosPeliculas = [

//     {
//         'adult': 'false',
//         'backdrop_path': '',
//         'genre_ids': '',
//         'id': '',
//         'original_language': '',
//         'original_title': '',
//         'overview': '',
//         'popularity': '',
//         'poster_path': '',
//         'release_date': '',
//         'title': '',
//         'video': '',
//         'vote_average': '',
//         'vote_count': ''

//     },
//     {
//         'adult': 'false',
//         'backdrop_path': '',
//         'genre_ids': '',
//         'id': '',
//         'original_language': '',
//         'original_title': '',
//         'overview': '',
//         'popularity': '',
//         'poster_path': '',
//         'release_date': '',
//         'title': '',
//         'video': '',
//         'vote_average': '',
//         'vote_count': '' 
//     }

// ]

// document.getElementById('cartel').src = 'https://m.media-amazon.com/images/I/51DigcZ8W8L._AC_.jpg'
// document.getElementById('nombreP').innerText = userNoReg.peliculas[0].titulo;
// document.getElementById('numEntradas').innerText =` ${userNoReg.peliculas[0].nEntradas} entradas: ${userNoReg.peliculas[0].nEntradas * 5}€`;
// document.getElementById('horario').innerText = userNoReg.peliculas[0].horario;
// document.getElementById('diaP').innerText = userNoReg.peliculas[0].fecha;
// for (let i = 0; i <= (userNoReg.peliculas[0].nEntradas - 1); i++) {
//     document.getElementById('butacasPosition').innerText +=  ` ${userNoReg.peliculas[0].butacas[i].asiento}, ` 
// };


for (let i = 0; i <= 2; i++) {
    if (usuario0 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario0.peliculas[(i + 2)].cartel
    } else if (usuario1 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario1.peliculas[(i + 2)].cartel
    } else if (usuario3 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario3.peliculas[(i + 2)].cartel
    } else {
        document.getElementById(`cartel${(i + 666)}`).src = userNoReg.peliculas[i].cartel
    }


    if (usuario0 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].titulo;
    } else if (usuario1 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].titulo;
    } else if (usuario3 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario3.peliculas[(i + 2)].titulo;
    } else {
        document.getElementById(`nombreP${(i + 1)}`).innerText = userNoReg.peliculas[i].titulo;
    }


    if (usuario0 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario0.peliculas[(i + 2)].nEntradas} entradas: ${usuario0.peliculas[(i + 2)].nEntradas * 5}€`;
    } else if (usuario1 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario1.peliculas[(i + 2)].nEntradas} entradas: ${usuario1.peliculas[(i + 2)].nEntradas * 5}€`;
    } else if (usuario3 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario3.peliculas[(i + 2)].nEntradas} entradas: ${usuario3.peliculas[(i + 2)].nEntradas * 5}€`;
    } else {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${userNoReg.peliculas[i].nEntradas} entradas: ${userNoReg.peliculas[i].nEntradas * 5}€`;
    }


    if (usuario0 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].horario;
    } else if (usuario1 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].horario;
    } else if (usuario3 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario3.peliculas[(i + 2)].horario;
    } else {
        document.getElementById(`horario${(i + 1)}`).innerText = userNoReg.peliculas[i].horario;
    }


    if (usuario0 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].fecha;
    } else if (usuario1 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].fecha;
    } else if (usuario3 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario3.peliculas[(i + 2)].fecha;
    } else {
        document.getElementById(`diaP${(i + 1)}`).innerText = userNoReg.peliculas[i].fecha;
    }


    if (usuario0 != null) {
        for (let j = 0; j <= (usuario0.peliculas[(i + 2)].nEntradas - 1); j++) {
            j < (usuario0.peliculas[(i + 2)].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario0.peliculas[(i + 2)].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario0.peliculas[(i + 2)].butacas[j].asiento}`
        };
    } else if (usuario1 != null) {
        for (let j = 0; j <= (usuario1.peliculas[(i + 2)].nEntradas - 1); j++) {
            j < (usuario1.peliculas[(i + 2)].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario1.peliculas[(i + 2)].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario1.peliculas[(i + 2)].butacas[j].asiento}`
        };
    } else if (usuario3 != null) {
        for (let j = 0; j <= (usuario3.peliculas[(i + 2)].nEntradas - 1); j++) {
            j < (usuario3.peliculas[(i + 2)].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario3.peliculas[(i + 2)].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario3.peliculas[(i + 2)].butacas[j].asiento}`
        };
    } else {
        for (let j = 0; j <= (userNoReg.peliculas[i].nEntradas - 1); j++) {
            j < (userNoReg.peliculas[i].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${userNoReg.peliculas[i].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${userNoReg.peliculas[i].butacas[j].asiento}`
        };
    }
}


document.getElementById('borrar1').addEventListener("click", () => {
        document.getElementById('entradas').removeChild(document.getElementById('entrada1'))
        delete userNoReg.peliculas[0]
        console.log(userNoReg)
    

})
document.getElementById('borrar2').addEventListener("click", () => {

        document.getElementById('entradas').removeChild(document.getElementById('entrada2'))
        delete userNoReg.peliculas[1]
        console.log(userNoReg)
    
})
document.getElementById('borrar3').addEventListener("click", () => {
  
        document.getElementById('entradas').removeChild(document.getElementById('entrada3'))
        delete userNoReg.peliculas[2]
        console.log(userNoReg)
    
})



if (document.getElementById('nombreP1').innerText == '') {
    document.getElementById('entrada1').style.display = 'none';
}
if (document.getElementById('nombreP2').innerText == '') {
    document.getElementById('entrada2').style.display = 'none';
}
if (document.getElementById('nombreP3').innerText == '') {
    document.getElementById('entrada3').style.display = 'none';
}
