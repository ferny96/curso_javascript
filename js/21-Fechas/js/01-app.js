/*Fechas*/
const diaHoy = new Date();

let valor;

valor = diaHoy;

/*Metodos de fechas*/
//Ano
valor = diaHoy.getFullYear();

//mes
valor = diaHoy.getMonth();

//minutos
valor = diaHoy.getMinutes();

//Horas
valor = diaHoy.getHours();

/*NOTA: Set extrae el valor get lo modifica*/

valor = diaHoy.setFullYear(2010);

console.log(valor);