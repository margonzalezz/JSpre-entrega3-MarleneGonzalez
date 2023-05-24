// let origen = prompt("Ingrese un origen: ");

//   while (origen == '' || Number(origen)) {
//     origen = prompt("Ingrese un origen");
//     alert("ERROR. Por favor, ingrese su lugar de origen nuevamente.");
//   }

// const destino1 = "New york, Estados Unidos";
// const destino2 = "Roma, Italia";
// const destino3 = "Ibiza, España";
// const destino4 = "Paris, Francia";
// const destino5 = "Mykonos, Grecia";
// const destino6 = "Bariloche, Argentina";
// const destino7 = "Cataratas de Iguazú, Argentina"; 

// const nrosDestinos = "A continuación, escriba el número que corresponda a su destino deseado" + 
// "\n" + "1. " + destino1 + 
// "\n" + "2. " + destino2 + 
// "\n" + "3. " + destino3 +
// "\n" + "4. " + destino4 + 
// "\n" + "5. " + destino5 + 
// "\n" + "6. " + destino6 + 
// "\n" + "7. " + destino7;
// alert(nrosDestinos)

//   function mostrarDestino (checkDestino) {
//     switch (parseInt(checkDestino)) {
//         case 1:
//           alert("Usted quiere viajar a New York, Estados Unidos");
//         return destino1 ;
//         case 2:
//           alert("Usted quiere viajar a Roma, Italia");
//         return destino2 ;
//         case 3:
//           alert("Usted quiere viajar a Ibiza, España");
//         return destino3 ;
//         case 4:
//           alert("Usted quiere viajar a Paris, Francia");
//         return destino4;
//         case 5:
//           alert("Usted quiere viajar a Mykonos, Grecia");
//           return destino5;
//         case 6:
//           alert("Usted quiere viajar a Barloche, Argentina");
//           return destino6;
//         case 7:
//           alert("Usted quiere viajar a Cataratas de Iguazú, Argentina");
//           return destino7;
//       default:
//         alert("Por favor, intente nuevamente");
//         break;
//     }
//   }
//     let checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");
//       while (checkDestino === '' || isNaN(Number(checkDestino)) || Number(checkDestino) > 7) {
//         checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");
//         alert("Ingrese su destino nuevamente :) ");
//       }

// function verificarDestino() {
//       if (checkDestino) {
//             mostrarDestino (checkDestino);
//       } else {
//         alert("Ingrese su destino nuevamente :) ");
//         }
//   }
// let msjDestino = mostrarDestino(checkDestino) 

// // BOLETOS DE IDA - VUELTA - IDA/VUELTA
// const ida = confirm("¿Desea comprar boletos sólo de ida?");

//   if (ida) {
//     let fechaPartida = prompt("Ingrese la fecha de partida (dd/mm/aaaa): ");
//     let fechaIngrPartida = new Date(fechaPartida);
//     let fechaActual = new Date();

//         while (fechaIngrPartida < fechaActual) {
//           alert("Por favor, ingrese una fecha válida.");
//           fechaPartida = prompt("Ingrese la fecha de partida (dd/mm/aaaa): ");
//         }
//     if (fechaIngrPartida) {
//       let revisionI = "Lugar de Origen: " + origen +
//                       "\n" + "Destino: " + msjDestino +
//                       "\n" + "Fecha de partida: " + fechaPartida;
//       alert(revisionI);
//       alert("A continuación mostraremos las mejores opciones para que disfrutes tu vuelo :)");
//     } 

//   } else {
//       const vuelta = confirm("¿Desea comprar boletos sólo para regresar?");

//       if (vuelta) {
//         let fechaV = prompt("Ingrese una fecha de regreso (dd/mm/aaaa): ");
//         let fechaIngrVuelta = new Date (fechaV);
//         fechaActual = new Date();
          
//           if (fechaIngrVuelta < fechaActual) {
//             alert("Por favor, ingrese una fecha válida.");
//           } else {
//             let revisionV = "Lugar de Origen: " + origen +
//                             "\n" + "Destino: " + msjDestino +
//                             "\n" + "Fecha de regreso: " + fechaV;
//           alert(revisionV);
//           alert("A continuación mostraremos las mejores opciones para que disfrutes tu vuelo :)");
//           }
//       } else {
//           const iYv = confirm("¿Deseas comprar boletos de ida y vuelta?");

//           if (iYv) {
//             fechaPartida = prompt("Ingrese la fecha de partida (dd/mm/aaaa): ");
//             fechaIngrPartida = new Date(fechaPartida);
//             fechaActual = new Date();

//               if (fechaIngrPartida < fechaActual) {
//                 alert("Por favor, ingrese una fecha válida.");
//               }

//             fechaV = prompt("Ingrese una fecha de regreso (dd/mm/aaaa): ");
//             fechaIngrVuelta = new Date (fechaV);
//             fechaActual = new Date();
          
//               if (fechaIngrVuelta < fechaActual || fechaIngrVuelta < fechaIngrPartida){
//                 alert("Por favor, ingrese una fecha válida.");
//               } else {
//                 let revisionIyV = "Lugar de origen: " + origen +
//                                   "\n" + "Destino: " + msjDestino +
//                                   "\n" + "Fecha de partida: " + fechaPartida +
//                                   "\n" + "Fecha de regreso: " + fechaV;
//                 alert(revisionIyV);
//                 alert("A continuación mostraremos las mejores opciones para que disfrutes tu vuelo :)");
//               }
//           }
//         }
//   } 