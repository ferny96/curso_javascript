//Haciendo uso de MAP, tambien para iterar un array
const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];

//La sintaxis de MAP y ForEach es lo mismo.
//La unica diferencia es que .map te crea un nuevo arreglo minetras que ForEach NO.
const nuevo = carrito.map( function(producto){
   return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevo);