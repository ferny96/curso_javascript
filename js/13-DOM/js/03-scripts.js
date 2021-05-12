/*NOTA: no es recomendado utilizar el mismo id para dos elementos de la misma pagina, y de serlo asi JS va a
seleccionar el primero que encuentre, las clases si se pueden utilizar varias veces en un mismo documento*/
//Como seleccionar ids
const formulario = document.getElementById("formulario");
console.log(formulario);


//CUANDO NO EXISTE UN ID: nos devolvera un NULL
const noExiste = document.getElementById("noExiste");
console.log(noExiste);

