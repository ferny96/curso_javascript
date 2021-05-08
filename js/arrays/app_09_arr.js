//Foreach para iterar un array
const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];


//Recorriendo el arreglo, accediendo al nombre
for(let i = 0; i < carrito.length ;i++){
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Array method forEach - hace lo mismo que el forEach
carrito.forEach( function(producto){
   console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});