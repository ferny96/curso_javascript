//Comparar dos valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos numeros son iguales
//Solo compara los valores pero no el tipo de dato
console.log(numero1 == numero2);

//Compara el valor y el tipo de dato (stricto)
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));

console.log(typeof numero1);
console.log(typeof numero2);

console.log(numero1 === numero3);

//Diferente a...
const password1 = "Admin1";
const password2 = "admin1";

console.log("La contrasena es diferente: ");
console.log(password1 != password2);

console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2));