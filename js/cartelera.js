const APIKEY = 'a0b853f3c16b413dd04bcbf5d558eedf'; //KEY PROPORCIONADA POR LA API
const URLBASE = 'https://api.themoviedb.org/3/'; //URL BASE A LA QUE SE LE AÑADE LA RUTA DE LAS CLASES
const URLIMG = 'https://image.tmdb.org/t/p/w500/'; //URL PARA COGER IMÁGENES
function getMovies (){ //COGER EL JSON DE LA API
    const URL = `${URLBASE}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(json => {
        // console.log(json);
    //CARGAR IMÁGENES DE LA API A LOS ID DEL HTML
img1 = `${URLIMG}iwnQ1JH1wdWrGYkgWySptJ5284A.jpg`; 
img2 = `${URLIMG}77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg`;
img3 = `${URLIMG}pfte7wdMobMF4CVHuOxyu6oqeeA.jpg`;
img4 = `${URLIMG}bQTHTZezSudf27mMQtedHf1XpgO.jpg`;
img5 = `${URLIMG}6uSPcdGNA2A6vJmCagXkvnutegs.jpg`;
img6 = `${URLIMG}6UrNb7sdolnuqxBJ4I8OxTUvTmQ.jpg`;
img7 = `${URLIMG}b9Q2WR62yB5Aq0hd6kyRFS9cc3Y.jpg`;
img8 = `${URLIMG}eOGZagunINGbIMMDXSJnzKJ1Ai4.jpg`;
img9 = `${URLIMG}aqNzRiaEsfv567Ji9njJofblRBE.jpg`;
img10 = `${URLIMG}rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg`;



    
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
let overviews = [json.results[0].overview, json.results[1].overview, json.results[2].overview, 
json.results[7].overview, json.results[9].overview, json.results[15].overview, json.results[13].overview,
json.results[17].overview, json.results[18].overview, json.results[19].overview];


//RECORRO ARRAY
for(let i=0; i<overviews.length; i++){
    
    sinopsis = overviews[i]
    // console.log(sinopsis);
    document.getElementById(`sinop${i}`).textContent = sinopsis;
}


//POPUP DE COMPRA


//Popup aparece al hacer click en cartel
// var films = document.getElementsByClassName("film");
// for(let i=0; i<films.length; i++){
//     films[i].addEventListener('click', function(){
        
    
    
    
//     });
// }


//Evento click en cada póster para que la compra haga popup
for(let j=0; j<=9; j++){
    var poster = document.getElementById(`cartel${j}`);
    
    poster.addEventListener('click', ()=>{
        mostrar(contenedorMax)
    //     if(contenedor.style.display == 'none')
    //     contenedor = document.getElementById('contenedor').style.display = 'block';
    //     else{
    //         // function ocultarPop(){
    //         contenedor = document.getElementById('contenedor').style.display = 'none'
    //     // }
    // }
        if(j == 0){
            // JSON.parse(localStorage.setItem("img1", img1)); //Guardo la imagen
            
            document.getElementById('cartelComp').src = img1;
            
            // let title1 = json.results[0].original_title;
            // JSON.parse(localStorage.setItem("title1", title1));//guardo el título
        }
        if(j == 1){
            // JSON.parse(localStorage.setItem("img2", img2));
            document.getElementById('cartelComp').src = img2;
        }
        if(j == 2){
            // JSON.parse(localStorage.setItem("img3", img3));
            document.getElementById('cartelComp').src = img3;
        }
        if(j == 3){
            // JSON.parse(localStorage.setItem("img4", img4));
            document.getElementById('cartelComp').src = img4;
        }
        if(j == 4){
            // JSON.parse(localStorage.setItem("img5", img5));
            document.getElementById('cartelComp').src = img5;
        }
        if(j == 5){
            // JSON.parse(localStorage.setItem("img6", img6));
            document.getElementById('cartelComp').src = img6;
        }
        if(j == 6){
            // JSON.parse(localStorage.setItem("img7", img7));
            document.getElementById('cartelComp').src = img7;
        }
        if(j == 7){
            // JSON.parse(localStorage.setItem("img8", img8));
            document.getElementById('cartelComp').src = img8;
        }
        if(j == 8){
            // JSON.parse(localStorage.setItem("img9", img9));
            document.getElementById('cartelComp').src = img9;
        }
        if(j == 9){
            // JSON.parse(localStorage.setItem("img10", img10));
            document.getElementById('cartelComp').src = img10;
        }

    });

    
}




})
//Hago una función para recoger en el Storage la info del JSON
// var infoImg = document.querySelectorAll('.card').forEach(item=>{
//     item.addEventListener('click', event => {
//         console.log('funciona')
//     })

// });






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

// var contenedor = document.getElementById('contenedor'); //Aquí estoy intentando ocultar el popup si clikeo en el div del fondo
//         if(contenedor){
//         function ocultarPop(){    
//             contenedor.style.display = 'none';
//         }
// }



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
  
  document.getElementById("nEntradas").addEventListener("click", () => {
    let entradas = document.getElementById("nEntradas").value;
    userNoReg.peliculas[0].nEntradas = entradas;
      document.getElementById("precioTotal").innerHTML = `${5 * entradas}€`;
    console.log(userNoReg);
  });
  
  document.getElementById("nEntradas").addEventListener("click", () => {
    let precios = document.getElementById("nEntradas").value;
    localStorage.setItem("precioEntradas", precios);
  });
  document.getElementById("botonH1").addEventListener("click", () => {
    let horas1 = document.getElementById("botonH1").innerHTML;
    userNoReg.peliculas[0].horario = horas1;
    console.log(userNoReg);
  });
  document.getElementById("botonH2").addEventListener("click", () => {
    let horas2 = document.getElementById("botonH2").innerHTML;
    userNoReg.peliculas[0].horario = horas2;
    console.log(userNoReg);
  });
  document.getElementById("botonH3").addEventListener("click", () => {
    let horas3 = document.getElementById("botonH3").innerHTML;
    userNoReg.peliculas[0].horario = horas3;
    console.log(userNoReg);
  });
  
  document.getElementById("botonCarrito").addEventListener("click", () => {
    // console.log(document.getElementById("calendarioCarrito").value)
    let fechas = document.getElementById("calendarioCarrito").value;
  
    let nuevaF = fechas.split("-");
    for (let i = 0; i < nuevaF.length / 2; i++) {
      let aux = nuevaF[i];
      nuevaF[i] = nuevaF[nuevaF.length - (1 + i)];
      nuevaF[nuevaF.length - (1 + i)] = aux;
    }
    fechaOrdenada = nuevaF.join("-");
    userNoReg.peliculas[0].fecha = fechaOrdenada;
  
    console.log(userNoReg);
  });
  // for (let i = 1; i <= 32; i++) {
  
  //    var checkbox = document.getElementById(`asiento${i}`);
  //    checkbox.addEventListener("change", function () {
  //      if (this.checked) {
  //       //  alert(`${i}checked`);
  
  //       userNoReg.peliculas[0].butacas.nuevaClave = i;
  
  //      }
  //      //  if (!this.checked) {
  //      //    localStorage.removeItem(`butacas${i}`);
  //      //  }
  //    });
  //    if(i==32){
  //       console.log(userNoReg)
  //    }
  //  }
  
  //
  //   return fechaOrdenada
  // let userNoReg =
  //     {
  //       "nombre": "",
  //       "edad": '',
  //       "userName": "",
  //       "password": "",
  //       "emails":  "",
  //       "foto": "",
  
  //       "peliculas": [{
  //         "titulo": document.getElementById("tituloP").innerText,
  //         "fecha": 'a',
  //         "horario": "Mañana",
  //         "nº entradas": "2",
  //         "sala": "1"
  //     }]
  //     }
  // });
  
  // userNoReg.peliculas[0].butacas[0].nuevaClave='pep'
  
  // for(let i=1;i<32;i++){
  //    document.getElementById(`asiento${i}`).addEventListener("click", () => {
  //       let prov=`butaca${cont}`
  //       let butacas = prov
  //       butacas=document.getElementById("botonH3").innerHTML;
  //       localStorage.setItem("hora", horas3);
  //     });
  // }
  
  // let filas=document.getElementsByClassName('section')
  // for(let i=0;i<filas.length;i++){
  //    for(let j=1;j<32;j++){
  //       if(`asiento${j}`){
  
  //       }
  //    }
  
  // document.getElementsByClassName("section").addEventListener("click", () => {
  //   let horas3 = document.getElementById("botonH3").innerHTML;
  //   localStorage.setItem("hora", horas3);
  // });
  
  localStorage.setItem("titulo", document.getElementById("tituloP").innerText);
  
  localStorage.setItem("foto", document.getElementById("cartel1").src);
  
  console.log(userNoReg.peliculas[0].titulo);
  
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