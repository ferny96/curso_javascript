//TRAVERSING THE DOM: irlo recorriendo
//CON CHILDREN SE ACCEDE A LOS HIJOS DE LOS ELEMENTOS PADRE

const navegacion = document.querySelector("nav.navegacion");

console.log(navegacion);
console.log(navegacion.childNodes); //LOS ESPACIOS EN BLANCO SON CONSIDERADOS ELEMENTOS
console.log(navegacion.children);

const card = document.querySelector(".card");

//CAMBIANDO TEXTO CON CHILDREN
card.children[1].children[1].textContent = "Nuevo headding desde traversing the DOM";

//CAMBIANDO IMAGEN CON TRAVERSING
card.children[0].src = '../img/hacer3.jpg';

console.log(card.children[0]);

//TRAVERSING THE HIJO AL PADRE: recorrer los hijos hasta llegar al padre
//ES RECOMENDADO UTILIZAR .parentElement y no .parentNode
console.log(card.parentElement);

//TRAVERSING THE hermano a hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//SELECCIONAR EL ULTIMO CARD
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);
console.log(ultimoCard.previousElementSibling.previousElementSibling);

//SELECCIONAR UN PRIMER ELEMENTO DE UNA NAVEGACION (NAV)
console.log(navegacion.firstElementChild);

//SELECCIONAR EL ULTIMO ELEMENTO DE UNA NAVEGACION (NAV)
console.log(navegacion.lastElementChild);