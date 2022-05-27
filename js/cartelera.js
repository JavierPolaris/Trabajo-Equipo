const APIKEY = 'a0b853f3c16b413dd04bcbf5d558eedf'; //KEY PROPORCIONADA POR LA API
const URLBASE = 'https://api.themoviedb.org/3/'; //URL BASE A LA QUE SE LE AÑADE LA RUTA DE LAS CLASES
const URLIMG = 'https://image.tmdb.org/t/p/w500/'; //URL PARA COGER IMÁGENES
function getMovies (){ //COGER EL JSON DE LA API
    const URL = `${URLBASE}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(json => {
    console.log(json)  
    //CARGAR IMÁGENES DE LA API LOS ID DEL HTML
document.getElementById('cartel0').src = `${URLIMG}iwnQ1JH1wdWrGYkgWySptJ5284A.jpg`; 
document.getElementById('cartel1').src = `${URLIMG}77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg`;
document.getElementById('cartel2').src = `${URLIMG}pfte7wdMobMF4CVHuOxyu6oqeeA.jpg`;
document.getElementById('cartel3').src = `${URLIMG}bQTHTZezSudf27mMQtedHf1XpgO.jpg`;
document.getElementById('cartel4').src = `${URLIMG}6uSPcdGNA2A6vJmCagXkvnutegs.jpg`;
document.getElementById('cartel5').src = `${URLIMG}6UrNb7sdolnuqxBJ4I8OxTUvTmQ.jpg`;
document.getElementById('cartel6').src = `${URLIMG}b9Q2WR62yB5Aq0hd6kyRFS9cc3Y.jpg`;
document.getElementById('cartel7').src = `${URLIMG}eOGZagunINGbIMMDXSJnzKJ1Ai4.jpg`;
document.getElementById('cartel8').src = `${URLIMG}aqNzRiaEsfv567Ji9njJofblRBE.jpg`;
document.getElementById('cartel9').src = `${URLIMG}rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg`;

//HAGO ARRAY CON TODAS LAS SINOPSIS
let overviews = [json.results[0].overview, json.results[1].overview, json.results[2].overview, 
json.results[7].overview, json.results[9].overview, json.results[15].overview, json.results[13].overview,
json.results[17].overview, json.results[18].overview, json.results[19].overview];


//RECORRO ARRAY
for(let i=0; i<overviews.length; i++){
    
    sinopsis = overviews[i]
    console.log(sinopsis);
    document.getElementById(`sinop${i}`).textContent = sinopsis;
}


})
    
}
    

this.getMovies()


