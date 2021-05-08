//Spread Operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500 },
    {nombre:"Television", precio: 100 },
    {nombre:"Tablet", precio: 200 },
    {nombre:"Audifonos", precio: 300 },
    {nombre:"Teclado", precio: 400 }
];

//AGREGAR AL FINAL DE ARREGLO
//Spread Operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

//Spread Operator con un arreglo de objetos
const producto = {
    nombre: 'disco duro',
    precio: 300
}

const carrito2 = [...carrito, producto];
console.log(carrito2);