class Flor {
    constructor (nombre, tamano, color, precio) {
        this.nombre = nombre;
        this.tamano = tamano;
        this.color = color;
        this.precio = precio;
    }
    decirPrecio() {
        $('#indicarPrecio').html(`<p>La flor ${this.nombre} cuesta $${this.precio}.</p>`);
    }
}

const rosa = new Flor("rosa", "mediana", "roja", 10);
const peonia = new Flor("peonia", "grande", "rosa", 40);
const tulipan = new Flor("tulipan", "mediana", "roja", 20);
const gerbera = new Flor("gerbera", "chica", "amarilla", 10);

$('#listo').click(precios);

$('#flor').on("keydown", (e) => {
    if (e.key === 'Enter') {
        validar(e);
    }
})

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla === 13) precios();
}

function precios() {
    let florEscogida = $('#flor').val().toLowerCase();

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

$('#calcular').click(calcularPrecio);

function calcularPrecio() {
    let florFinal = $('#florFinal').val().toLowerCase();

    let cantidad = $('#cantidad').val();
    while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
        cantidad = prompt("Ingrese una cantidad válida: ");
    };

    let envio = '';
    if ($('#envio_si:checked').val()) {
        envio = 90;
    } else if ($('#envio_no:checked').val()) {
        envio = 0;
    }

    let florero = '';
    if ($('#florero_si:checked').val()) {
        florero = 120;
    } else if ($('#florero_no:checked').val()) {
        florero = 0;
    }
    
    if (florFinal === "rosa"){
        $('#precioFinal').html(`<p>Su total es de $${(parseInt(cantidad) * rosa.precio) + florero + envio}.</p>`);
    }
    else if (florFinal === "peonia"){
        $('#precioFinal').html(`<p>Su total es de $${(parseInt(cantidad) * peonia.precio) + florero + envio}.</p>`);
    }
    else if (florFinal === "gerbera"){
        $('#precioFinal').html(`<p>Su total es de $${(parseInt(cantidad) * gerbera.precio) + florero + envio}.</p>`);
    }
    else if (florFinal === "tulipan"){
        $('#precioFinal').html(`<p>Su total es de $${(parseInt(cantidad) * tulipan.precio) + florero + envio}.</p>`);
    }
}

$('#guardarDatos').click(guardarDatos);

function guardarDatos() {
    localStorage.nombre = $("#nombre").val();
    localStorage.destinatario = $("#destinatario").val();
}

$('#confirmarDatos').click(recuperarDatos);

function recuperarDatos() {
    if ((localStorage.nombre != "") && (localStorage.destinatario != "")) {
        $("#datos").html(`<p>De: ${localStorage.nombre} </p><p>Para: ${localStorage.destinatario}`)
    } else {
        $("#datos").html(`<p>No has introducido nombre y/o destinatario</p>`);
    }
}