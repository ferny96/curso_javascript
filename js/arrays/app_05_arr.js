//Anadir nuevos elementos al inicio y al final de un arreglo
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

//Agregando al final del arreglo
meses.push('junio');

console.table(meses);

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

//Agregar al final
carrito.push(producto);
carrito.push(producto2);

//Agregar al inicio
carrito.unshift(producto3);

console.table(carrito);