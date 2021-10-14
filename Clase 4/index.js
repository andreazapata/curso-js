let totalCuenta = parseFloat(prompt("Ingrese el total de la cuenta."));

while (true) {

    if (!isNaN(totalCuenta) && totalCuenta != null && totalCuenta >= "") {
        break;
    } else {
        alert('No es número.');
        totalCuenta = parseFloat(prompt("Ingrese el total real de la cuenta."))
        continue;
    }
}

alert("El total de la cuenta es de $" + totalCuenta+".");
console.log("El total de la cuenta es de $" + totalCuenta+".");
document.write("<p>El total de la cuenta es de $" + totalCuenta + ".</p")

let descuento = parseFloat(prompt("Ingresa tu porcentaje de descuento."));

while (true) {

    if (!isNaN(descuento) && descuento != null && descuento >= "") {
        break;
    } else {
        alert('No es porcentaje.');
        descuento = parseFloat(prompt("Ingrese descuento en porcentaje entero (e. g. escribe '50' y no '50%'."))
        continue;
    }
}

function calcularDescuento (totalCuenta) {
    return (totalCuenta - (totalCuenta * (descuento * 0.01)));
}

let precioConDescuento = calcularDescuento(totalCuenta);
alert("El total con descuento es de $"+ precioConDescuento+".");
console.log("El total con descuento es de $"+ precioConDescuento+".");
document.write("<br><p>El total con descuento es de $"+ precioConDescuento+".</p>");

function calcularPropina (totalCuenta) {
    return (totalCuenta * 0.20);
}

let propina = calcularPropina(totalCuenta);
alert("La propina sugerida es de $"+ propina+".");
console.log("La propina sugerida es de $"+ propina+".");
document.write("<p>La propina sugerida es de $"+ propina+".</p>");

function sumarPropina (precioConDescuento) {
    return (precioConDescuento + propina);
} 

let precioConPropina = sumarPropina(precioConDescuento); 
alert ("El total con propina incluida es de $" + precioConPropina+".");
console.log ("El total con propina incluida es de $" + precioConPropina+".");
document.write ("<p>El total con propina incluida es de $" + precioConPropina+".</p>");