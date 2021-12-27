//COMO UNIR DOS ARREGLOS CON CONCAT

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'septiembre', 'octubre'];
const meses3 = ['noviembre', 'diciembre'];

//Para concatenar un tercer arreglo basta con poner una coma ","
/*Con .CONCAT
NOTA: El orden de como pasemos los valores es importante*/
const resultado = meses.concat(meses2, meses3);

console.log(resultado);

//Si le agregamos un string
const resultado2 = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado2);

//CON Spread Operator o rest operator
const resultado3 = [...meses, ...meses2, ...meses3]

console.log(resultado3);

/*Que pasa si ha esta forma le agregamos como string un nuevo elemento
puede tener el mismo resultado*/

const resultado4 = [...meses, ...meses3, 'Otro mes 2'];

console.log(resultado4);

/*Pero si lo agregamos como spread Operator nos creara un elemento por
cada letra del string*/
const resultado5 = [meses, ...meses3, ...'Otro mes 3']

console.log(resultado5);