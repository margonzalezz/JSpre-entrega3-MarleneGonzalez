const reservas = JSON.parse(localStorage.getItem("misReservas"));
let diasVacios = "";
// Verificar si hay reservas almacenadas
if (reservas && reservas.length > 0) {
  const contenedorVuelos = document.getElementById("containerPasajes");
  reservas.forEach(reserva => {
    const cardsPasajes = document.createElement("div");
    // Generar el nombre de la aerolínea y la ruta de la imagen
    const nombreAerolinea = reserva.aerolinea.toLowerCase().replace(/\s/g, "-");
    const rutaImagen = `../img/icon/${nombreAerolinea}.png`;
    // Generar el contenido dinámico para cada reserva
    cardsPasajes.innerHTML = `
      <div id="grid-pasajes">
        <div id="logoAerolinea" class="logo">
          <img src="${rutaImagen}" alt="${reserva.aerolinea}">
          <span class="nombreLogoAerolinea">${reserva.aerolinea}</span>
        </div>
        <div id="seccion-ida" class="ida">
          <span class="titulo-ida">IDA</span>
          <p class="fecha-ida">${reserva.partida}</p>
        </div>
        ${reserva.pasaje === "solo_ida" ? "" :
        `<div id="seccion-idaYvuelta" class="vuelta">
            <span class="titulo-vuelta">REGRESO</span>
            <p class="fecha-vuelta">${reserva.regreso}</p>
        </div>`}
        ${reserva.pasaje === "solo_ida" ? '' :
        `<div id="container-dias" class="dias"><p>${reserva.diasViaje + " días"}</p></div>`}
        <div id="container-precio" class="precio">
          <div class="precio-pasaje">
            <span class="titulo">PRECIO</span>
            <p>${"$" + reserva.precio}</p>      
          </div>
        </div>
        <div class="seleccionar-pasaje" id="${reserva.id}"><button>Seleccionar</button></div>
      </div>
    `;
    contenedorVuelos.appendChild(cardsPasajes);
  });
}



    
    
    
    
    













