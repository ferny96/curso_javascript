//.findIndex para encontrar la posicion de un elemento en un array (arreglo)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//En un arreglo de objetos se utiliza .SOME
const carrito = [{ nombre: "Monitor 27 pulgadas", precio: 500 },
                {nombre:"Television", precio: 100 },
                {nombre:"Tablet", precio: 200 },
                {nombre:"Audifonos", precio: 300 },
                {nombre:"Teclado", precio: 400 }
                ];

/*NOTA: En un forEach el segundo argumento que se pasa, ese obtendrá el indice del elemento actual
Ejemplo: meses.forEach((mes, indice(lo podemos nombrar como queramos)) => {console.log('mensaje')})*/
meses.forEach((mes, indice) => {
    if (mes === 'Abril'){
    console.log(`Fue encontrado en la posicion ${indice}`);
    }
})

/*Encontrar el indice de ABRIL
NOTA: Con findIndex si le pasamos un valor que no existe nos mostrara -1 (esto significa que no existe)*/
const indice = meses.findIndex((mes) => mes === "Abril");

console.log(indice);

//Encontrar la posicion/indice de un arreglo de objetos
const valor = carrito.findIndex( producto => producto.nombre === "Tablet" )/*SOLO BUSCA POR UNO, si hay dos con el mismo valor
                                                                            no los va a imprimir los dos, solo uno*/

console.log(valor)