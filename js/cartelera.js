//-----------------Creando Carátula desde la API THEMOVIEDB.ORG

const APIKEY = 'a0b853f3c16b413dd04bcbf5d558eedf'; //KEY PROPORCIONADA POR LA API
const URLBASE = 'https://api.themoviedb.org/3/'; //URL BASE A LA QUE SE LE AÑADE LA RUTA DE LAS CLASES
const URLIMG = 'https://image.tmdb.org/t/p/w500/'; //URL PARA COGER IMÁGENES
function getMovies (){ //COGER EL JSON DE LA API
    const URL = `${URLBASE}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
    //CARGAR IMÁGENES DE LA API A LOS ID DEL HTML
    //Meto cada cartel de la API en una variable general para poder usarla en todo el js
img1 = `${URLIMG}iwnQ1JH1wdWrGYkgWySptJ5284A.jpg`; 
img2 = `${URLIMG}77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg`;
img3 = `${URLIMG}pfte7wdMobMF4CVHuOxyu6oqeeA.jpg`;
img4 = `${URLIMG}bQTHTZezSudf27mMQtedHf1XpgO.jpg`;
img5 = `${URLIMG}6uSPcdGNA2A6vJmCagXkvnutegs.jpg`;
img6 = `${URLIMG}6UrNb7sdolnuqxBJ4I8OxTUvTmQ.jpg`;
img7 = `${URLIMG}b9Q2WR62yB5Aq0hd6kyRFS9cc3Y.jpg`;
img8 = `${URLIMG}u3G2gF7M9dmH4Vcs54PUjieOi0C.jpg`;
img9 = `${URLIMG}aqNzRiaEsfv567Ji9njJofblRBE.jpg`;
img10 = `${URLIMG}96htqghZlKctNJqDLo2DuC9PEap.jpg`;

//Se cargan las imágenes en cada id de cartel
document.getElementById('cartel0').src = img1;
document.getElementById('cartel1').src = img2;
document.getElementById('cartel2').src = img3;
document.getElementById('cartel3').src = img4;
document.getElementById('cartel4').src = img5;
document.getElementById('cartel5').src = img6;
document.getElementById('cartel6').src = img7;
document.getElementById('cartel7').src = img8;
document.getElementById('cartel8').src = img9;
document.getElementById('cartel9').src = img10;

//Se recogen las sinopsis de cada título desde la API
let overviews = [json.results[0].overview, json.results[6].overview, json.results[1].overview, 
json.results[8].overview, json.results[12].overview, json.results[15].overview, json.results[13].overview,
json.results[19].overview, json.results[18].overview, json.results[16].overview];


//SE RECORRE ARRAY
for(let i=0; i<overviews.length; i++){
    
    sinopsis = overviews[i]
    // console.log(sinopsis);
    document.getElementById(`sinop${i}`).textContent = sinopsis;
}

//Se recogen los títulos de la API para el Popup
 let titulo = [json.results[0].title, json.results[6].title, json.results[1].title, 
 json.results[8].title, json.results[12].title, json.results[15].title, json.results[13].title,
 json.results[19].title, json.results[18].title, json.results[16].title];
 console.log(titulo)
 //Se recogen las notas de la API para el Popup
let notaP = [json.results[0].vote_average, json.results[6].vote_average, json.results[1].vote_average, 
json.results[8].vote_average, json.results[12].vote_average, json.results[15].vote_average, json.results[13].vote_average,
json.results[19].vote_average, json.results[18].vote_average, json.results[16].vote_average];


//EVENTO PARA INTERACTUAR CON CARTELES
//Cada cartel cogido con la iteración
for(let j=0; j<=9; j++){
    var poster = document.getElementById(`cartel${j}`);
    
    poster.addEventListener('click', ()=>{
        mostrar(contenedorMax)
      //Se carga cada elemento pertinente en los elementos del Popup de compra
        if(j == 0){
           
            document.getElementById('cartelComp').src = img1;
            document.getElementById('tituloP').innerHTML = titulo[0];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[0]}`;
            
        }
        if(j == 1){
         
            document.getElementById('cartelComp').src = img2;
            document.getElementById('tituloP').innerHTML = titulo[1];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[1]}`;
           
        }
        if(j == 2){
            
            document.getElementById('cartelComp').src = img3;
            document.getElementById('tituloP').innerHTML = titulo[2];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[2]}`;
        }
        if(j == 3){
           
            document.getElementById('cartelComp').src = img4;
            document.getElementById('tituloP').innerHTML = titulo[3];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[3]}`;
        }
        if(j == 4){
          
            document.getElementById('cartelComp').src = img5;
            document.getElementById('tituloP').innerHTML = titulo[4];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[4]}`;
        }
        if(j == 5){
         
            document.getElementById('cartelComp').src = img6;
            document.getElementById('tituloP').innerHTML = titulo[5];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[5]}`;
        }
        if(j == 6){
           
            document.getElementById('cartelComp').src = img7;
            document.getElementById('tituloP').innerHTML = titulo[6];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[6]}`;
        }
        if(j == 7){
           
            document.getElementById('cartelComp').src = img8;
            document.getElementById('tituloP').innerHTML = titulo[7];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[7]}`;
        }
        if(j == 8){
         
            document.getElementById('cartelComp').src = img9;
            document.getElementById('tituloP').innerHTML = titulo[8];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[8]}`;
        }
        if(j == 9){
          
            document.getElementById('cartelComp').src = img10;
            document.getElementById('tituloP').innerHTML = titulo[9];
            document.getElementById('ratingP').innerText = `IMDB: ${notaP[9]}`;
        }

    });

  }

})

}

    

this.getMovies()

function mostrar(id) {
    let test = document.getElementById('contenedorMax');
    if (test.style.display == 'block') {
        test.style.display = 'none';
    } else {
        test.style.display = 'block'
    }
}
function btnGr(id) {
    let test = document.getElementById('contenedorMax');
    if (test.style.display == 'inline') {
        test.style.display = 'block';
    } else {
        test.style.display = 'none'
    }
}


//-------------- Empiezan los elementos de la compra 

let usuario0 = JSON.parse(sessionStorage.getItem('clientes: 0'))
let usuario1 = JSON.parse(sessionStorage.getItem('clientes: 1'))
let usuario3 = JSON.parse(localStorage.getItem('clientes: 3'))



let userNoReg = {
  "nombre": "",
  "edad": '',
  "userName": "",
  "password": "",
  "emails": "",
  "foto": "",
    "peliculas": [
      {
        "cartel": "",
        "titulo": "",
        "fecha": "",
        "horario": "",
        "nEntradas": "",
        "butacas": [{}, {}, {}, {}, {}, {}, {}, {}],
      },
      {
        "cartel": "",
        "titulo": "",
        "fecha": "",
        "horario": "",
        "nEntradas": "",
        "butacas": [{}, {}, {}, {}, {}, {}, {}, {}],
      },
      {
        "cartel": "",
        "titulo": "",
        "fecha": "",
        "horario": "",
        "nEntradas": "",
        "butacas": [{}, {}, {}, {}, {}, {}, {}, {}],
      }
    ]

  };

  let k = 0;
  
  document.getElementById("botonH1").addEventListener("click", () => {
    horas1 = document.getElementById("botonH1").innerHTML;
    if (usuario0 != null) {
      usuario0.peliculas[(k + 2)].horario = horas1;
    } else if (usuario1 != null) {
      usuario1.peliculas[(k + 2)].horario = horas1;
    } else if (usuario3 != null) {
      usuario3.peliculas[k].horario = horas1;
    } else {
      userNoReg.peliculas[k].horario = horas1;
    }
  
 
 
 });
 document.getElementById("botonH2").addEventListener("click", () => {
  horas2 = document.getElementById("botonH2").innerHTML;
  if (usuario0 != null) {
    usuario0.peliculas[(k + 2)].horario = horas2;
  } else if (usuario1 != null) {
    usuario1.peliculas[(k + 2)].horario = horas2;
  } else if (usuario3 != null) {
    usuario3.peliculas[k].horario = horas2;
  } else {
    userNoReg.peliculas[k].horario = horas1;
  }

});
document.getElementById("botonH3").addEventListener("click", () => {
  horas3 = document.getElementById("botonH3").innerHTML;
  if (usuario0 != null) {
    usuario0.peliculas[(k + 2)].horario = horas3;
  } else if (usuario1 != null) {
    usuario1.peliculas[(k + 2)].horario = horas3;
  } else if (usuario3 != null) {
    usuario3.peliculas[k].horario = horas3;
  } else {
    userNoReg.peliculas[k].horario = horas1;
  }

});
  
document.getElementById("botonCarrito").addEventListener("click", () => {
  btnGr(contenedorMax)
  sessionStorage.clear();
  let fechas = document.getElementById("calendarioCarrito").value;

  let nuevaF = fechas.split("-");

  let aux = nuevaF[0];
  nuevaF[0] = nuevaF[2];
  nuevaF[2] = aux;

  fechaOrdenada = nuevaF.join("-");
  if (usuario0 != null) {
    usuario0.peliculas[(k + 2)].fecha = fechaOrdenada;
  } else if (usuario1 != null) {
    usuario1.peliculas[(k + 2)].fecha = fechaOrdenada;
  } else if (usuario3 != null) {
    usuario3.peliculas[k].fecha = fechaOrdenada;
  } else {
    userNoReg.peliculas[k].fecha = fechaOrdenada;
  }

  if (usuario0 != null) {
    usuario0.peliculas[(k + 2)].titulo = document.getElementById('tituloP').innerText;
  } else if (usuario1 != null) {
    usuario1.peliculas[(k + 2)].titulo = document.getElementById('tituloP').innerText;
  } else if (usuario3 != null) {
    usuario3.peliculas[k].titulo = document.getElementById('tituloP').innerText;
  } else {
    userNoReg.peliculas[k].titulo = document.getElementById('tituloP').innerText;
  }

  if (usuario0 != null) {
    usuario0.peliculas[(k + 2)].cartel = document.getElementById('cartelComp').src;
  } else if (usuario1 != null) {
    usuario1.peliculas[(k + 2)].cartel = document.getElementById('cartelComp').src;
  } else if (usuario3 != null) {
    usuario3.peliculas[k].cartel = document.getElementById('cartelComp').src;
  } else {
    userNoReg.peliculas[k].cartel = document.getElementById('cartelComp').src;
  }

  if (usuario0 != null) {
    sessionStorage.setItem('clientes: 0', JSON.stringify(usuario0))
  } else if (usuario1 != null) {
    sessionStorage.setItem('clientes: 1', JSON.stringify(usuario1))
  } else if (usuario3 != null) {
    localStorage.setItem('clientes: 3', JSON.stringify(usuario3))
  } else {
    localStorage.setItem('clientes: 2', JSON.stringify(userNoReg))
  }
  k++

  console.log(userNoReg);
});

  
let contB = 0;
for (let i = 1; i <= 32; i++) {

  var butaca = document.getElementById(`asiento${i}`)
  butaca.addEventListener("click", function () {
    if (this.checked) {
      if (usuario0 != null) {
        usuario0.peliculas[(k + 2)].butacas[contB].asiento = i;
      } else if (usuario1 != null) {
        usuario1.peliculas[(k + 2)].butacas[contB].asiento = i;
      } else if (usuario3 != null) {
        usuario3.peliculas[(k + 2)].butacas[contB].asiento = i;
      } else {
        userNoReg.peliculas[k].butacas[contB].asiento = i;
      }

      if (usuario0 != null) {
        usuario0.peliculas[(k + 2)].nEntradas = contB + 1;
      } else if (usuario1 != null) {
        usuario1.peliculas[(k + 2)].nEntradas = contB + 1;
      } else if (usuario3 != null) {
        usuario3.peliculas[(k + 2)].nEntradas = contB + 1;
      } else {
        userNoReg.peliculas[k].nEntradas = contB + 1;
      }

      document.getElementById("precioTotal").innerHTML =` ${5 * (contB + 1)}€`;
      contB++
    } else if (!this.checked) {
      if (usuario0 != null) {
        delete usuario0.peliculas[(k+2)].butacas[contB - 1].asiento;
      } else if (usuario1 != null) {
        delete usuario1.peliculas[(k+2)].butacas[contB - 1].asiento;
      } else if (usuario3 != null) {
        delete usuario3.peliculas[(k+2)].butacas[contB - 1].asiento;
      } else {
        delete userNoReg.peliculas[k].butacas[contB - 1].asiento;
      }

      if (usuario0 != null) {
        usuario0.peliculas[(k+2)].nEntradas--;
      } else if (usuario1 != null) {
        uusuario1.peliculas[(k+2)].nEntradas--;
      } else if (usuario3 != null) {
        usuario3.peliculas[(k+2)].nEntradas--;
      } else {
        userNoReg.peliculas[k].nEntradas--;
      }
      userNoReg.peliculas[k].nEntradas--;
      document.getElementById("precioTotal").innerHTML =` ${5 * (contB - 1)}€`;
      contB--
    }
  })
}
  
  document.getElementById("botonH1").addEventListener("click", () => {
    if (botonH2.classList.contains("active")) {
      botonH2.classList.remove("active");
    }
    if (botonH3.classList.contains("active")) {
      botonH3.classList.remove("active");
    }
  
    if (!botonH1.classList.contains("active")) {
      botonH1.classList.toggle("active");
    }
  });
  document.getElementById("botonH2").addEventListener("click", () => {
    if (botonH1.classList.contains("active")) {
      botonH1.classList.remove("active");
    }
    if (botonH3.classList.contains("active")) {
      botonH3.classList.remove("active");
    }
    if (!botonH2.classList.contains("active")) {
      botonH2.classList.toggle("active");
    }
  });
  document.getElementById("botonH3").addEventListener("click", () => {
    if (botonH1.classList.contains("active")) {
      botonH1.classList.remove("active");
    }
    if (botonH2.classList.contains("active")) {
      botonH2.classList.remove("active");
    }
  
    if (!botonH3.classList.contains("active")) {
      botonH3.classList.toggle("active");
    }
  });
  
//-------------- Terminan los elementos de la compra 



//-------------- Comienza el slider fotografico

var imagenes = ['https://i0.wp.com/www.recursosculturales.com/wp-content/uploads/2020/12/festival-malaga-cine.jpeg?fit=702%2C328&ssl=1','https://www.audiovisual451.com/wp-content/uploads/2022/01/sundance-2022.png','https://sitgesfilmfestival.com/sitgesadmin/uploads/web_noticies_rel_img/1232371588.png','http://4.bp.blogspot.com/-i-VK3C_LKrs/VSP26c9788I/AAAAAAAAE0Y/DXIeL4mZJ8U/s1600/Hugo-Awards.jpg' ];
 let cont = 0;

  function carrusel(contenedor) {
    contenedor.addEventListener('click', (e) => {
      let atras = contenedor.querySelector('.atras');
      let adelante = contenedor.querySelector('.adelante');
      let img = contenedor.querySelector('img');
      let tgt = e.target;

      if (tgt == atras) {
        if (cont > 0) {
          img.src = imagenes[cont - 1];
          cont--;
        }else{
          img.src = imagenes[imagenes.length - 1]
          cont = imagenes.length - 1;
        }
      }else if(tgt == adelante){
        if (cont < imagenes.length - 1) {
          img.src = imagenes[cont + 1];
          cont++;
        }else{
          img.src = imagenes[0]
          cont = 0;
        }
      }




    });
  }
  document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contFoto');

    carrusel(contenedor)
  })


