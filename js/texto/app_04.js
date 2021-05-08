const producto = 'Monitor 20 Pulgadas';

//Replace o reemplezar
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'))

//Slice o extraer o cortar
console.log(producto.slice(0,10));
console.log(producto.slice(0,14));

//NOTA: esta forma no hace nada
console.log(producto.slice(2,1));

//SubString alternativa a Slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //La diferencia con el anterior es que este metodo es inteligente
                                      //sustituye el 2 por el 1

console.log(producto.charAt(0));