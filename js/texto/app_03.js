//Eliminar espacio en blanco al inicio y final del texto

const producto = "        Monitor 20 pulgadas        ";

//Eliminar al inicio
console.log(producto.trimStart());

//Eliminar al final
console.log(producto.trimEnd());

//Eliminar al inicio y al final
//Chaining
console.log(producto.trimStart().trimEnd());

//Forma anterior
console.log(producto.trim());