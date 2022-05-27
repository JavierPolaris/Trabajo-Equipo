
// crear imagen de avatar

 
const imagenPrevisualizacion = document.getElementById('fotoUsuario');

document.getElementById("seleccionArchivos").addEventListener('change', ()=> {
  const archivos = seleccionArchivos.files;

  if (!archivos || !archivos.length) {
    imagenPrevisualizacion.src = "";
    return;
  }

  const primerArchivo = archivos[0];
  const objetoUrl = URL.createObjectURL(primerArchivo);
  // sessionStorage.setItem(`clientes: ${contador}`, JSON.stringify

  imagenPrevisualizacion.src = objetoUrl;
})


// Final crear imagen de avatar

var user1 = JSON.parse(sessionStorage.getItem('clientes: 1'));

var userName = sessionStorage.getItem('clientes: 1');
console.log(userName);

//   console.log(user1); 

// console.log(sessionStorage.getItem('clientes:1'));
  
// var userString =sessionStorage.getItem('clientes: 1');
// console.log(userString);



//yann

var rollo1=Object.values(user1);
var user = rollo1[0];

document.getElementById("username").innerHTML = user

/* for(let i=0; i<sessionStorage.length; i++) {
   let key = sessionStorage.key(i);
   console.log(`${key}: ${sessionStorage.getItem(key)}`);
   var pesado= (`${key}: ${sessionStorage.getItem(key)}`)
   console.log(pesado);
   alert(pesado)


} */


 /*  if(`${sessionStorage.userName=='Polaris'}`){
    console.log('se ha logueado polaris');
  } else if (`${sessionStorage.userName=='Yannis'}`){
    console.log('se ha logueado YANN');
  }
 */


//document.getElementById("username").innerHTML = (`Información del perfil: <br><br>Nombre de usuario: ${key.userName} <br> Correo electrónico: ${key.emails} `)
/* document.getElementById("historial1").innerHTML = (`Día: ${userReg2[0].peliculas[0].fecha}, película: ${userReg2[0].peliculas[0].titulo}, Número de entradas: ${userReg2[0].peliculas[0]["nº entradas"]} Sala: ${userReg2[0].peliculas[0].sala}`),
document.getElementById('fotoUsuario').src = (userReg2[0].foto); 
 */


 
// console.log(key.userName)
  // console.log(`${key.userName}`)
  // {
  //   mostrarYann();
  //   console.log(object);
  // }else if (`${key.userName}`== 'Polaris') {
  //   mostrarPolaris()
  // }  else console.log('coño')
    
  
    
  


        
    
