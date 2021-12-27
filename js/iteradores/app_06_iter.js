//ForEach o .MAP
//ForEach: Ideal para recorrer un arreglo

/* Diferencias:
    Podemos crear una variable y ha esa variable asignarle el resultado de .map,
    mientras que con .forEach no se imprimira nada.
*/

//ARREGLO
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
});

const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];

    carrito.forEach((producto) => {//.forEach no crea un nuevo arreglo
        console.log(`Producto: ${producto.nombre}`);
    });

//.MAP
console.log(".MAP");

pendientes.map( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
});

const carrito2 = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];

const nuevoArreglo = carrito2.map((producto) => //.MAP crea un arreglo nuevo
        `Producto: ${producto.nombre}`
    );

    console.log(nuevoArreglo);