class Flor {
    constructor (nombre, tamano, color, precio) {
        this.nombre = nombre;
        this.tamano = tamano;
        this.color = color;
        this.precio = precio;
    }
    decirPrecio() {
        alert("La flor " + this.nombre + " cuesta $" + this.precio);
    }
}

const rosa = new Flor("rosa", "mediana", "roja", 10);
const peonia = new Flor("peonia", "grande", "rosa", 40);
const tulipan = new Flor("tulipan", "mediana", "roja", 20);
const gerbera = new Flor("gerbera", "chica", "amarilla", 10);

let escogerFlor = prompt("¿Qué flor te gustaría escoger?").toLowerCase();

while (escogerFlor != "esc") {
    if (escogerFlor === "rosa") { 
        rosa.decirPrecio();
        break;
    }
    else if (escogerFlor === "peonia") {
        peonia.decirPrecio();
        break;
    }
    else if (escogerFlor === "tulipan") {
        tulipan.decirPrecio();
        break;
    }
    else if (escogerFlor === "gerbera") {
        gerbera.decirPrecio();
        break;
    }
    else {
        alert("Esa flor no la tenemos, escoge otra.");
        escogerFlor = prompt("¿Qué otra flor te gustaría escoger?").toLowerCase();
    }
}

let cantidad = prompt("¿Cuantas flores te gustaría agregar?");

while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
    cantidad = prompt("Ingrese una cantidad válida: ");
};

let wrapping = confirm("Desea agregar florero? (+$120). Escoge 'ok' si sí, y 'cancelar' si no.")
let envio = confirm ("¿Agregar envío? (+$90). Escoge 'ok' si sí, y 'cancelar' si no.")

if (wrapping === true) {
    wrapping = 120;
}

if (envio === true) {
    envio = 90;
}


if (escogerFlor = "rosa"){
    alert(("Su total es de $") + ((parseInt(cantidad) * rosa.precio) + wrapping + envio));
}
else if (escogerFlor = "peonia"){
    alert(("Su total es de $") + ((parseInt(cantidad) * peonia.precio) + wrapping + envio));
}
else if (escogerFlor = "gerbera"){
    alert(("Su total es de $") + ((parseInt(cantidad) * gerbera.precio) + wrapping + envio));
}
else if (escogerFlor = "tulipan"){
    alert(("Su total es de $") + ((parseInt(cantidad) * tulipan.precio) + wrapping + envio));
}