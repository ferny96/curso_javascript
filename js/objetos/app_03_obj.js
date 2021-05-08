//Agregar mas propiedades al objeto

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.png";

//Como eliminar propiedades
delete producto.disponible;

console.log(producto);