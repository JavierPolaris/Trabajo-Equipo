


//Creo un JSON con los usuarios predefinidos

let userReg = [
    {
      "nombre": "Javier Garcia-Rojo",
      "edad": 35,
      "userName": "Polaris",
      "password": "1234",
      "Emails":  "javi@gmail.com",
      
       
      
    },
    {
     "nombre": "Yann Poirot",
      "edad": 30,
      "userName": "Yann",
      "password": "4321",
      "Emails":  "yaan@gmail.com",
      }
  ]






// TODO-------------------comienzo LOG

//   Creo la funcion del boton logIn y si estan vacios los imputs o si estan registrados

  document.getElementById('logIn').addEventListener('click', (e)=> {
      e.preventDefault()

      let userLog = document.getElementById('usuario').value;
      let passLog = document.getElementById('pass').value;

      if (userLog == '' || passLog == '') {
        alert("Los campos usuario y contraseña no pueden estar vacios")
      }
      if( (userLog === userReg[0].userName && passLog === userReg[0].password) || (userLog === userReg[1].userName && passLog === userReg[1].password)) {
         console.log('ok log')
         location.assign("prueba.html");
        
      }else{
          console.log('no estas registrado')
         
      }
      
     

    
    })
// creo el boton registro para redireccionarnos al registro
   document.getElementById('registrarse').addEventListener('click', ()=> {
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

document.getElementById('registrarUser').addEventListener('click', (e)=> {
  e.preventDefault();

  let regUser = document.getElementById('user').value;
  let regEmail = document.getElementById('email').value;
  let regEmailConf = document.getElementById('emailConf').value;
  let regPass = document.getElementById('passFr').value;
  let regPassConf = document.getElementById('passConf').value;


  const userExp = new RegExp(/^([A-Za-z0-9_]{1,15}) $/);
  const resultadoUser = userExp.test(regUser);
  const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
  const resultadoEmail = emailExp.test(regEmail);
  // min 8 caracteres-max 15, almenos 1 Mayuscula,almenos 1 minuscula,al menos un digito, sin espacios en blanco, al menos un caracter
  const passExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/);
  const resultadoPass = passExp.test(regPass)

if (regEmail === regEmailConf && regPass === regPassConf) {
    console.log('email y pass iguales')
    if (resultadoUser && resultadoEmail && resultadoPass)     {
      console.log('todo ok')
      location.assign("prueba.html");
    }else{ 
      alert('algo estas haciendo mal')
    }
}else{ 
  alert('Los correos electrónicos tienen que coincidir al igual que el password')
}



})







// TODO-------------------final REGISTRO
