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
//------------EVENTOS---------------------
const botonIda = document.getElementById('botonIda');
  botonIda.addEventListener('click', (e) => {inputRegreso.disabled = true});
const botonIdaVuelta = document.getElementById('botonIdaVuelta');
  botonIdaVuelta.addEventListener('click', (e) => {inputRegreso.disabled = false});
const form = document.getElementById("containerViaje");
let idPasajes = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const botonIda = document.getElementById("botonIda");
    const botonIdaVuelta = document.getElementById("botonIdaVuelta");
    const seleccionOrigen = document.getElementById("seleccionOrigen").value;
    const seleccionDestino = document.getElementById("seleccionDestino").value;
    const inputPasajeros = document.getElementById("inputPasajeros").value;
    const inputPartida = document.getElementById("inputPartida").value;
    const inputRegreso = document.getElementById("inputRegreso").value;

    if (seleccionOrigen === "" || seleccionDestino === "" || inputPasajeros === "" || inputPartida === "") {
      alert("Por favor, complete todos los campos");
      return;
    }
    const aerolineasEncontradas = aerolineas.filter(aerolinea => aerolinea.habilitado.includes(Number(seleccionDestino)));
      const reservas = aerolineasEncontradas.map(aerolinea => {
      const fechaPartida = new Date(inputPartida);
      const fechaRegreso = new Date(inputRegreso);
      const tiempoViaje = Math.ceil((fechaRegreso - fechaPartida) / (1000 * 60 * 60 * 24));
        const lugarOrigen = lugares.find(lugar => lugar.numero === Number(seleccionOrigen));
        const lugarDestino = lugares.find(lugar => lugar.numero === Number(seleccionDestino));
        const precio = botonIdaVuelta.checked ? aerolinea.precio * 2 : aerolinea.precio;
        const precioFinal = [1, 7, 8].includes(Number(seleccionOrigen)) ? (precio * 1.4) : precio;
        const precioFinalPasajeros = inputPasajeros > 1 ? (precioFinal * inputPasajeros) : precioFinal;

        return {
            pasaje: botonIda.checked ? botonIda.value : botonIdaVuelta.value,
            id: idPasajes++,
            origen: lugarOrigen.lugar,
            destino: lugarDestino.lugar,
            pasajeros: inputPasajeros,
            partida: inputPartida,
            regreso: inputRegreso,
            aerolinea: aerolinea.aerolinea,
            precio: precioFinalPasajeros,
            diasViaje: tiempoViaje,
          };
    });
    localStorage.setItem("misReservas", JSON.stringify(reservas))
    location.href = "../pages/pasajes.html"
});