//Arrow functions MAP y ForEach
const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];

//ASI
const nuevo = carrito.map( (producto) => {
   return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

//O ASI
const nuevo2 = carrito.map( producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( (producto) => {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
 });

 console.log(nuevo);
 console.log(nuevo2);