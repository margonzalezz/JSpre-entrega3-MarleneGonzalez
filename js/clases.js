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
  const pasaje = new Pasaje(opcionSeleccionada, origenSelected, destinoSelected, aerolinea.aerolinea, aerolinea.precio);
  contenedorPasajes.push(pasaje);
      if (opcionSeleccionada === "IdaYVuelta") {
        aerolineaSeleccionada = aerolinea;
        const precioDoble = aerolineaSeleccionada.precio * 2;
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