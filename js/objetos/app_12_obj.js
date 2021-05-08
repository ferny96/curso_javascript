//Object constructor (automatizar la creacion de los objetos)
//Object literal
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 20 Pulgadas',500);

console.log(producto2);