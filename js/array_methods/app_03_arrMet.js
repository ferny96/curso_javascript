//REDUCE
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    {nombre:"Television", precio: 100 },
    {nombre:"Tablet", precio: 200 },
    {nombre:"Audifonos", precio: 300 },
    {nombre:"Teclado", precio: 400 }
];

//Con un forEach
let total = 0;

carrito.forEach((producto) => {
    total += producto.precio;
});

console.log(total);

//Con REDUCE
//TOTAL es el valor previo mientras que producto es el valor actual
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado);