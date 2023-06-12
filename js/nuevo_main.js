const form = document.getElementById("containerViaje");
let reserva;

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const botonIda = document.getElementById("botonIda");
        const botonIdaVuelta = document.getElementById("botonIdaVuelta");
        const seleccionOrigen = document.getElementById("seleccionOrigen").value;
        const seleccionDestino = document.getElementById("seleccionDestino").value;
        const inputPasajeros = document.getElementById("inputPasajeros").value;
        const inputPartida = document.getElementById("inputPartida").value;
        const inputRegreso = document.getElementById("inputRegreso").value;

        if (seleccionOrigen == "" || seleccionDestino == "" || inputPasajeros == "" || inputPartida == "" || inputRegreso == "") {
            alert("Por favor, complete todos los campos")
        }
        if (botonIda.checked) {
             reserva = {
                pasaje: botonIda.value,
                origen: seleccionOrigen,
                destino: seleccionDestino,
                pasajeros: inputPasajeros,
                partida: inputPartida
            }
            console.log(reserva);
        } else if (botonIdaVuelta.checked) {
             reserva = {
                pasaje: botonIdaVuelta.value,
                origen: seleccionOrigen, 
                destino: seleccionDestino,
                pasajeros: inputPasajeros,
                partida: inputPartida,
                regreso: inputRegreso
            }
        }
        console.log(reserva);
    })
/*
//EL TIPO DE PASAJE NO REALIZA NINGUNA ACCIÓN MÁS QUE ALMACENAR EL 
//VALOR PARA CONSTRUIR EL PASAJE

// VALIDACION DE ORIGEN
function validacionOrigen() {
    selectedOrigin >= 1 ? true : alert("Por favor, seleccione un origen");
}
validacionOrigen();
//  VALIDACION DE DESTINO
function validacionDestino() {
    selectedDestiny >= 1 ? true : alert("Por favor, ingrese un destino");
}
validacionDestino();
//  VALIDACION DE CANTIDAD DE PASAJEROS
function validacionPasajeros() {
    cantPasajeros();
    valorPasajeros >= 1 ? true : alert("Por favor, ingrese una cantidad válida");
}
//  VALIDACION DE FECHAS DE PARTIDA Y DE REGRESO 
let fechaActual = new Date();

function selectFechaPartida() {
    obtenerFechaPartida();
    valorFechaPartida > fechaActual ? true : alert("Por favor, ingrese una fecha válida");
}

//  FECHA DE PARTIDA: 
function selectFechaRegreso () {
    obtenerFechaRegreso();
    valorFechaRegreso >= fechaActual && valorFechaRegreso > valorFechaPartida ? true : alert("Por favor, ingrese una fecha válida");
}
selectFechaPartida();
selectFechaRegreso();
*/






























