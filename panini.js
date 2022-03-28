var boton = document.getElementById("poner");
boton.addEventListener("click", poner);
var yaTengo =[]; //array que me muestra aquellas fichas que ya tengo

function poner()
{
    var laminaobtenida = document.getElementById("laminita")
    yaTengo.push (laminaobtenida.value);
    resultado.innerHTML = "la lamina numero " + yaTengo + " se ha agregado con exito"
}
