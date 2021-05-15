//Como unir dos objetos
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso:"1kg",
    medida: "1m"
}

//Unir los dos OBJETOS
//PRIMERA FORMA
const resultado = Object.assign(producto, medidas);

console.log(resultado);

//Spread Operator o Rest Operator
//SEGUNDA FORMA
const resultado2 = {...producto, ...medidas}

console.log(resultado2);