
// ARRAY DE OBJETOS CON LOS DESTINOS
const lugares = [
    {numero: 1, lugar: "Buenos Aires, Argentina" },         //Iberia - AmAirlines - Aerolineas Argentinas 
    {numero: 2, lugar: "New york, Estados Unidos" } ,       //Iberia - AmAirlines - Aerolíneas Argentinas
    {numero: 3, lugar: "Venecia, Italia"} ,                 //Iberia - AmAirlines - Aerolíneas Argentinas 
    {numero: 4, lugar: "Ibiza, España"} ,                   //Iberia - Aerolíneas Argentinas 
    {numero: 5, lugar: "Paris, Francia"} ,                  //Iberia - AmAirlines
    {numero: 6, lugar: "Mykonos, Grecia"} ,                 //Iberia - AmAirlines 
    {numero: 7, lugar: "Bariloche, Argentina"} ,            //Iberia - AmAirlines - Aerolíneas Argentinas
    {numero: 8, lugar: "Cataratas de Iguazú, Argentina"}];  //Iberia - AmAirlines - Aerolíneas Argentinas

    // ARRAY DE OBJETOS CON LAS AEROLÍNEAS DISPONIBLES
    const aerolineas = [
        {aerolinea: "Aerolíneas Argentinas", precio: 250000, habilitado:[1, 2, 3, 4, 7, 8] } ,
        {aerolinea: "Iberia", precio: 280000, habilitado: [1, 2, 3, 4, 5, 6, 7, 8] } ,
        {aerolinea: "American Airlines", precio: 305000, habilitado: [1, 2, 3, 5, 6, 7, 8] }]

  /*
    function encontrarAerolinea(destino) {
      const numeroLugar = destino.numero; //HAGO ESTO PARA ACCEDER AL NRO QUE INGRESÓ
                          //SI ESTO NO FUNCA TENGO QUE CAMBIARLO POR destinoSeleccionado.numero
      const coincidencia = aerolineas.filter(aerolinea => {
        return aerolinea.habilitado.includes(numeroLugar);
      });
      
      return coincidencia;
    }
    
  */


  



    // const opcionesPasajes = [
    //     {nroPasaje: 1, origen: origenSeleccionado.lugar, destino: destinoSeleccionado.lugar, air: ,}
    // ]


    //EJECUTAR EL MÉTODO filter PARA QUE BUSQUE DENTRO DEL ARRAY SELECCIONADO Y ME DEVUELVA
    //LAS COINCIDENCIAS DE LAS AEROLÍNEAS Y LUEGO, USAR EL MISMO ARRAY PARA LOS PRECIOS

    //PARA EL PASAJE VOY A NECESITAR: origen - destino - aerolínea - precio



    /*
    const opcionesViaje = [
        { aerolinea: 'Aerolínea A', precio: 200 },
        { aerolinea: 'Aerolínea B', precio: 150 },
        { aerolinea: 'Aerolínea C', precio: 300 }
      ];
      
      // Acceder a las opciones de viaje
      for (let i = 0; i < opcionesViaje.length; i++) {
        console.log(opcionesViaje[i].aerolinea + ' - Precio: $' + opcionesViaje[i].precio);
      }
    */





