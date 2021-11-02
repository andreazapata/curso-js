class Flor {
    constructor (nombre, tamano, color, precio) {
        this.nombre = nombre;
        this.tamano = tamano;
        this.color = color;
        this.precio = precio;
    }
    decirPrecio() {
        let indicarPrecio = document.getElementById('indicarPrecio');
        indicarPrecio.innerHTML = `<p>La flor ${this.nombre} cuesta $${this.precio}.</p>`;
    }
}

const rosa = new Flor("rosa", "mediana", "roja", 10);
const peonia = new Flor("peonia", "grande", "rosa", 40);
const tulipan = new Flor("tulipan", "mediana", "roja", 20);
const gerbera = new Flor("gerbera", "chica", "amarilla", 10);

let botonListo = document.getElementById("listo");
botonListo.addEventListener("click", precios)

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla === 13) precios();
}

function precios() {
    let florEscogida = document.getElementById('flor').value.toLowerCase();

    if (florEscogida === "rosa") { 
        rosa.decirPrecio();
    }
    else if (florEscogida === "peonia") {
        peonia.decirPrecio();
    }
    else if (florEscogida === "tulipan") {
        tulipan.decirPrecio();
    }
    else if (florEscogida === "gerbera") {
        gerbera.decirPrecio();
    }
    else {
        alert("Esa flor no la tenemos, escoge otra.");
    }
};


let botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", calcularPrecio)

function calcularPrecio() {
    let florFinal = document.getElementById('florFinal').value.toLowerCase();

    let cantidad = document.getElementById('cantidad').value;
    while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
        cantidad = prompt("Ingrese una cantidad válida: ");
    };

    let envio = '';
    if (document.getElementById('envio_si').checked) {
        envio = 90;
    } else if (document.getElementById('envio_no').checked) {
        envio = 0;
    }

    let florero = '';
    if (document.getElementById('florero_si').checked) {
        florero = 120;
    } else if (document.getElementById('florero_no').checked) {
        florero = 0;
    }
    
    if (florFinal === "rosa"){
        let precioFinal = document.getElementById('precioFinal');
        precioFinal.innerHTML = `<p>Su total es de $${(parseInt(cantidad) * rosa.precio) + florero + envio}.</p>`;
    }
    else if (florFinal === "peonia"){
        let precioFinal = document.getElementById('precioFinal');
        precioFinal.innerHTML = `<p>Su total es de $${(parseInt(cantidad) * peonia.precio) + florero + envio}.</p>`;    
    }
    else if (florFinal === "gerbera"){
        let precioFinal = document.getElementById('precioFinal');
        precioFinal.innerHTML = `<p>Su total es de $${(parseInt(cantidad) * gerbera.precio) + florero + envio}.</p>`;    
    }
    else if (florFinal === "tulipan"){
        let precioFinal = document.getElementById('precioFinal');
        precioFinal.innerHTML = `<p>Su total es de $${(parseInt(cantidad) * tulipan.precio) + florero + envio}.</p>`;    
    }
}

