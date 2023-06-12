// CONECCIÓN A LOS BOTONES PARA SELECCIONAR EL TIPO DE PASAJE A ELEGIR
const botonIda = document.getElementById("botonIda");
const botonIdaVuelta = document.getElementById("botonIdaVuelta");
let tipoPasaje = "";   // Variable para almacenar el resultado de los botones

function obtenerTipoPasaje() {      //función obtenerTipoPasaje para almacenar el valor que elija el usuario ida o ida y vuelta
  function botonTipoIda() {
    botonIda.addEventListener("click", (e) => {tipoPasaje = "solo_ida";mostrarResultado()});
  } 
  botonTipoIda();

  function botonTipoIyV() {
    botonIdaVuelta.addEventListener("click", (e) => {tipoPasaje = "ida_y_vuelta";mostrarResultado()});
  } 
  botonTipoIyV();

  function mostrarResultado() {
    const resultadoFinal = { tipoPasaje: tipoPasaje };
    alert("La opción seleccionada es: " + resultadoFinal.tipoPasaje);
  }
}
obtenerTipoPasaje();

// CONECCIÓN PARA SELECCIONAR EL ORIGEN Y DESTINO
const seleccionOrigen = document.getElementById("seleccionOrigen");
const seleccionDestino = document.getElementById("seleccionDestino");
let selectedOrigin = "";
let selectedDestiny = "";

// VALIDACION DE ORIGEN
function validacionOrigen() {
    if (selectedOrigin < 1) {
        alert("Por favor, seleccione un origen")
    } 
    //selectedOrigin >= 1 ? true : alert("Por favor, seleccione un origen");
}
//  ORIGEN
function changeOrigen() {
    seleccionOrigen.addEventListener("change", (e) => {
        selectedOrigin = e.target.value;
        alert("Opción seleccionada:" + selectedOrigin);
validacionOrigen();


    })
}
changeOrigen();

validacionOrigen();
//  DESTINO
function changeDestino() {
    seleccionDestino.addEventListener("change", (e) => {
        selectedDestiny = e.target.value;
        alert("El destino seleccionado es: " + selectedDestiny)
    })
}
changeDestino();

//CONECCIÓN PARA LA CANTIDAD DE PASAJEROS
const inputPasajeros = document.getElementById("inputPasajeros");
let valorPasajeros = "";

function cantPasajeros() {
    inputPasajeros.addEventListener("input", (e) => {
        valorPasajeros = e.target.value;
        alert("La cantidad de pasajeros seleccionada es: " + valorPasajeros)
    })
}
cantPasajeros();

//CONECCIÓN PARA LAS FECHAS DE PARTIDA Y DE REGRESO
const inputPartida = document.getElementById("inputPartida");
const inputRegreso = document.getElementById("inputRegreso");
let valorFechaPartida = "";
let valorFechaRegreso = "";

function obtenerFechaPartida() {
    inputPartida.addEventListener("input", (e) => {
        valorFechaPartida = e.target.value;
        alert("La fecha seleccionada es: " + valorFechaPartida);
    })
}
obtenerFechaPartida();      //LA FECHA SE ALMACENA COMO  aaaa/mm/dd = año/mes/día

function obtenerFechaRegreso() {
    inputRegreso.addEventListener("input", (e) => {
        valorFechaRegreso = e.target.value;
        alert("La fecha de regreso seleccionada es: " + valorFechaRegreso);
    }) 
}

obtenerFechaRegreso();








