



localStorage.setItem(`clientes: 0`, JSON.stringify({
  "nombre": "Javier Garcia-Rojo",
  "edad": 35,
  "userName": "Polaris",
  "password": "1234",
  "Emails": "javi@gmail.com",
  "peliculas": [{
    "titulo": "",
    "fecha": "",
    "horario": "",
    "nº entradas": "",
    "sala": "",

  }]

}))
localStorage.setItem(`clientes: 1`, JSON.stringify({
  "nombre": "Yann Poirot",
  "edad": 30,
  "userName": "Yann",
  "password": "4321",
  "emails": "yaan@gmail.com",
  "peliculas": [{
    "titulo": "",
    "fecha": "",
    "horario": "",
    "nº entradas": "",
    "sala": "",

  }]

}))
//Creo un JSON con los usuarios predefinidos
let userReg = [
  {
    "nombre": "Javier Garcia-Rojo",
    "edad": 35,
    "userName": "Polaris",
    "password": "1234",
    "Emails": "javi@gmail.com",
    "peliculas": [{
      "titulo": "",
      "fecha": "",
      "horario": "",
      "nº entradas": "",
      "sala": "",
    }]



  },
  {
    "nombre": "Yann Poirot",
    "edad": 30,
    "userName": "Yann",
    "password": "4321",
    "emails": "yaan@gmail.com",
    "peliculas": [{
      "titulo": "",
      "fecha": "",
      "horario": "",
      "nº entradas": "",
      "sala": "",
    }]
  }
]






// TODO-------------------comienzo LOG

//   Creo la funcion del boton logIn y si estan vacios los imputs o si estan registrados

document.getElementById('logIn').addEventListener('click', (e) => {
  e.preventDefault()

  let userLog = document.getElementById('usuario').value;
  let passLog = document.getElementById('pass').value;

  if (userLog == '' || passLog == '') {
    alert("Los campos usuario y contraseña no pueden estar vacios")
  }
  if ((userLog === userReg[0].userName && passLog === userReg[0].password) || (userLog === userReg[1].userName && passLog === userReg[1].password)) {
    console.log('ok log')
    location.assign("tucine.html");

  } else {
    console.log('no estas registrado')

  }




})
// creo el boton registro para redireccionarnos al registro
document.getElementById('registrarse').addEventListener('click', () => {
  mostrar(registro)
  btnGr(log)
})


function mostrar(id) {
  let test = document.getElementById('registro');
  if (test.style.display == 'block') {
    test.style.display = 'none';
  } else {
    test.style.display = 'block'
  }
}
function btnGr(id) {
  let test = document.getElementById('log');
  if (test.style.display == 'inline') {
    test.style.display = 'block';
  } else {
    test.style.display = 'none'
  }
}

// TODO-------------------final LOG


// TODO-------------------comienzo REGISTRO

// validacion de registro

const form = document.querySelector('#form');

// form inputs
const formUser = form.querySelector('#user');
const formEmail = form.querySelector('#email');
const formEmailConfirmation = form.querySelector('#emailConf');
const formPass = form.querySelector('#passFr');
const formPassConfirmation = form.querySelector('#passConf');

// regular expressions
const userExp = new RegExp(/^([A-Za-z0-9_]{1,15})$/);
const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);

/**
 * chekear que el formato del password sea correcto
 * @param {String} pass - el password que va a ser chequeado.
 * @return {String} En caso de que la contraseña sea correcta, se devolverá una cadena vacía,
 * pero si la contraseña es incorrecta, se devolverá un mensaje.
 */
const checkPassFormat = (pass) => {
  if (pass.length < 8)
    return 'La contraseña debe tener al menos 8 caracteres.';

  if (pass.length > 15)
    return 'La contraseña no debe exceder los 15 caracteres.';

  // comprobar la contraseña tiene una letra mayúscula
  if (!/[A-Z]/.test(pass))
    return 'La contraseña debe contener al menos una letra mayúscula';

  // comprobar la contraseña tiene una letra minúscula
  if (!/[a-z]/.test(pass))
    return 'La contraseña debe contener al menos una letra mayúscula';

  // comprobar la contraseña tiene un dígito
  if (!/[0-1]/.test(pass))
    return 'La contraseña debe contener al menos un dígito';

  if (/\ /.test(pass))
    return 'La contraseña no puede tener espacios en blanco';

  return '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // verifica el formato de usuario
  if (!userExp.test(formUser.value)) {
    alert('Usuario no valido'); return;
  }

  // verifica el formato del Email
  if (!emailExp.test(formEmail.value)) {
    alert('Email no valido'); return;
  }

  // el correo electrónico de verificación y el correo electrónico de confirmación son iguales
  if (formEmail.value.localeCompare(formEmailConfirmation.value) != 0) {
    alert('Emails son diferentes'); return;
  }

  // verifica el password
  let passCheckMsg = checkPassFormat(formPass.value);
  if (passCheckMsg != '') {
    alert(passCheckMsg); return;
  }

  // comprobar que la contraseña y la confirmación de la contraseña son iguales
  if (formPass.value.localeCompare(formPassConfirmation.value) != 0) {
    alert('El passwords es diferentes'); return;
  }

  // verifique que el correo electrónico y la contraseña sean iguales
  if (formEmail.value.localeCompare(formPass.value) == 0) {
    alert('El correo electrónico y la contraseña no pueden ser iguales'); return;
  }

  location.assign("tucine.html");





  // !-------------------comienzo LocalStorage registro

  let contador = 2;
  localStorage.setItem(`clientes: ${contador}`, JSON.stringify({
    "nombre": "",
    "edad": "",
    "userName": formUser.value,
    "password": formPass.value,
    "emails": formEmail.value,
    "foto": "",
    "peliculas": [{
      "titulo": "",
      "fecha": "",
      "horario": "",
      "nº entradas": "",
      "sala": "",

    }]

  }))





});






// TODO-------------------final REGISTRO



// TODO-------------------principio CARRITO

class Carrito {
  constructor(clave){
    this.clave = clave || "pelicula";
    this.pelicula = this.obtener();
  }
  // agregar que recibe un producto y lo agrega en caso de que no exista.
  agregar(pelicula) {
    if(!this.existe(peliculas.id)){
      this.peliculas.push(pelicula);
      this.guardar();
    }
  }

  quitar(id) {
    const indice = this.peliculas.findIndex(p=> p.id === id);
    if (indice != -1) {
      this.peliculas.splice(indice, 1);
      this.guardar();
    }
  }


  guardar() {
    localStorage.setItem(this.clave, JSON.stringify(this.peliculas));
  }
  // obtener que devuelve el arreglo de productos
  obtener() {
    const peliculasCodificados = localStorage.getItem(this.clave);
    return JSON.parse(peliculasCodificados) || [];
  }

  existe(id) {
    return this.peliculas.find(pelicula => pelicula.id ===id);
  }

  obtenerConteo() {
    return this.peliculas.length;
  }


}







