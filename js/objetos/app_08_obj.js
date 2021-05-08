"use strict";

//Metodos para los objetos
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//No permitir que un objeto se pueda modificar
Object.freeze(producto);
//producto.disponible = false;

//Tampoco permite eliminar
//delete producto.precio;

console.log(producto);

//Como saber si un objeto no se puede modificar

console.log(Object.isFrozen(producto));