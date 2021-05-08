//COMO UNIR DOS ARREGLOS CON CONCAT

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'septiembre', 'octubre'];
const meses3 = ['noviembre', 'diciembre'];

//Para concatenar un tercer arreglo basta con poner una coma ","
//Con .CONCAT
const resultado = meses.concat(meses2, meses3);

console.log(resultado);

//CON Spread Operator
const resultado2 = [...meses,...meses2,...meses3]

console.log(resultado2);