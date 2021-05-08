//Object .keys, .values, .entries

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Keys
console.log(Object.keys(producto));//Retorna las llaves del objeto (nombre, precio, disponible).

//Values
console.log(Object.values(producto));//Retorna el valor de las propiedades (llaves) (Monitor 20 Pulgadas, 300, true).

//Entries
console.log(Object.entries(producto));//Retorna todo en pares