  //CONSTRUCTOR DEL PASAJE
  class Pasaje {
    static contadorId = 1;
    constructor(tipoPasaje, origen, destino, aerolinea, precio) {
      this.id = Pasaje.contadorId++;
      this.tipoDePasaje = tipoPasaje;
      this.origen = origen;
      this.destino = destino;
      this.aerolinea = aerolinea;
      this.precio = precio;
    }
  }
  const contenedorPasajes = [];
  let precioDoble;
  let aerolineaSeleccionada;

airEncontrada.forEach((aerolinea) => {
  let precioPasaje = aerolinea.precio;

  if (origenSelected.includes("Argentina")) {
    precioPasaje += precioPasaje * 0.37; // Incremento del 37%
  }
  const pasaje = new Pasaje(opcionSeleccionada, origenSelected, destinoSelected, aerolinea.aerolinea, precioPasaje);
  contenedorPasajes.push(pasaje);

  if (opcionSeleccionada === "IdaYVuelta") {
    aerolineaSeleccionada = aerolinea;
    let precioDoble = aerolineaSeleccionada.precio * 2;

    if (origenSelected.includes("Argentina")) {
      precioDoble += precioDoble * 0.37; // Precio incrementado si es ida y vuelta y viaja desde Argentina
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
