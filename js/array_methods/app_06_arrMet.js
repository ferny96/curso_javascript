//EVERY: todos los elementos de un arreglo deben de cumplir una condicion para retornar un TRUE
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    {nombre:"Television", precio: 100 },
    {nombre:"Tablet", precio: 200 },
    {nombre:"Audifonos", precio: 300 },
    {nombre:"Teclado", precio: 400 }
];

let resultado = carrito.every((producto) => {
    producto.precio > 50
});

console.log(resultado);