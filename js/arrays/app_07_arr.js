//Eliminar elementos con Splice
const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre:'Celular',
    precio: 1000
}

const producto3 = {
    nombre:'teclado',
    precio: 50
}

const producto4 = {
    nombre:'Audifonos',
    precio: 200
}

//Agregar al final
carrito.push(producto);
carrito.push(producto2);

//Agregar al inicio
carrito.unshift(producto3);
carrito.unshift(producto4);

console.table(carrito);

//Eliminar ultimo elemento de un arreglo
/*carrito.pop();
console.table(carrito);*/

//Eliminar primer elemento de un arreglo
/*carrito.shift();
console.table(carrito);*/

carrito.splice(1,1);/*Toma dos parametros:
* Primero: la posicion donde empezara a cortar
* Segundo: cuantos elementos queremos eliminar*/

console.table(carrito);