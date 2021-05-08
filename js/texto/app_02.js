const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

//Primera forma
console.log(producto.concat(precio));
console.log(producto.concat(' en descuento'));

//Segunda forma

console.log(producto + " con un precio de " + precio);
console.log("El producto "+ producto +" con precio de "+ precio);

//Template strings o template literal
console.log(`El producto ${producto} con un precio de ${precio}`);