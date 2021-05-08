//Convertir String a numeros

const numero1 = "20";
const numero2 = "20.4";
const numero3 = 20;
const numero4 = 20.78;

//converir a numero

console.log(typeof numero1);
//Convertir a enteros
console.log(Number.parseInt(numero1));
console.log(typeof numero1);

//Convertir a decimales
console.log(Number.parseFloat(numero2));

//Verificar si un numero es entero
//NO
console.log(Number.isInteger(numero4));

//SI
console.log(Number.isInteger(numero3));