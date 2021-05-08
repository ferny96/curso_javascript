//Crear nuevo arreglo con el Spread Operator
const carrito = [];

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


//Spread Operator
let resultado;
//Asi hace que se coloque (inserte) al final
resultado = [...carrito, producto];
resultado = [...resultado, producto2];

//Asi hace que se coloque (inserte) al inicio
resultado = [producto3, ...resultado];

console.table(resultado);