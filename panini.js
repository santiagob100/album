var boton = document.getElementById("poner");
boton.addEventListener("click", poner);
var jugadoresYA =[]; //array que me muestra aquellas fichas que ya tengo
var numeroCaja = document.getElementById("laminita");

function poner(){
    
    jugadoresYA.push(numeroCaja.value);
    resultado.innerHTML = "El jugador numero " + numeroCaja.value + " se ha agregado a la lista";
    lista.innerHTML = "Actualmente tienes: " + jugadoresYA;
}