


































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































