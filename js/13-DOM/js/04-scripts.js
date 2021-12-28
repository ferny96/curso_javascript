//queryselector: La nueva forma de seleccionar clases y ids
//RETORNA EL PRIMERO QUE ENCUENTRA
const card = document.querySelector(".card");
console.log(card);

//PODEMOS TENER SELECTORES ESPECIFICOS COMO EN CSS
const info = document.querySelector(".premium .info");
console.log(info);

//SELECCIONAR EL SEGUNDO CARD DE HOSPEDAJE
//podemos escribir los selectores tan especificos como querramos
//Los selectores de CSS funcionan en JS con querySelector
/*Para seleccionar el segundo, tercer, cuarto, quinto, etc., elemento podemos hacer uso de
.nombre_clase:nth-child(numero_del_elemento)*/
const cards2 = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(cards2);

//SELECCIONANDO IDS CON QUERYSELECTOR
//El que encuentre primero ese va a imprimir
const formulario = document.querySelector("#formulario");
console.log(formulario);

//SELECCIONAR ELEMENTOS POR SU ETIQUETA HTML
const navegacion = document.querySelector("nav");
console.log(navegacion);