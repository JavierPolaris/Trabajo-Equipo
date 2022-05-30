let userNoReg = {
  nombre: "",
  edad: "",
  userName: "",
  password: "",
  emails: "",
  foto: "",

  peliculas: [
    {
      titulo: document.getElementById("tituloP").innerText,
      fecha: "a",
      horario: "Mañana",
      nEntradas: "2",
      butacas: [{}],
      sala: "1",
    },
  ],
};

document.getElementById("nEntradas").addEventListener("click", () => {
  let entradas = document.getElementById("nEntradas").value;
  userNoReg.peliculas[0].nEntradas = entradas;
    document.getElementById("precioTotal").innerHTML = `${5 * entradas}€`;
  console.log(userNoReg);
});

document.getElementById("nEntradas").addEventListener("click", () => {
  let precios = document.getElementById("nEntradas").value;
  localStorage.setItem("precioEntradas", precios);
});
document.getElementById("botonH1").addEventListener("click", () => {
  let horas1 = document.getElementById("botonH1").innerHTML;
  userNoReg.peliculas[0].horario = horas1;
  console.log(userNoReg);
});
document.getElementById("botonH2").addEventListener("click", () => {
  let horas2 = document.getElementById("botonH2").innerHTML;
  userNoReg.peliculas[0].horario = horas2;
  console.log(userNoReg);
});
document.getElementById("botonH3").addEventListener("click", () => {
  let horas3 = document.getElementById("botonH3").innerHTML;
  userNoReg.peliculas[0].horario = horas3;
  console.log(userNoReg);
});

document.getElementById("botonCarrito").addEventListener("click", () => {
  // console.log(document.getElementById("calendarioCarrito").value)
  let fechas = document.getElementById("calendarioCarrito").value;

  let nuevaF = fechas.split("-");
  for (let i = 0; i < nuevaF.length / 2; i++) {
    let aux = nuevaF[i];
    nuevaF[i] = nuevaF[nuevaF.length - (1 + i)];
    nuevaF[nuevaF.length - (1 + i)] = aux;
  }
  fechaOrdenada = nuevaF.join("-");
  userNoReg.peliculas[0].fecha = fechaOrdenada;

  console.log(userNoReg);
});



localStorage.setItem("titulo", document.getElementById("tituloP").innerText);

localStorage.setItem("foto", document.getElementById("cartel1").src);

console.log(userNoReg.peliculas[0].titulo);

document.getElementById("botonH1").addEventListener("click", () => {
  if (botonH2.classList.contains("active")) {
    botonH2.classList.remove("active");
  }
  if (botonH3.classList.contains("active")) {
    botonH3.classList.remove("active");
  }

  if (!botonH1.classList.contains("active")) {
    botonH1.classList.toggle("active");
  }
});
document.getElementById("botonH2").addEventListener("click", () => {
  if (botonH1.classList.contains("active")) {
    botonH1.classList.remove("active");
  }
  if (botonH3.classList.contains("active")) {
    botonH3.classList.remove("active");
  }
  if (!botonH2.classList.contains("active")) {
    botonH2.classList.toggle("active");
  }
});
document.getElementById("botonH3").addEventListener("click", () => {
  if (botonH1.classList.contains("active")) {
    botonH1.classList.remove("active");
  }
  if (botonH2.classList.contains("active")) {
    botonH2.classList.remove("active");
  }

  if (!botonH3.classList.contains("active")) {
    botonH3.classList.toggle("active");
  }
});
