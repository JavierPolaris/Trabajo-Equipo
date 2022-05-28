
let datosPeliculas = [

    {
        'adult': 'false',
        'backdrop_path': '',
        'genre_ids': '',
        'id': '',
        'original_language': '',
        'original_title': '',
        'overview': '',
        'popularity': '',
        'poster_path': '',
        'release_date': '',
        'title': '',
        'video': '',
        'vote_average': '',
        'vote_count': ''

    },
    {
        'adult': 'false',
        'backdrop_path': '',
        'genre_ids': '',
        'id': '',
        'original_language': '',
        'original_title': '',
        'overview': '',
        'popularity': '',
        'poster_path': '',
        'release_date': '',
        'title': '',
        'video': '',
        'vote_average': '',
        'vote_count': '' 
    }

]

let userNoReg= JSON.parse(localStorage.getItem('usuario2'))

console.log(userNoReg)

document.getElementById('cartel').src = 'https://m.media-amazon.com/images/I/51DigcZ8W8L._AC_.jpg'
document.getElementById('nombreP').innerText = userNoReg.peliculas[0].titulo;
document.getElementById('numEntradas').innerText =` ${userNoReg.peliculas[0].nEntradas} entradas: ${userNoReg.peliculas[0].nEntradas * 5}€`;
document.getElementById('horario').innerText = userNoReg.peliculas[0].horario;
document.getElementById('diaP').innerText = userNoReg.peliculas[0].fecha;
for (let i = 0; i <= (userNoReg.peliculas[0].nEntradas - 1); i++) {
    document.getElementById('butacasPosition').innerText +=  ` ${userNoReg.peliculas[0].butacas[i].asiento}, ` 
};


