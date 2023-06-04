// FUNCION PARA ELEGIR EL DESTINO Y SI ES IDA SOLO O IDA Y VUELTA
  let nombre = prompt("Por favor, ingrese su nombre");
  let selectIdaYvuelta;

    // FUNCIÓN PARA CUANDO EL USUARIO SÓLO QUIERE VIAJAR DE IDA
    let fechaIda;
    let fechaIngrIda;
    let fechaActual;
      function soloIda() {
        fechaIda = prompt("📅 Ingrese la fecha de partida con el formato (dd/mm/aaaa): ");
        fechaIngrIda = new Date(fechaIda);
        fechaActual = new Date();
          while (fechaIngrIda < fechaActual) {
            alert("Por favor, ingrese una fecha válida");}
          }
    // FUNCIÓN PARA CUANDO EL USUARIO QUIERE REGRESAR
    let fechaRegreso;
    let fechaIngRegreso;
    function regreso() {
      fechaRegreso = prompt("📅 Ingrese la fecha de regreso con el formato (dd/mm/aaaa): ");
      fechaIngRegreso = new Date(fechaRegreso);
      fechaActual = new Date();
        while (fechaIngRegreso < fechaActual || fechaIngRegreso < fechaIngrIda) {
          alert("Por favor, ingrese una fecha válida");}
        }

  // FUNCION PARA PREGUNTARLE AL USUARIO EL TIPO DE PASAJE QUE DESEA SELECCIONAR
  function select() {
    let selectIda = confirm("Hola, " + nombre + " ¿Deseas reservar un asiento sólo de ida? ⬆" + "\nSi es así, presiona Aceptar para continuar")
      if (selectIda == true) {
        alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda ✈");
          soloIda();
          resultado = { tipo:"Ida"};
      } else {
          selectIdaYvuelta = confirm(nombre + "¿Deseas reservar un asiento de ida y vuelta? ↕" + "\nSi es así, presiona Aceptar para continuar")
          if (selectIdaYvuelta == true) {
            alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda ✈");
              soloIda();
              regreso();
              resultado = { tipo:"IdaYVuelta"};
          } else{
            alert("No dudes en regresar cuando decidas tu viaje :)")
            return;
          }
      }
          return resultado.tipo;
        }
  const opcionSeleccionada = select();  //Me devuelve lo que eligió el usuario ida o ida-y-vuelta alert(opcionSeleccionada)

      //FUNCIÓN PARA QUE EL USUARIO ELIJA ENTRE ALGUNOS DE LOS SIGUIENTES ORIGENES PREDETERMINADOS
      function selectOrigen(origenes) {
        for (let i = 0; i < origenes.length; i++) {
          console.log(origenes[i].numero + ". " + origenes[i].lugar);  //ITERA EL ARRAY Y VA MOSTRANDO CADA RESULTADO CON SU NRO CORRESPONDIENTE
        }
      }
      selectOrigen(lugares);
  // FUNCIÓN PARA QUE EL USUARIO ELIJA EL ORIGEN
    function eleccionOrigen() {
        let origen = parseInt(prompt("Por favor, ingrese un número del 1 al 8 asignado a su lugar de partida: "));
          if (!isNaN(origen)) {
            let origenSeleccionado = lugares.find(lugar => lugar.numero === origen);
              if (origenSeleccionado) {
                alert("Usted quiere viajar desde: " + origenSeleccionado.lugar);  
                valorOrigen = { eleccion: origenSeleccionado.lugar};
              } else {
                alert("El origen seleccionado no es válido");
              }
          } else {
            console.log("El valor ingresado no es válido.");
          }
          return valorOrigen.eleccion;
    }
    const origenSelected = eleccionOrigen(); //ME DEVUELVE QUE ORIGEN ELIGIÓ EL USUARIO

  // FUNCIÓN PARA QUE EL USUARIO ELIJA EL DESTINO
  let destinoSeleccionado;
  let destino;
  let valorDestino;
    destino = parseInt(prompt("Por favor, ingrese un número del 1 al 8 asignado al destino al que desea viajar: "));
    if (!isNaN(destino)) {
        let destinoSeleccionado = lugares.find(lugar => lugar.numero === destino);
          if (destinoSeleccionado) {
            alert("Usted quiere viajar a: " + destinoSeleccionado.lugar); 
            valorDestino = destinoSeleccionado.lugar;
          } else {
            alert("El destino seleccionado no está disponible.");
          }
      } else {
        console.log("El valor ingresado no es válido.");
      }
  const destinoSelected = valorDestino;

  // FUNCIÓN PARA ENCONTRAR UNA AEROLÍNEA QUE COINCIDA CON EL NRO INDICADO EN EL DESTINO
    let nameAir;
    function encontrarAerolinea(destino) { // recibimos el objeto destino
     let numeroLugar = destino; // accedemos al número
        const coincidencia = aerolineas.filter(aerolinea =>aerolinea.habilitado.includes(numeroLugar));
        if(coincidencia == true) {
          nameAir = (coincidencia.aerolinea.precio);
        } 
          return coincidencia;
    }
    const airEncontrada = encontrarAerolinea(destino);