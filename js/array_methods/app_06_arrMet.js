/*Diferencias entre EVERY y SOME>
EVERY: TODOS los elementos de un arreglo deben de cumplir esa condicion para retornar un TRUE
SOME: Al menos uno debe de cumplir con la condicion para retornar un TRUE*/
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