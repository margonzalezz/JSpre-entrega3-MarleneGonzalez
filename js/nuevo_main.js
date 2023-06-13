//  -------------ARRAYS--------------
const lugares = [
    {numero: 1, lugar: "Buenos Aires, Argentina" },         //Iberia - AmAirlines - Aerolineas Argentinas 
    {numero: 2, lugar: "New york, Estados Unidos" } ,       //Iberia - AmAirlines - Aerolíneas Argentinas
    {numero: 3, lugar: "Venecia, Italia"} ,                 //Iberia - AmAirlines - Aerolíneas Argentinas 
    {numero: 4, lugar: "Ibiza, España"} ,                   //Iberia - Aerolíneas Argentinas 
    {numero: 5, lugar: "Paris, Francia"} ,                  //Iberia - AmAirlines
    {numero: 6, lugar: "Mykonos, Grecia"} ,                 //Iberia - AmAirlines 
    {numero: 7, lugar: "Bariloche, Argentina"} ,            //Iberia - AmAirlines - Aerolíneas Argentinas
    {numero: 8, lugar: "Cataratas de Iguazú, Argentina"}];  //Iberia - AmAirlines - Aerolíneas Argentinas

    const aerolineas = [
        {aerolinea: "Aerolíneas Argentinas", precio: 250000, habilitado:[1, 2, 3, 4, 7, 8] } ,
        {aerolinea: "Iberia", precio: 280000, habilitado: [1, 2, 3, 4, 5, 6, 7, 8] } ,
        {aerolinea: "American Airlines", precio: 305000, habilitado: [1, 2, 3, 5, 6, 7, 8] }];

// ENCONTRAR AEROLÍNEA
/*
let nombreAerolinea;
function encontrarAerolinea(seleccionDestino) { // recibimos el objeto destino
 let numeroLugar = seleccionDestino.value; // accedemos al número
    const coincidencia = aerolineas.filter(aerolinea => aerolinea.habilitado.includes(numeroLugar));
    //coincidencia == true ? nombreAerolinea = (coincidencia.aerolinea.precio) : alert("No se encontró una aerolínea para llevarte a tu destino seleccionado")
      //return coincidencia;
    if(coincidencia == true) {
      nombreAerolinea = (coincidencia.aerolinea.precio);
    }
      return coincidencia;
}
const airEncontrada = encontrarAerolinea(seleccionDestino.value); 
*/
// ENCONTRAR AEROLÍNEA
let aerolineaEncontrada; // Variable para almacenar la aerolínea encontrada

function encontrarAerolinea(seleccionDestino) {
    let numeroLugar = seleccionDestino.value;
    const coincidencia = aerolineas.filter(aerolinea => aerolinea.habilitado.includes(numeroLugar));
    
    if (coincidencia.length > 0) {
        aerolineaEncontrada = coincidencia[0].aerolinea; // Almacenar la aerolínea encontrada
    } else {
        aerolineaEncontrada = ""; // Reiniciar la variable si no se encuentra aerolínea
    }
    
    return coincidencia;
}

//------------EVENTOS---------------------
document.getElementById('botonIda').addEventListener('click', (e) => {inputRegreso.disabled = true});
document.getElementById('botonIdaVuelta').addEventListener('click', (e) => {inputRegreso.disabled = false});

const form = document.getElementById("containerViaje");
let reserva;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const botonIda = document.getElementById("botonIda");
    const botonIdaVuelta = document.getElementById("botonIdaVuelta");
    const seleccionOrigen = document.getElementById("seleccionOrigen").value;
    const seleccionDestino = document.getElementById("seleccionDestino").value;
    const inputPasajeros = document.getElementById("inputPasajeros").value;
    const inputPartida = document.getElementById("inputPartida").value;
    const inputRegreso = document.getElementById("inputRegreso").value;

    if (seleccionOrigen == "" || seleccionDestino == "" || inputPasajeros == "" || inputPartida == "") {
        alert("Por favor, complete todos los campos");
        return;
    }
    encontrarAerolinea(seleccionDestino); // Llamar a encontrarAerolinea con el valor seleccionado

    reserva = {
        pasaje: botonIda.checked ? botonIda.value : botonIdaVuelta.value,
        origen: seleccionOrigen,
        destino: seleccionDestino,
        pasajeros: inputPasajeros,
        partida: inputPartida,
        regreso: inputRegreso.value,
        aerolinea: aerolineaEncontrada
    }
    console.log(reserva);
});


