const flores = [{ id: 1,  producto: "rosa", precio: 10 },
                  {  id: 2,  producto: "peonia", precio: 50 },
                  {  id: 3,  producto: "tulipan"  , precio: 20},
                  {  id: 4,  producto: "gerbera" , precio: 15}];

const baratos = flores.filter(flores => flores.precio < 50); 
console.log(baratos);

const iva = flores.map(flores => flores.precio = flores.precio*1.16);
console.log(iva);
