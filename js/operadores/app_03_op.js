//NULL y UNDEFINED

//UNDEFINED: la variable esta definida pero el valor NO
let numero1;

console.log(numero1);
console.log(typeof numero1);

//NULL: ES6 define que los null deben de ser un objeto
let numero2 = null;

console.log(numero2);
console.log(typeof numero2);

//Comparar null con undefined
console.log(numero1 == numero2);//Aqui pasa algo extrano devuelve TRUE
console.log(numero1 === numero2);//Este si devuelve FALSE