/*Como eliminar informacion de local storage*/
localStorage.removeItem('nombre');

/*NOTA: en localStorage no existe un metodo nativo para actualizar
pero lo podemos hacer de la siguiente manera:*/
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

/*Agregamos un nuevo meses*/
mesesArray.push('Julio');

/*Asignamos de nuevo*/
localStorage.setItem('meses', JSON.stringify(mesesArray));