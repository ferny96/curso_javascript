/*Como obtener los datos almacenados en el localStorage, lo hacemos
mediante el uso de getItem*/
const nombre = localStorage.getItem('nombre');

console.log(nombre);

const productoJSON = localStorage.getItem('producto');
/*como convertimos un objeto con forma de string a objeto*/
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));

/*Oh tambien*/
const meses2 = localStorage.getItem('meses2');
const mesesArray = JSON.parse(meses2);

console.log(mesesArray);