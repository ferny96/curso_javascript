"use strict";

//Sellar un objeto con SEAL
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//SEAL: permite modificar (propiedades existentes) pero no eliminar y mucho menos agregar propiedades
Object.seal(producto);

//Modificar precio
producto.precio = 600;

//no permite eliminar
// delete producto.precio;

//Ni agrefar
// producto.imagen = "imagen.png";

console.log(producto);

//Como saber si un objeto esta sellado
console.log(Object.isSealed(producto));