const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const buscarPan = productos.find(producto => producto.id === 3); 
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos);//[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const aumentos = productos.map(producto => producto.precio += 30);
console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio.
