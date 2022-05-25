



let userReg1 = [
    {
      "nombre": "Javier Garcia-Rojo",
      "edad": 35,
      "userName": "Polaris",
      "password": "1234",
      "Emails":  "javi@gmail.com",
      "foto":"https://th.bing.com/th/id/OIP.DYRnRI05OcLZ06Kqy-GJ6AAAAA?w=138&h=150&c=7&r=0&o=5&pid=1.7",
      "Dia": "10 de mayo 2022",
       "Película": "Rebeca",
       "Número de entradas": "2"
    }
]

 


   
let userReg2 = [
    {
        "nombre": "Yann Poirot",
        "edad": 30,
        "userName": "Yann",
        "password": "4321",
        "Emails":  "yaan@gmail.com",
        "foto": "https://th.bing.com/th/id/R.8133c6806733bf4e644d64ad74122485?rik=bfmBAVUhIju6iA&pid=ImgRaw&r=0",
        "Dia": "11 de abril 2022",
        "Película": "Matar a un risueños",
        "Número de entradas": "3"}
    
]
 

 //userReg1

document.getElementById("username").innerHTML = (userReg1[0].userName)
document.getElementById("historial1").innerHTML = (`Día: ${userReg1[0].Dia}, película: ${userReg1[0].Película}, Número de entradas: ${userReg1[0]["Número de entradas"]}`)
document.getElementById('fotoUsuario').src = (userReg1[0].foto);

  /* 

//userReg2
document.getElementById("username").innerHTML = (userReg2[0].userName)
document.getElementById("historial1").innerHTML = (`Día: ${userReg2[0].Dia}, película: ${userReg2[0].Película}, Número de entradas: ${userReg2[0]["Número de entradas"]}`)
document.getElementById('fotoUsuario').src = (userReg2[0].foto);
  */