
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

    // ARRAY DE EJEMPLO DEL AFTER
    const prendas = [
    {imagen: '👚', codigo: 1, tipo: 'Remera rosa', precio: 2599},
    {imagen: '🩳', codigo: 2, tipo: 'Bermuda playera', precio: 3859},
    {imagen: '👕', codigo: 3, tipo: 'Remera casual', precio: 7851},
    {imagen: '👖', codigo: 4, tipo: 'Pantalón de jean', precio: 8599},]

    // ARRAY DE OBJETOS CON LAS AEROLÍNEAS DISPONIBLES
    const aerolíneas = [
        {aerolínea1: "Aerolíneas Argentinas", precio: 250000} ,
        {aerolínea2: "Iberia", precio: 280000} ,
        {aerolínea3: "American Airlines", precio: 305000}]

    const opcionesPasajes = [
        {nroPasaje: 1, origen: origenSeleccionado.lugar, destino: destinoSeleccionado.lugar}
    ]

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





