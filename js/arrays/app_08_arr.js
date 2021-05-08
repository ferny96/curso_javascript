//Aplicando destructuring a arrays

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Forma anterior de hacerlo
const nombre1 = producto.nombre

console.log(nombre1);

//Ahora con destructuring
/*Con destructuring se crea y a la vez se le asigna el valor a la variable, destructuring permite extraer
propiedades
*/
const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

//Destructuring en arreglos
console.log("Destructuring en ARREGLOS");
const numeros = [10, 20, 30, 40, 50];

//Sintaxis
//const [nombre_variable1, nombre_variable2...] = nombre_del_arreglo

const [primero, segundo] = numeros;/*Aqui las podemos nombrar como queremos, mientras que en los objetos
                                    tiene que nombrarse como aparece la propiedad, ejemplo: nombre = nombre*/

console.log(primero);
console.log(segundo);

console.log("Destructuring a MESES");
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const [mes1, mes2, mes3] = meses;

console.log(mes1);
console.log(mes2);
console.log(mes3);

//SI QUEREMOS UN VALOR ESPECIFICO EJEMPLO: EL TERCER ELEMENTO DE UN ARREGLO LO HARIAMOS ASI
//colocamos coma por cada uno de los elementos que no requerimos y por ultimo ponemos el nombre del que
//si deseamos ver, imprimir o mostrar
const lenguajes = ['PHP', 'JS', 'C#', 'PYTHON'];

const [ , , ver3] = lenguajes;

console.log(ver3);

//Otra forma comun pero con Spread Operator
const tecnologa = ['tablet','celular','audifonos', 'cargador', 'parlante', 'tripode'];

const [primero2, segundo2, ...tercero2 ] = tecnologa;

console.log(tercero2);