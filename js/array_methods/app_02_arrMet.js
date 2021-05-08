//.findIndex para encontrar la posicion en un array (arreglo)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//En un arreglo de objetos se utiliza .SOME
const carrito = [{ nombre: "Monitor 27 pulgadas", precio: 500 },
                {nombre:"Television", precio: 100 },
                {nombre:"Tablet", precio: 200 },
                {nombre:"Audifonos", precio: 300 },
                {nombre:"Teclado", precio: 400 }
                ];

meses.forEach((mes) => {
    console.log(mes);
})

//Encontrar el indice de ABRIL
const indice = meses.findIndex((mes) => mes === "Abril");//SI NO EXISTE REGRESA UN -1

console.log(indice);

//Encontrar la posicion en un arreglo de objetos
const valor = carrito.findIndex( producto => producto.nombre === "Tablet" )/*SOLO BUSCA POR UNO, si hay dos con el mismo valor
                                                                            no los va a imprimir los dos, solo uno*/

console.log(valor)