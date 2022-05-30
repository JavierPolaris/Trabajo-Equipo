let userNoReg = JSON.parse(localStorage.getItem('clientes: 2'))
let usuario0 = JSON.parse(sessionStorage.getItem('clientes: 0'))
let usuario1 = JSON.parse(sessionStorage.getItem('clientes: 1'))
let usuario3 = JSON.parse(localStorage.getItem('clientes: 3'))





for (let i = 0; i <= 2; i++) {
    if (usuario0 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario0.peliculas[(i + 2)].cartel
    } else if (usuario1 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario1.peliculas[(i + 2)].cartel
    } else if (usuario3 != null) {
        document.getElementById(`cartel${(i + 666)}`).src = usuario3.peliculas[i].cartel
    } else {
        document.getElementById(`cartel${(i + 666)}`).src = userNoReg.peliculas[i].cartel
    }


    if (usuario0 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].titulo;
    } else if (usuario1 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].titulo;
    } else if (usuario3 != null) {
        document.getElementById(`nombreP${(i + 1)}`).innerText = usuario3.peliculas[i].titulo;
    } else {
        document.getElementById(`nombreP${(i + 1)}`).innerText = userNoReg.peliculas[i].titulo;
    }


    if (usuario0 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario0.peliculas[(i + 2)].nEntradas} entradas: ${usuario0.peliculas[(i + 2)].nEntradas * 5}€`;
    } else if (usuario1 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario1.peliculas[(i + 2)].nEntradas} entradas: ${usuario1.peliculas[(i + 2)].nEntradas * 5}€`;
    } else if (usuario3 != null) {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${usuario3.peliculas[i].nEntradas} entradas: ${usuario3.peliculas[(i + 2)].nEntradas * 5}€`;
    } else {
        document.getElementById(`numEntradas${(i + 1)}`).innerText = ` ${userNoReg.peliculas[i].nEntradas} entradas: ${userNoReg.peliculas[i].nEntradas * 5}€`;
    }


    if (usuario0 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].horario;
    } else if (usuario1 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].horario;
    } else if (usuario3 != null) {
        document.getElementById(`horario${(i + 1)}`).innerText = usuario3.peliculas[i].horario;
    } else {
        document.getElementById(`horario${(i + 1)}`).innerText = userNoReg.peliculas[i].horario;
    }


    if (usuario0 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario0.peliculas[(i + 2)].fecha;
    } else if (usuario1 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario1.peliculas[(i + 2)].fecha;
    } else if (usuario3 != null) {
        document.getElementById(`diaP${(i + 1)}`).innerText = usuario3.peliculas[i].fecha;
    } else {
        document.getElementById(`diaP${(i + 1)}`).innerText = userNoReg.peliculas[i].fecha;
    }


    if (usuario0 != null) {
        for (let j = 0; j <= (usuario0.peliculas[(i + 2)].nEntradas - 1); j++) {
            j < (usuario0.peliculas[(i + 2)].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario0.peliculas[(i + 2)].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario0.peliculas[(i + 2)].butacas[j].asiento}`
        };
    } else if (usuario1 != null) {
        for (let j = 0; j <= (usuario1.peliculas[(i + 2)].nEntradas - 1); j++) {
            j < (usuario1.peliculas[(i + 2)].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario1.peliculas[(i + 2)].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario1.peliculas[(i + 2)].butacas[j].asiento}`
        };
    } else if (usuario3 != null) {
        for (let j = 0; j <= (usuario3.peliculas[i].nEntradas - 1); j++) {
            j < (usuario3.peliculas[i].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario3.peliculas[i].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${usuario3.peliculas[i].butacas[j].asiento}`
        };
    } else {
        for (let j = 0; j <= (userNoReg.peliculas[i].nEntradas - 1); j++) {
            j < (userNoReg.peliculas[i].nEntradas - 1) ? document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${userNoReg.peliculas[i].butacas[j].asiento}, ` : document.getElementById(`butacasPosition${(i + 1)}`).innerText += ` ${userNoReg.peliculas[i].butacas[j].asiento}`
        };
    }
}



if (usuario0 != null) {
    document.getElementById('borrar1').addEventListener("click", () => {
        
            document.getElementById('entradas').removeChild(document.getElementById('entrada1'))
            delete usuario0.peliculas[2]

        

    })
} else if (usuario1 != null) {
    document.getElementById('borrar1').addEventListener("click", () => {
        
            document.getElementById('entradas').removeChild(document.getElementById('entrada1'))
            delete usuario1.peliculas[2]

        

    })
} else if (usuario3 != null) {
    document.getElementById('borrar1').addEventListener("click", () => {
    
            document.getElementById('entradas').removeChild(document.getElementById('entrada1'))
            delete usuario3.peliculas[0]

        

    })
} else {
    document.getElementById('borrar1').addEventListener("click", () => {
      
            document.getElementById('entradas').removeChild(document.getElementById('entrada1'))
            delete userNoReg.peliculas[0]
            console.log(userNoReg)
        

    })
}


if (usuario0 != null) {
    document.getElementById('borrar2').addEventListener("click", () => {
      
            document.getElementById('entradas').removeChild(document.getElementById('entrada2'))
            delete usuario0.peliculas[3]

        

    })
} else if (usuario1 != null) {
    document.getElementById('borrar2').addEventListener("click", () => {
        
            document.getElementById('entradas').removeChild(document.getElementById('entrada2'))
            delete usuario1.peliculas[3]

        

    })
} else if (usuario3 != null) {
    document.getElementById('borrar2').addEventListener("click", () => {
        
            document.getElementById('entradas').removeChild(document.getElementById('entrada2'))
            delete usuario3.peliculas[1]

        

    })
} else {
    document.getElementById('borrar2').addEventListener("click", () => {
       
            document.getElementById('entradas').removeChild(document.getElementById('entrada2'))
            delete userNoReg.peliculas[1]
            
        

    })
}


if (usuario0 != null) {
    document.getElementById('borrar3').addEventListener("click", () => {
       
            document.getElementById('entradas').removeChild(document.getElementById('entrada3'))
            delete usuario0.peliculas[4]

        

    })
} else if (usuario1 != null) {
    document.getElementById('borrar3').addEventListener("click", () => {
        
            document.getElementById('entradas').removeChild(document.getElementById('entrada3'))
            delete usuario1.peliculas[4]

        

    })
} else if (usuario3 != null) {
    document.getElementById('borrar3').addEventListener("click", () => {
       
            document.getElementById('entradas').removeChild(document.getElementById('entrada3'))
            delete usuario3.peliculas[2]

        

    })
} else {
    document.getElementById('borrar3').addEventListener("click", () => {
        
     
            document.getElementById('entradas').removeChild(document.getElementById('entrada3'))
            delete userNoReg.peliculas[2]
            
        

    })
}



if (document.getElementById('nombreP1').innerText == '') {
    document.getElementById('entrada1').style.display = 'none';
}
if (document.getElementById('nombreP2').innerText == '') {
    document.getElementById('entrada2').style.display = 'none';
}
if (document.getElementById('nombreP3').innerText == '') {
    document.getElementById('entrada3').style.display = 'none';
}





document.getElementById('btnCompra').addEventListener('click', ()=> {
    let test = document.getElementById('carrito');
    if (test.style.display == 'inline') {
        test.style.display = 'block';
    } else {
        test.style.display = 'none'
    };


    let test1 = document.getElementById('carritoFin');
    if (test1.style.display == 'block') {
        test1.style.display = 'none';
    } else {
        test1.style.display = 'block'
    }
})