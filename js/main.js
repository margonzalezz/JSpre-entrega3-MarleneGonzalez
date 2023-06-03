// FUNCION PARA ELEGIR EL DESTINO Y SI ES IDA SOLO O IDA Y VUELTA
  let nombre = prompt("Por favor, ingrese su nombre");
  let selectIdaYvuelta;

  //NOMBRE DEL USUARIO QUE REALIZA LA RESERVA
          // FUNCIÓN PARA CUANDO EL USUARIO SÓLO QUIERE VIAJAR DE IDA
          let fechaIda;
          let fechaIngrIda;
          let fechaActual;

          function soloIda() {
            fechaIda = prompt("Ingrese la fecha de partida con el formato (dd/mm/aaaa): ");
            fechaIngrIda = new Date(fechaIda);
            fechaActual = new Date();
            while (fechaIngrIda < fechaActual) {
              alert("Por favor, ingrese una fecha válida");
            }
          }
          // FUNCIÓN PARA CUANDO EL USUARIO QUIERE REGRESAR
          let fechaRegreso;
          let fechaIngRegreso;

          function regreso() {
            fechaRegreso = prompt("Ingrese la fecha de regreso con el formato (dd/mm/aaaa): ");
            fechaIngRegreso = new Date(fechaRegreso);
            fechaActual = new Date();
              while (fechaIngRegreso < fechaActual) {
                alert("Por favor, ingrese una fecha válida");
              }
          }

  // FUNCION PARA PREGUNTARLE AL USUARIO EL TIPO DE PASAJE QUE DESEA SELECCIONAR
  function select() {
    let selectIda = confirm("Hola, " + nombre + " ¿Deseas reservar un asiento sólo de ida?" + "\nSi es así, presiona Aceptar para continuar")
      if (selectIda == true) {
        alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda");
        soloIda();
        resultado = { tipo: "Ida" };
      } else {
          selectIdaYvuelta = confirm("¿Deseas reservar un asiento de ida y vuelta?" + "\nSi es así, presiona Aceptar para continuar")
          if (selectIdaYvuelta == true) {
            alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda");
            soloIda();
            regreso();
            resultado = { tipo: "IdaYVuelta" };
          } else{
            alert("No dudes en regresar cuando decidas tu viaje :)")
            return;
          }
      }

          return resultado.tipo;
  }

  const opcionSeleccionada = select();  //ESTAS 2 LÍNEAS DE CÓDIGO SON LAS QUE HACEN QUE ME DEVUELVA ALGÚN TIPO DE VALOR
  alert(opcionSeleccionada); 

  //FUNCIÓN PARA QUE EL USUARIO ELIJA ENTRE ALGUNOS DE LOS SIGUIENTES ORIGENES PREDETERMINADOS
  function selectOrigen(origenes) {
    for (let i = 0; i < origenes.length; i++) {
      console.log(origenes[i].numero + ". " + origenes[i].lugar);
    }
  }
  selectOrigen(lugares);
  // SELECCIONAR EL ORIGEN
  let origen = parseInt(prompt("Por favor, ingrese el número asignado a su origen"));
    if (!isNaN(origen)) {
      let origenSeleccionado = lugares.find(lugar => lugar.numero === origen);
        if (origenSeleccionado) {
          alert("Usted quiere viajar desde: " + origenSeleccionado.lugar);      //origenSeleccionado.lugar ES LO QUE VOY A USAR PARA CONSTRUIR EL PASAJE
        } else {
          alert("El origen seleccionado no es válido");
        }
    } else {
      console.log("El valor ingresado no es válido.");
    }
  // SELECCION DE UN DESTINO
  let destino = parseInt(prompt("Por favor, ingrese el número asignado al destino al que desea viajar"));
    if (!isNaN(destino)) {
      let destinoSeleccionado = lugares.find(lugar => lugar.numero === destino);
        if (destinoSeleccionado) {
          alert("Usted quiere viajar a: " + destinoSeleccionado.lugar);     // destinoSeleccionado.lugar ES LO QUE VOY A USAR PARA CONSTRUIR EL PASAJE     
        } else {
          alert("El destino seleccionado no está disponible.");
        }
    } else {
      console.log("El valor ingresado no es válido.");
    }
  // CANTIDAD DE PASAJEROS A VIAJAR
      let cantPasajeros = isNaN(prompt("Por favor, indiquenos la cantidad de pasajeros a viajar"));     //LA CANTIDAD DE PASAJEROS SELECCIONADA LA TENGO QUE MULTIPLICAR POR EL IMPORTE MÁS ADELANTE

  // FUNCIÓN PARA ENCONTRAR UNA AEROLÍNEA QUE COINCIDA CON EL NRO INDICADO EN EL DESTINO
    function encontrarAerolinea(destino) { // recibimos el objeto destino
      const numeroLugar = destino.numero; // accedemos al número
      
        const coincidencia = aerolineas.filter(aerolinea => {
          return aerolinea.habilitado.includes(numeroLugar);
        });
      return coincidencia;
    }


  //FUNCIÓN PARA CALCULAR UN IMPUESTO PAÍS 
  // const impuesto = ((aerolineas.precio * 37) / 100)
  // function impuestoPaís() {
  //   if (origenSeleccionado == 1 || origenSeleccionado == 7 || origenSeleccionado == 8) {
  //     //PRECIO SUBTOTAL DEL PASAJE + impuesto = TOTAL DEL PASAJE
  //   }
  // }