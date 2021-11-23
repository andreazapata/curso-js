//Clase principal
class Flor {
    constructor (nombre, precioChico, precioMediano, precioGrande) {
        this.nombre = nombre;
        this.precioChico = precioChico;
        this.precioMediano = precioMediano;
        this.precioGrande = precioGrande;
    }
}

//Flores
const rosa = new Flor("rosa", 100, 150, 200);
const tulipan = new Flor("tulipan", 200, 300, 400);
const girasol = new Flor("girasol", 250, 375, 500);
const peonia = new Flor("peonia", 400, 600, 800);

//Función calcular precio
$("#calcular").click(() => { 
   $("#precioFinal").slideDown("slow");
});

$('#calcular').click(calcularPrecio);

function calcularPrecio() {
    let florFinal = $('#flor option:selected').text();    
    let tamano = $('#tamano option:selected').text();    

    let presentacion = $('#presentacion option:selected').text();
    if (presentacion === 'Ramo') {
        presentacion = 50;
    } else if (presentacion === 'Florero') {
        presentacion = 150;
    }
    //Rosa
    if ((florFinal === "Rosa") && (tamano === "Chico")){
        $('#arreglo').html(`$${rosa.precioChico}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${rosa.precioChico + presentacion}`);
     }
     else if ((florFinal === "Rosa") && (tamano === "Mediano")){
        $('#arreglo').html(`$${rosa.precioMediano}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${rosa.precioMediano + presentacion}`);
     }
     else if ((florFinal === "Rosa") && (tamano === "Grande")){
        $('#arreglo').html(`$${rosa.precioGrande}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${rosa.precioGrande + presentacion}`);
     }
     
     //Tulipan
     else if ((florFinal === "Tulipán") && (tamano === "Chico")){
        $('#arreglo').html(`$${tulipan.precioChico}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${tulipan.precioChico + presentacion}`);
     }
     else if ((florFinal === "Tulipán") && (tamano === "Mediano")){
        $('#arreglo').html(`$${tulipan.precioMediano}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${tulipan.precioMediano + presentacion}`);
     }
     else if ((florFinal === "Tulipán") && (tamano === "Grande")){
        $('#arreglo').html(`$${tulipan.precioGrande}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${tulipan.precioGrande + presentacion}`);
     }

     //Girasol
     else if ((florFinal === "Girasol") && (tamano === "Chico")){
        $('#arreglo').html(`$${girasol.precioChico}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${girasol.precioChico + presentacion}`);
     }
     else if ((florFinal === "Girasol") && (tamano === "Mediano")){
        $('#arreglo').html(`$${girasol.precioMediano}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${girasol.precioMediano + presentacion}`);
     }
     else if ((florFinal === "Girasol") && (tamano === "Grande")){
        $('#arreglo').html(`$${girasol.precioGrande}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${girasol.precioGrande + presentacion}`);
     }

     //Peonia
     else if ((florFinal === "Peonía") && (tamano === "Chico")){
        $('#arreglo').html(`$${peonia.precioChico}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${peonia.precioChico + presentacion}`);
     }
     else if ((florFinal === "Peonía") && (tamano === "Mediano")){
        $('#arreglo').html(`$${peonia.precioMediano}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${peonia.precioMediano + presentacion}`);
     }
     else if ((florFinal === "Peonía") && (tamano === "Grande")){
        $('#arreglo').html(`$${peonia.precioGrande}`);
        $('#presentacion1').html(`$${presentacion}`);
        $('#total').html(`$${peonia.precioGrande + presentacion}`);
     }
}

//Siguiente + guardar datos arreglo

$('#siguiente').click(guardarDatosArreglo);

function guardarDatosArreglo(){
   localStorage.florSeleccionada = $('#flor option:selected').text();
   localStorage.tamanoSeleccionado = $('#tamano option:selected').text();
   localStorage.presentacionSeleccionada = $('#presentacion option:selected').text();
}

$('#siguiente').click(function(){
   window.location.href='datos.html';
})

//Guardar datos

$('#guardarDatos').click(guardarDatos);

function guardarDatos() {
    localStorage.remitente = $("#remitente").val();
    localStorage.destinatario = $("#destinatario").val();
    localStorage.mensaje = $("#mensaje").val();
}

$('#guardarDatos').click(function(){
   window.location.href='envio.html';
}
)

//Abrir modal

$('#agregar').click(guardarDatosEnvio);

function guardarDatosEnvio() {
    localStorage.fecha = $("#fecha").val();
    localStorage.hora = $('#hora option:selected').text();
    localStorage.direccion = $("#direccion").val();
    $('#informacionArreglo').html(`<p>Flor: ${localStorage.florSeleccionada}</p>
    <p>Tamaño: ${localStorage.tamanoSeleccionado}</p>
    <p>Presentación: ${localStorage.presentacionSeleccionada}</p>`);
    $('#informacionDatos').html(`<p>Remitente: ${localStorage.remitente}</p>
    <p>Destinatario: ${localStorage.destinatario}</p>
    <p>Mensaje: ${localStorage.mensaje}</p>`);
    $('#informacionEnvio').html(`<p>Fecha: ${localStorage.fecha}</p>
    <p>Hora: ${localStorage.hora}</p>
    <p>Dirección: ${localStorage.direccion}</p>`);
}


$('#agregar').click(function(){
   $('#contenedor-modal').fadeIn('fast');
})

//Cerrar modal
$('#regresar').click(function(){
   $('#contenedor-modal').fadeOut('fast');
})

//Confirmar pedido
$('#confirmar').click(function(){
   window.location.href='pantallafinal.html';
})

//Regresar a inicio
$('#inicio').click(function(){
   window.location.href='index.html';
})