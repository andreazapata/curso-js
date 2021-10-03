let edad = prompt("Ingresa tu edad");

if (edad <= 17) {
    alert("Lo sentimos, debes ser mayor de 18 para ingresar.");
}
else if (edad < 100) {
    alert("¡Bienvenide!");
}
else {
    alert("Debes ingresar una edad real");
}