//Operador TERNARIO
//El operador ternario es parecido al if donde el signo ? sería la parte del if o verdadero mientras que el
//signo de : sería la parte del false

const autenticado = true;
const puedePagar = false;

console.log(autenticado ? "Si autenticado" : "No autenticado");

//REVISAR DOS CONDICIONES
console.log(autenticado ? puedePagar ? "Si esta autenticado y puede pagar" : "Si autenticado pero no puede pagar" : "No autenticado");


//ANIDADOS CON EL OPERADOR TERNARIO
//Parahacer un ternario anidado la sintaxis es la siguiente
// condicion1 ? condicion2 ? se cumple la condición1 y condicion2 : no se cumple la condición2 : no se cumple la condicion1

console.log(autenticado ? puedePagar ? "Esta autenticado y puede pagar" : "Sí auntenticado, no puede pagar" :"No autenticado");