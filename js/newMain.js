// ARRAY DE OBJETOS CON LOS LUGARES
const lugares = [
                {numero: 1, lugar: "Buenos Aires, Argentina" }, 
                {numero: 2, lugar: "New york, Estados Unidos" } ,
                {numero: 3, lugar: "Venecia, Italia"} , 
                {numero: 4, lugar: "Ibiza, España"} , 
                {numero: 5, lugar: "Paris, Francia"} , 
                {numero: 6, lugar: "Mykonos, Grecia"} , 
                {numero: 7, lugar: "Bariloche, Argentina"} , 
                {numero: 8, lugar: "Cataratas de Iguazú, Argentina"}];

// FUNCION PARA ELEGIR EL DESTINO Y SI ES IDA SOLO O IDA Y VUELTA
  function select() {
    const selectIda = confirm("¿Deseas reservar un asiento sólo de ida? Si es así, presiona Aceptar para continuar")
      if (selectIda == true) {
        alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda")
      } else {
        const selectIdaYvuelta = confirm("¿Deseas reservar un asiento de ida y vuelta?")
          if (selectIdaYvuelta == true) {
            alert("A continuación, selecciona las opciones que más se adapten a tu búsqueda")
          } else{
            alert("No dudes en regresar cuando decidas tu viaje :)")
          }
      }
  }

  select()


























// function seleccionOrigen() {
//     const inputOrigen = prompt("Ingrese un Origen: ");

//     while (inputOrigen == '' || Number(inputOrigen)) {
//         inputOrigen = prompt("Ingrese un origen");
//         alert("ERROR. Por favor, ingrese su lugar de origen nuevamente.");
//   }
// }

// const lugares = [{numero: 1, lugar: "Buenos Aires, Argentina" }, 
//                   {numero: 2, lugar: "New york, Estados Unidos" } , 
//                   {numero: 3, lugar: "Venecia, Italia"} , 
//                   {numero: 4, lugar: "Ibiza, España"} , 
//                   {numero: 5, lugar: "Paris, Francia"} , 
//                   {numero: 6, lugar: "Mykonos, Grecia"} , 
//                   {numero: 7, lugar: "Bariloche, Argentina"} , 
//                   {numero: 8, lugar: "Cataratas de Iguazú, Argentina"}];



/*
  function mostrarDestino (checkDestino) {
    switch (parseInt(checkDestino)) {
        case 1:
          alert("Usted quiere viajar a New York, Estados Unidos");
        return destino1 ;
        case 2:
          alert("Usted quiere viajar a Roma, Italia");
        return destino2 ;
        case 3:
          alert("Usted quiere viajar a Ibiza, España");
        return destino3 ;
        case 4:
          alert("Usted quiere viajar a Paris, Francia");
        return destino4;
        case 5:
          alert("Usted quiere viajar a Mykonos, Grecia");
          return destino5;
        case 6:
          alert("Usted quiere viajar a Barloche, Argentina");
          return destino6;
        case 7:
          alert("Usted quiere viajar a Cataratas de Iguazú Argentina");
          return destino7;
      default:
        alert("Por favor, intente nuevamente");
        break;
    }
  }

    let checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");
      while (checkDestino === '' || isNaN(Number(checkDestino)) || Number(checkDestino) > 7) {
        checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");
        alert("Ingrese su destino nuevamente :) ");
      }

function verificarDestino() {
      if (checkDestino) {
            mostrarDestino (checkDestino);
      } else {
        alert("Ingrese su destino nuevamente :) ");
        }
  }
let msjDestino = mostrarDestino(checkDestino);
*/
