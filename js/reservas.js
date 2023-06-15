// - Primero guardar en localStorage el array reservas.     LISTO
// - Crear un nuevo js linkeado en vuelos.html.             LISTO
// - Recibir la data guardada en Storage en el script js linkeado a vuelos.html.
// - Realizar el proceso de impresión/renderizado en pantalla.
    
//localStorage.setItem("misReservas", JSON.stringify(reservas))
    
    
    
    
    
    
    
    
    
    
    
    
    // reservas ES EL ARRAY QUE CONTIENE LOS PASAJES CREADOS. AL MOSTRARLOS ACÁ SE VE PERFECTO
    const contenedorVuelos = document.getElementById("containerPasajes");
    reservas.forEach(reserva => {
      console.log(reserva);
        const cardsPasajes = document.createElement("div");

        cardsPasajes.innerHTML = ` 
                                <div id="grid-pasajes">
                                    <div id="logoAerolinea" class="logo"><span>${reserva.aerolinea}</span></div>
                                    <div id="seccion-ida" class="ida">
                                        <span class="titulo-ida">IDA</span>
                                        <p class="fecha-ida">${inputPartida + reserva.lugarOrigen.lugar}</p>
                                    </div>
                                    <div id="seccion-idaYvuelta" class="vuelta">
                                        <span class="titulo-vuelta">REGRESO</span><p class="fecha-vuelta">${reserva.lugarDestino.lugar + inputRegreso}</p>
                                    </div>
                                    <div id="container-dias" class="dias"><p>${reserva.tiempoViaje}</p></div>
                                    <div id="container-precio" class="precio">
                                        <div class="precio-pasaje">
                                        <span class="titulo">PRECIO</span><p>${reserva.precioFinalPasajeros}</p>      
                                        </div>
                                    </div>
                                    <div class="seleccionar-pasaje" id="${idPasajes++}"><button>Seleccionar</button></div>
                                </div>
                                `
        contenedorVuelos.appendChild(cardsPasajes)
    });
    
    
    
    
    
    













