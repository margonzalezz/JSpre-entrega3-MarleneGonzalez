// CONECCIÓN A LOS BOTONES PARA SELECCIONAR EL TIPO DE PASAJE A ELEGIR
const botonIda = document.getElementById("botonIda");
const botonIdaVuelta = document.getElementById("botonIdaVuelta");

let tipoPasaje = "";            //VARIABLE PARA ALMACENAR EL RESULTADO DE LOS BOTONES

function botonTipoIda() {
    botonIda.addEventListener("click", (e) => {
        tipoPasaje = "solo_ida";
        alert("Usted quiere un pasaje: " + tipoPasaje);
    })
}
botonTipoIda();
function botonTipoIyV() {
    botonIdaVuelta.addEventListener("click", (e) =>{
        tipoPasaje = "ida_y_vuelta";
        alert("Usted quiere un pasaje:" + tipoPasaje);
    })
}
botonTipoIyV();

// CONECCIÓN PARA SELECCIONAR EL ORIGEN

const seleccionOrigen = document.getElementById("seleccionOrigen");
const seleccionDestino = document.getElementById("seleccionDestino");
const selectedOrigin = "";

function changeOrigen() {
    seleccionOrigen.addEventListener("change", (e) => {
        selectedOrigin = e.target.value;
        alert("Opción seleccionada:", selectedOption);
    })
}

changeOrigen();





