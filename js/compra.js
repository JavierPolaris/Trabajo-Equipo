
    document.getElementById('nEntradas').addEventListener('click', () => {
        let entradas = document.getElementById('nEntradas').value
        document.getElementById('precioTotal').innerHTML = `${5 * entradas}€`
    })

    document.getElementById('nEntradas').addEventListener('click', () => {
        let precios = document.getElementById('nEntradas').value
        sessionStorage.setItem('precioEntradas', precios)

    })
    document.getElementById('botonH1').addEventListener('click', () => {
        let horas1 = document.getElementById('botonH1').innerHTML
        sessionStorage.setItem('hora', horas1)


    })
    document.getElementById('botonH2').addEventListener('click', () => {
        let horas2 = document.getElementById('botonH2').innerHTML
        sessionStorage.setItem('hora', horas2)


    })
    document.getElementById('botonH3').addEventListener('click', () => {
        let horas3 = document.getElementById('botonH3').innerHTML
        sessionStorage.setItem('hora', horas3)

    })
    sessionStorage.setItem('titulo',document.getElementById('tituloP').innerHTML)
    sessionStorage.setItem('foto', document.getElementById('cartel1').src)

// let userReg1 = [
//     {
//       "nombre": "Javier Garcia-Rojo",
//       "edad": 35,
//       "userName": "Polaris",
//       "password": "1234",
//       "emails":  "javi@gmail.com",
//       "foto": "https://th.bing.com/th/id/R.8133c6806733bf4e644d64ad74122485?rik=bfmBAVUhIju6iA&pid=ImgRaw&r=0",
  
//       "peliculas": [{
//         "titulo": '"Matar a un risueño"',
//         "fecha": "07/01/2022",
//         "horario": "Mañana",
//         "nº entradas": "2",
//         "sala": "1"
//     }]
//     }]