
let userReg1 = [
  {
    "nombre": "Javier Garcia-Rojo",
    "edad": 35,
    "userName": "Polaris",
    "password": "1234",
    "emails":  "javi@gmail.com",
    "foto": "https://th.bing.com/th/id/R.8133c6806733bf4e644d64ad74122485?rik=bfmBAVUhIju6iA&pid=ImgRaw&r=0",

    "peliculas": [{
      "titulo": 'Matar a un risueño',
      "fecha": "07/01/2022",
      "horario": "Mañana",
      "nº entradas": "2",
      "sala": "1"
  }]
  }]

  let userReg2 = [
    {
      "nombre": "Yann Poirot",
      "edad": 29,
      "userName": "Yannis",
      "password": "1111",
      "emails":  "yannis@gmail.com",
      "foto": "https://th.bing.com/th/id/R.8133c6806733bf4e644d64ad74122485?rik=bfmBAVUhIju6iA&pid=ImgRaw&r=0",
  
      "peliculas": [{
        "titulo": '"buscando a Nemo"',
        "fecha": "10/02/2022",
        "horario": "Tarde",
        "nº entradas": "3",
        "sala": "2"
      }]


    }]


 //userReg1

document.getElementById("username").innerHTML = (userReg1[0].userName)
document.getElementById("historial1").innerHTML = (`Día: ${userReg1[0].Dia}, película: ${userReg1[0].peliculas}, Número de entradas: ${userReg1[0]["nº entradas"]}`)
document.getElementById('fotoUsuario').src = (userReg1[0].foto);

   

//userReg2
document.getElementById("username").innerHTML = (userReg2[0].userName)
document.getElementById("historial1").innerHTML = (`Día: ${userReg2[0].Dia}, película: ${userReg2[0].Película}, Número de entradas: ${userReg2[0]["nº entradas"]}`)
document.getElementById('fotoUsuario').src = (userReg2[0].foto); 
  