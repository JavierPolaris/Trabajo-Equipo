
// crear imagen de avatar


const imagenPrevisualizacion = document.getElementById('fotoUsuario');

document.getElementById("seleccionArchivos").addEventListener('change', () => {
  const archivos = seleccionArchivos.files;

  if (!archivos || !archivos.length) {
    imagenPrevisualizacion.src = "https://www.ganaderia.com/img/default.jpg";
    return;
  }

  const primerArchivo = archivos[0];
  const objetoUrl = URL.createObjectURL(primerArchivo);
  // sessionStorage.setItem(`clientes: ${contador}`, JSON.stringify

  imagenPrevisualizacion.src = objetoUrl;
  //TODO----------tenemos que coger la key mirar en foto y cambiarla para que la foto que elijamos se mantenga en el sesionStorage
  // let imgSesion = JSON.parse(sessionStorage.getItem('clientes: 3'));
  //   imgSesion.foto = objetoUrl
//BORRAR HISTORIAL


  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);

    if (key == 'clientes: 1') { //Yann

      user1.foto = objetoUrl;
     
      sessionStorage.setItem('clientes: 1', JSON.stringify(user1))
      

    } else if (key == 'clientes: 0') { //javier

      user2.foto = "";
      
      sessionStorage.setItem('clientes: 0', JSON.stringify(user2))
  
    } else if (key == 'clientes: 3') { //Usuario de registro

      user3.foto = "";
      
      sessionStorage.setItem('clientes: 3', JSON.stringify(user3))
      

    }
  }


})


// Final crear imagen de avatar




// Final crear imagen de avatar


//HISTORIAL DE LOS DOS USUARIOS YA REGISTRADOS CON UN HISTORIAL PREVIO
//HISTORIAL DEL USUARIO DE NUEVO REGISTRO


var user1 = JSON.parse(sessionStorage.getItem('clientes: 0'));
var user2 = JSON.parse(sessionStorage.getItem('clientes: 1'));
var user3 = JSON.parse(localStorage.getItem('clientes: 3'));

var yann = JSON.parse(sessionStorage.getItem('usuario1'));
var javier=JSON.parse(sessionStorage.getItem('usuario0'));
var usuarioNuevo=JSON.parse(localStorage.getItem('usuario3'));


for (let i = 0; i < sessionStorage.length; i ++) { 
  let key = sessionStorage.key(i);
  // let key2=sessionStorage.key(i+2);
  
  if ( key == 'clientes: 1' ) {//yann // 
    document.getElementById("username").innerHTML = `Información de perfil: ${user2.nombre} <br> Edad: ${user2.edad} <br> Nombre de usuario: ${user2.userName} <br> Email: ${user2.emails}`;
    for(let j=0; j < 2;j++) {
       
        document.getElementById("historial1").innerHTML +=  `Titulo: ${user2.peliculas[j].titulo} <br>
                                                                Fecha: ${user2.peliculas[j].fecha} <br>
                                                                Horario: ${user2.peliculas[j].horario} <br>
                                                                Nº Entradas: ${user2.peliculas[j].nEntradas} <br>`;
        
                                                      
    }
    for(let j=2; j < user2.peliculas.length;j++) {
      // console.log('clientes: 1') o que se guarda del session storage es a usuario0, no clientes.
     if(user2.peliculas[j].titulo != ''){
      document.getElementById("historial1").innerHTML +=  `Titulo: ${user2.peliculas[j].titulo} <br>
                                                              Fecha: ${user2.peliculas[j].fecha} <br>
                                                              Horario: ${user2.peliculas[j].horario} <br>
                                                              Nº Entradas: ${user2.peliculas[j].nEntradas} <br>`;
     }
  }
  console.log(key)
  } else if (key == 'clientes: 0' ) { //javier .
console.log(user1.nombre)
console.log(user1)
console.log(user3)
    document.getElementById("username").innerHTML = `Información de perfil: ${user1.nombre} <br> Edad: ${user1.edad} <br> Nombre de usuario: ${user1.userName} <br> Email: ${user1.emails}`;
    for(let j=0; j < 2;j++) {
       
        document.getElementById("historial1").innerHTML +=  `Titulo: ${user1.peliculas[j].titulo} <br>
                                                                Fecha: ${user1.peliculas[j].fecha} <br>
                                                                Horario: ${user1.peliculas[j].horario} <br>
                                                                Nº Entradas: ${user1.peliculas[j].nEntradas} <br>`;
                                         
    }
    for(let j=2; j < user1.peliculas.length;j++) {
      // console.log('clientes: 1') o que se guarda del session storage es a usuario0, no clientes.
     if(user1.peliculas[j].titulo != ''){
      document.getElementById("historial1").innerHTML +=  `Titulo: ${user1.peliculas[j].titulo} <br>
                                                              Fecha: ${user1.peliculas[j].fecha} <br>
                                                              Horario: ${user1.peliculas[j].horario} <br>
                                                              Nº Entradas: ${user1.peliculas[j].nEntradas} <br>`;                                              

     }
  }         

  } else if (localStorage.key(0) == 'clientes: 3'){
    document.getElementById("username").innerHTML = `Información de perfil: ${user3.nombre} <br> <br> Nombre de usuario: ${user3.userName} <br> Email: ${user3.emails}`;

    for(let i=0; i < user3.peliculas.length;i++) {
      if(user3.peliculas[i].titulo != '') {
      document.getElementById("historial1").innerHTML += ` Titulo: ${user3.peliculas[i].titulo} <br>
                                                              Fecha: ${user3.peliculas[i].fecha} <br>
                                                              Horario: ${user3.peliculas[i].horario} <br>
                                                              Nº Entradas: ${user3.peliculas[i].nEntradas} <br><br>`;

  }
  }
}
console.log(localStorage.key(0))
console.log(user3)

//TODO----------tenemos que coger la key mirar en peliculas y cambiarla o borrarla para que no se vea ni se recarge



//BORRAR HISTORIAL
document.getElementById('borrarHistorial').addEventListener('click', () => {

  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);

    if (key == 'clientes: 1') { //Yann

      user2.peliculas = [];
      console.log('borrado')
      sessionStorage.setItem('clientes: 1', JSON.stringify(user2))
      document.getElementById('historial1').innerHTML = 'Tu historial está vacío'


    } else if (key == 'clientes: 0') { //javier

      user1.peliculas = [];
      console.log('borrado')
      sessionStorage.setItem('clientes: 0', JSON.stringify(user1))
      document.getElementById('historial1').innerHTML = 'Tu historial está vacío'

    }
  }
  if (localStorage.key(0) == 'clientes: 3') { //Usuario de registro

    user3.peliculas = [];
    console.log('borrado')
    sessionStorage.setItem('clientes: 3', JSON.stringify(user3))
    document.getElementById('historial1').innerHTML = 'Tu historial está vacío'

  }
})

// console.log(JSON.parse(sessionStorage.getItem(`clientes: 0`)))









// TODO-------------------principio LogOut

document.getElementById('logout').addEventListener('click', () => {
  location.assign("index.html");
})
}
