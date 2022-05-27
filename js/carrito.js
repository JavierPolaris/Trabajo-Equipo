
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
let t=localStorage.getItem('titulo')
console.log(t)
document.getElementById('cartel').src=sessionStorage.getItem('foto')
document.getElementById('nombreP').innerText=sessionStorage.getItem('titulo');
document.getElementById('numEntradas').innerText=`${sessionStorage.getItem('precioEntradas')} entradas: ${sessionStorage.getItem('precioEntradas')*5}€`;
document.getElementById('horario').innerText=sessionStorage.getItem('hora');


