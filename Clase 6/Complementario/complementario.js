const flores = [{ id: 1,  producto: "rosa", precio: 10 },
                  {  id: 2,  producto: "peonia", precio: 50 },
                  {  id: 3,  producto: "tulipan"  , precio: 20},
                  {  id: 4,  producto: "gerbera" , precio: 15}];

let ordenCreciente = flores.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
console.log(ordenCreciente);

