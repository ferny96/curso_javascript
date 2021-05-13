//ELIMINAR ELEMENTOS DEL DOM
//ELIMINANDO ELEMENTOS, PRIMERA FORMA
const primerEnlace = document.querySelector("a");
console.log(primerEnlace);
primerEnlace.remove();


//ELIMINANDO ELEMENTOS UTILIZANDO UNA REFERENCIA DEL PADRE (el padre elimina al hijo)
//.removeChild
const navegacion = document.querySelector(".navegacion");
navegacion.removeChild(navegacion.children[2]);

console.log(navegacion.children);
