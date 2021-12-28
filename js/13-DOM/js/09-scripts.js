//ELIMINAR ELEMENTOS DEL DOM, HAY DOS FORMAS

//Primera forma: Eliminando elementos por si mismos
const primerEnlace = document.querySelector("a");
console.log(primerEnlace);
primerEnlace.remove();


/*Segunda forma: Eliminando elementos utilizando una referencia del
padre (el padre elimina al hijo) con .removeChild*/
const navegacion = document.querySelector(".navegacion");
navegacion.removeChild(navegacion.children[2]);

console.log(navegacion.children);
