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
img8 = `${URLIMG}eOGZagunINGbIMMDXSJnzKJ1Ai4.jpg`;
img9 = `${URLIMG}nMHCJiVFjUmQWC116Ze96u5IhfX.jpg`;
img10 = `${URLIMG}96htqghZlKctNJqDLo2DuC9PEap.jpg`;

//Cargo las imágenes en cada id de cartel
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

//HAGO ARRAY CON TODAS LAS SINOPSIS
let overviews = [json.results[0].overview, json.results[5].overview, json.results[1].overview, 
json.results[6].overview, json.results[8].overview, json.results[16].overview, json.results[12].overview,
json.results[17].overview, json.results[18].overview, json.results[19].overview];


//RECORRO ARRAY
for(let i=0; i<overviews.length; i++){
    
    sinopsis = overviews[i]
    // console.log(sinopsis);
    document.getElementById(`sinop${i}`).textContent = sinopsis;
}

//Cojo los títulos de la API para el Popup
 let titulo = [json.results[0].title, json.results[5].title, json.results[1].title, 
 json.results[6].title, json.results[8].title, json.results[16].title, json.results[12].title,
 json.results[17].title, json.results[18].title, json.results[19].title];
 console.log(titulo)
 //Cojo las notas de la API para el Popup
let notaP = [json.results[0].vote_average, json.results[5].vote_average, json.results[1].vote_average, 
json.results[6].vote_average, json.results[8].vote_average, json.results[16].vote_average, json.results[12].vote_average,
json.results[17].vote_average, json.results[18].vote_average, json.results[19].vote_average];

//POPUP DE COMPRA
//Evento para poder interactuar con los carteles
for(let j=0; j<=9; j++){
    var poster = document.getElementById(`cartel${j}`);
    
    poster.addEventListener('click', ()=>{
        mostrar(contenedor)

        if(j == 0){
           
            //  let title1 = json.results[0].original_title;
            // JSON.parse(localStorage.setItem("title1", title1));//guardo el título
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




let userNoReg = {
  "nombre": "",
  "edad": '',
  "userName": "",
  "password": "",
  "emails": "",
  "foto": "",
    "peliculas": [
      {
        "titulo": document.getElementById('tituloP').innerText,
        "fecha": "",
        "horario": "",
        "nEntradas": "",
        "butacas": [{

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }],
        "sala": "",
      }
    ]

  };
  
  document.getElementById("botonH1").addEventListener("click", () => {
    horas1 = document.getElementById("botonH1").innerHTML;
    userNoReg.peliculas[0].horario = horas1;
 
 
 });
 document.getElementById("botonH2").addEventListener("click", () => {
    horas2 = document.getElementById("botonH2").innerHTML;
    userNoReg.peliculas[0].horario = horas2;
 
 });
 document.getElementById("botonH3").addEventListener("click", () => {
    horas3 = document.getElementById("botonH3").innerHTML;
    userNoReg.peliculas[0].horario = horas3;
 
 });
 
  
 document.getElementById("botonCarrito").addEventListener("click", () => {
  let fechas = document.getElementById("calendarioCarrito").value;

  let nuevaF = fechas.split("-");

  let aux = nuevaF[0];
  nuevaF[0] = nuevaF[2];
  nuevaF[2] = aux;

  fechaOrdenada = nuevaF.join("-");
  userNoReg.peliculas[0].fecha = fechaOrdenada;

  console.log(userNoReg);
});
  
  
let contB = 0;
for (let i = 1; i <= 32; i++) {

   var butaca = document.getElementById(`asiento${i}`)
   butaca.addEventListener("click", function () {
      if (this.checked) {
         userNoReg.peliculas[0].butacas[contB].asiento = i;
         userNoReg.peliculas[0].nEntradas = contB + 1;
         document.getElementById("precioTotal").innerHTML = `${5 * (contB + 1)}€`;
         contB++
      } else if (!this.checked) {
         delete userNoReg.peliculas[0].butacas[contB - 1].asiento;
         userNoReg.peliculas[0].nEntradas--;
         document.getElementById("precioTotal").innerHTML = `${5 * (contB - 1)}€`;
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