// FUNCION PARA ELEGIR EL DESTINO Y SI ES IDA SOLO O IDA Y VUELTA
  let nombre = prompt("Por favor, ingrese su nombre");
  let selectIdaYvuelta;

  // FUNCIÓN PARA CUANDO EL USUARIO ELIGE SÓLO LA OPCIÓN IDA
  let fechaIda;
  let fechaIngrIda;
  let fechaActual;
  function soloIda() {
    fechaIda = prompt("Ingrese la fecha de partida con el formato (dd/mm/aaaa): ");
    fechaIngrIda = new Date(fechaIda);
    fechaActual = new Date();
        while (fechaIngrIda < fechaActual) {
          alert("Por favor, ingrese una fecha válida.");
          fechaIda;
        }
  }

  function select() {
    let selectIda = confirm("Hola, " + nombre + " ¿Deseas reservar un asiento sólo de ida?" + "\nSi es así, presiona Aceptar para continuar")
      if (selectIda == true) {
        alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda");
        soloIda();
      } else {
          selectIdaYvuelta = confirm("¿Deseas reservar un asiento de ida y vuelta?")
          if (selectIdaYvuelta == true) {
            alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda");
          } else{
            alert("No dudes en regresar cuando decidas tu viaje :)")
          }
      }
  }
select()


  // MOSTRARLE AL USUARIO LOS DESTINOS QUE TIENE DISPONIBLES
  function lugaresDisponibles(destinos) {
    for (let i = 0; i < destinos.length; i++) {
      console.log(destinos[i].numero + ". " + destinos[i].lugar);
    }
  }
  // LLAMO A LA FUNCIÓN PARA MOSTRAR LOS LUGARES
  lugaresDisponibles(lugares);

  
  // SELECCION DE UN DESTINO
  const destino = parseInt(prompt("Por favor, ingrese el número asignado al destino al que desea viajar"));
    if (!isNaN(destino)) {
      const destinoSeleccionado = lugares.find(lugar => lugar.numero === destino);
        if (destinoSeleccionado) {
          alert("Usted ha seleccionado: " + destinoSeleccionado.lugar);
          // Puedes realizar otras acciones relacionadas con el destino seleccionado
        } else {
          alert("El destino seleccionado no está disponible.");
        }
    } else {
      console.log("El valor ingresado no es válido.");
    }



  // FUNCION PARA LA CANTIDAD DE PASAJEROS

    // VARIABLE GLOBAL
      const cantPasajeros = isNaN(prompt("Por favor, indiquenos la cantidad de pasajeros a viajar"))
      alert(cantPasajeros)
    // function pasajeros() {

      
    // }