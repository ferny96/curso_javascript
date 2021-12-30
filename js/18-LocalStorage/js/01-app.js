/*NOTA: LocalStorage solo puede almacenar datos de tipo string,
pero existen formas de que pueda almacenar un objeto como string
localStorage: Es una api de una llave y un valor
1. La llave es como vamos a obtener un valor (el nombre de la llave
    debe de ser unico)
2. El valor es lo que puede cambiar*/

/*NOTA: diferencia entre locaStorage y SessionStorage
locaStorage: persiste mas, es decir, puedo apagar mi computadora y
encenderla manana y ahi tendre la informacion
SessionStorage: En cuanto se cierra el navegador se pierden los datos*/

localStorage.setItem('nombre', 'Fernando');

/*Objeto producto*/
const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 200
}

/*Con JSON.stringify convertimos un arreglo u objeto a string*/
const productoString = JSON.stringify( producto );
console.log(productoString);

/*Guardando el objeto convertido a string en localStorage*/
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);

/*NOTA: El JSON.stringity lo podemos incluir directamente en el localStorage*/
const meses2 = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('meses2', JSON.stringify(meses2));