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


//   console.log(userReg[0].userName);

  document.getElementById('logIn').addEventListener('click', (e)=> {
      e.preventDefault()

      let userLog = document.getElementById('usuario').value;
      let passLog = document.getElementById('pass').value;


      if (userLog === userReg[0].userName && passLog === userReg[0].password) {
         console.log('ok log')
        
      }else{
          console.log('no estas registrado')
      }
      
      if (userLog === userReg[1].userName && passLog === userReg[1].password) {
         console.log('ok log')
        
      }else{
          console.log('no estas registrado')
      }
      

    
    })