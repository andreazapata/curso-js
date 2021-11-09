const suma  = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre  = nombre;
        this.precio  = parseInt(precio);
        this.descripcion = descripcion;
    }

}

const producto1 = new Producto("Florero. ", 500, "flores a elegir (max. 36), colores variables");
const producto2 = new Producto("Bouquet. ", 250, "24 flores, colores variables");


let cantidad1 = document.getElementById("cantidadflor1");
let cantidad2 = document.getElementById("cantidadflor2");

let total1 = parseInt(cantidad1) * producto1.precio;
let total2 = parseInt(cantidad2) * producto2.precio;

totalneto  = suma(total1, total2);

const iva = multiplicar(totalneto,0.16);
totalbruto = suma(totalneto,iva);


var preciosindividuales = [total1, total2];

var calcular = document.getElementById("calculo");

calcular.addEventListener("click",totalmostrado);

function totalmostrado (){
    let contenedor = document.createElement("div");
    contenedor.setAttribute ("id","cart");
    contenedor.innerHTML = `
                        <div id=totalproducts>
                            <h3>Subtotal: $${preciosindividuales.join (" + $")}</h3>
                            <hr>
                            <h3>Su total es de $${totalbruto}. ($${totalneto} + IVA del 16%)</h3>
                        </div>
                        `;
    
document.body.appendChild(contenedor);

if((cantidad1 <= 0)&&(cantidad2 <= 0)){
    let cart = document.getElementById ("cart");
    let cart_nested = document.getElementById ("totalproducts");

    cart.removeChild(cart_nested);

    contenedor.innerHTML = `<h1>Carrito vacío.</h1>`;
    document.body.appendChild(contenedor)
}


}