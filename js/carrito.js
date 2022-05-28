
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

document.getElementById('cartel').src=localStorage.getItem('foto')
document.getElementById('nombreP').innerText=localStorage.getItem('titulo');
document.getElementById('numEntradas').innerText=`${localStorage.getItem('precioEntradas')} entradas: ${localStorage.getItem('precioEntradas')*5}€`;
document.getElementById('horario').innerText=localStorage.getItem('hora');
document.getElementById('diaP').innerText=localStorage.getItem('fecha');
document.getElementById('butacasPosition').innerText=localStorage.getItem('')


