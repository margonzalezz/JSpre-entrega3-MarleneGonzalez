  //CONSTRUCTOR DEL PASAJE
  class Pasaje {
    static contadorId = 1;
    constructor(tipoPasaje, origen, destino, aerolinea, precio) {
      this.Id = Pasaje.contadorId++;
      this.tipo = tipoPasaje;
      this.origen = origen;
      this.destino = destino;
      this.aerolinea = aerolinea;
      this.precio = precio;
    }
  }
  const contenedorPasajes = [];   //ARRAY DONDE SE ALMACENAN LOS PASAJES
  let precioDoble;
  let aerolineaSeleccionada;

airEncontrada.forEach((aerolinea) => {

      let precioPasaje = aerolinea.precio;

      if (origenSelected.includes("Argentina")) {
        precioPasaje += precioPasaje * 0.40; 
      }
      const pasaje = new Pasaje(opcionSeleccionada, origenSelected, destinoSelected, aerolinea.aerolinea, precioPasaje);
      contenedorPasajes.push(pasaje);

          if (opcionSeleccionada === "IdaYVuelta") {
            aerolineaSeleccionada = aerolinea;
            let precioDoble = aerolineaSeleccionada.precio * 2;

            if (origenSelected.includes("Argentina")) {
              precioDoble += precioDoble * 0.40; // Precio incrementado si es ida y vuelta y viaja desde Argentina
            }

            const pasajeIncrementado = new Pasaje(opcionSeleccionada, origenSelected, destinoSelected, aerolineaSeleccionada.aerolinea, precioDoble);
            contenedorPasajes.push(pasajeIncrementado);
            console.log(pasajeIncrementado);
          }

});
      if (opcionSeleccionada !== "IdaYVuelta") {
        contenedorPasajes.forEach((pasaje) => {
          console.log(pasaje);
        });
      }
//ELECCIÓN DEL PASAJE A RESERVAR
let numeroPasajeElegido = parseInt(prompt("Ingrese el Id numérico asignado al boleto que desea reservar:" + "\n" + "(1 - 2 - 3)"));

  const pasajeElegido = contenedorPasajes.find((pasaje) => pasaje.Id === numeroPasajeElegido);
    if (pasajeElegido) {
      console.log("✅Felicitaciones, tu pasaje fue reservado con éxito.");
    } else {
      console.log("❌Lo sentimos, tu boleto no fue reservado con éxito." + "\n" +
      "Por favor, repita el proceso de reserva nuevamente.");
    }