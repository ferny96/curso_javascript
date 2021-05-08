//Destructuring de objetos

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Forma anterior de hacerlo
const nombre1 = producto.nombre

console.log(nombre1);

//Ahora con destructuring
/*Con destructuring se crea y a la vez se le asigna el valor a la variable, destructuring permite extraer
propiedades
*/
const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);