//El problema con los objetos
//Los objetos si se pueden reasignar
//Aunque la variable producto sea una constante al ser objeto sus propiedades se pueden reescribir

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Reasignando valor a la propiedad disponible
producto.disponible = false;

delete producto.precio;

console.log(producto);