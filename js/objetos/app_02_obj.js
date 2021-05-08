//Como acceder a los valores de un objeto

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//O
console.log(producto['nombre']);
console.log(producto['precio']);
console.log(producto['disponible']);