//TRAVERSING THE DOM: irlo recorriendo
//CON CHILDREN SE ACCEDE A LOS HIJOS DE LOS ELEMENTOS PADRE

const navegacion = document.querySelector(".navegacion");

console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacios en blanco no son considerados elementos

//Seleccionar el primer elemento de la navegación
console.log(navegacion.firstElementChild);

//Seleccionar el último elemento de la navegación
console.log(navegacion.lastElementChild);

const card = document.querySelector(".card");

//CAMBIANDO TEXTO CON CHILDREN
card.children[1].children[1].textContent = "Nuevo headding desde traversing the DOM";

//CAMBIANDO IMAGEN CON TRAVERSING
card.children[0].src = '../img/hacer3.jpg';

console.log(card.children[0]);

//TRAVERSING DE HIJO AL PADRE: recorrer los hijos hasta llegar al padre
/*ES RECOMENDADO UTILIZAR .parentElement y no .parentNode (por lo de
los espacios en blanco)*/
console.log(card.parentElement);

//Varios
console.log(card.parentElement.parentElement.parentElement);

//TRAVERSING de hermano a hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//SELECCIONAR EL ULTIMO CARD
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);
console.log(ultimoCard.previousElementSibling.previousElementSibling);