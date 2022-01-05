/*Conociendo moment, libreria para la gestion de la hora*/
const diaHoy = new Date();

moment.locale('es');

/*con moment podemos utilizar .format que nos permite imprimir
la hora con el formato de nuestra region
La 'a' es para que nos aparezca am o pm*/
console.log(moment().format('LLLL', diaHoy));

/*Si estuvieramos trabajando con un sistema de cupones podriamos
hacer algo asi*/

console.log(moment().add(3, 'days').calendar());