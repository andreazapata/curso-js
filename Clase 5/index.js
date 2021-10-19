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

let escogerFlor = prompt("¿Qué flor te gustaría escoger?");


while (escogerFlor != "") 
{
    if (escogerFlor === "rosa") { 
        rosa.decirPrecio();
        break;
    }
    else if (escogerFlor === "peonia") {
        peonia.decirPrecio();
        break;
    }
    else {
        alert("Esa flor no la tenemos, escoge otra.");
        escogerFlor = prompt("¿Qué otra flor te gustaría escoger?");
    }
}
