
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


//IMPRESION EN EL DOM DEL PERFIL DE YANN
//Informacion del perfil

var user1 = JSON.parse(sessionStorage.getItem('clientes: 1'));
var user2 = JSON.parse(sessionStorage.getItem('clientes: 0'));
var user3 = JSON.parse(sessionStorage.getItem('clientes: 3'));
// console.log(user2.peliculas)

// var userName = sessionStorage.getItem('clientes: 1');
// console.log(user2.peliculas[0].titulo)
// let contador = 0;
for (let i = 0; i < sessionStorage.length; i++) {
  let key = sessionStorage.key(i);

  if (key == 'clientes: 1') {//yann
    // console.log('clientes: 1')
    document.getElementById("username").innerHTML = `Información de perfil: ${user1.nombre} <br> Edad: ${user1.edad} <br> Nombre de usuario: ${user1.userName} <br> Email: ${user1.emails}`;
    document.getElementById("historial1").innerHTML = `Titulo: ${user1.peliculas[0].titulo} <br>
                                                      Fecha: ${user1.peliculas[0].fecha} <br>
                                                      Horario: ${user1.peliculas[0].horario} <br>
                                                      Nº Entradas: ${user1.peliculas[0].n_entradas} <br>
                                                      Sala: ${user1.peliculas[1].sala} <br><br>
                                                      Titulo: ${user1.peliculas[1].titulo} <br>
                                                      Fecha: ${user1.peliculas[1].fecha} <br>
                                                      Horario: ${user1.peliculas[1].horario} <br>
                                                      Nº Entradas: ${user1.peliculas[1].n_entradas} <br>
                                                      Sala: ${user1.peliculas[1].sala} <br>`;

  } else if (key == 'clientes: 0') { //javier

    document.getElementById("username").innerHTML = `Información de perfil: ${user2.nombre} <br> Edad: ${user2.edad} <br> Nombre de usuario: ${user2.userName} <br> Email: ${user2.emails}`
    document.getElementById("historial1").innerHTML = `Titulo: ${user2.peliculas[0].titulo} <br>
                                                      Fecha: ${user2.peliculas[0].fecha} <br>
                                                      Horario: ${user2.peliculas[0].horario} <br>
                                                      Nº Entradas: ${user2.peliculas[0].n_entradas} <br>
                                                      Sala: ${user2.peliculas[0].sala} <br><br>
                                                      Titulo: ${user2.peliculas[1].titulo} <br>
                                                      Fecha: ${user2.peliculas[1].fecha} <br>
                                                      Horario: ${user2.peliculas[1].horario} <br>
                                                      Nº Entradas: ${user2.peliculas[1].n_entradas} <br>
                                                      Sala: ${user2.peliculas[1].sala} <br>`;
  } else if (key == 'clientes: 3') {
    // imagenPrevisualizacion.src = `${user3.foto}`
    document.getElementById("username").innerHTML = `Información de perfil: ${user3.userName} <br> PassWord: ${user3.password}<br> Email: ${user3.emails}`
    document.getElementById("historial1").innerHTML = `Titulo: ${user3.peliculas[0].titulo} <br>
                                                      Fecha: ${user3.peliculas[0].fecha} <br>
                                                      Horario: ${user3.peliculas[0].horario} <br>
                                                      Nº Entradas: ${user3.peliculas[0].n_entradas} <br>
                                                      Sala: ${user3.peliculas[0].sala} <br><br>
                                                      Titulo: ${user3.peliculas[1].titulo} <br>
                                                      Fecha: ${user3.peliculas[1].fecha} <br>
                                                      Horario: ${user3.peliculas[1].horario} <br>
                                                      Nº Entradas: ${user3.peliculas[1].n_entradas} <br>
                                                      Sala: ${user3.peliculas[1].sala} <br>`;


  }
}


//TODO----------tenemos que coger la key mirar en peliculas y cambiarla o borrarla para que no se vea ni se recarge



//BORRAR HISTORIAL
document.getElementById('borrarHistorial').addEventListener('click', () => {

  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);

    if (key == 'clientes: 1') { //Yann

      user1.peliculas = [];
      console.log('borrado')
      sessionStorage.setItem('clientes: 1', JSON.stringify(user1))
      document.getElementById('historial1').innerHTML = 'Tu historial está vacío'


    } else if (key == 'clientes: 0') { //javier

      user2.peliculas = [];
      console.log('borrado')
      sessionStorage.setItem('clientes: 0', JSON.stringify(user2))
      document.getElementById('historial1').innerHTML = 'Tu historial está vacío'

    } else if (key == 'clientes: 3') { //Usuario de registro

      user3.peliculas = [];
      console.log('borrado')
      sessionStorage.setItem('clientes: 3', JSON.stringify(user3))
      document.getElementById('historial1').innerHTML = 'Tu historial está vacío'

    }
  }
})

// console.log(JSON.parse(sessionStorage.getItem(`clientes: 0`)))









// TODO-------------------principio LogOut

document.getElementById('logout').addEventListener('click', () => {
  location.assign("index.html");
})
