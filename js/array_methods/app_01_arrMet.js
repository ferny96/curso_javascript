//Los array methods hacen el trabajo pesado por nosotros

//SOME: que al menos un elemento del arreglo cumpla con la condicion
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if (mes == "Enero"){
        console.log('Si existe')
    }
});

/*Tambien comprueba si existe un valor en un arreglo
    NOTA: .include funciona con arreglos de un solo indice, para revisar si un objeto existe en un arreglo
    hay que hacer uso de .some
*/
const resultado = meses.includes('Enero');
console.log(resultado);


//En un arreglo de objetos se utiliza .SOME
const carrito = [{ nombre: "Monitor 27 pulgadas", precio: 500 },
                {nombre:"Television", precio: 100 },
                {nombre:"Tablet", precio: 200 },
                {nombre:"Audifonos", precio: 300 },
                {nombre:"Teclado", precio: 400 }
                ];

//Sin return tambien funciona
const existe = carrito.some( producto => 
    producto.nombre == "Celular");

console.log(existe);

//En un arreglo tradional con .SOME
const existe2 = meses.some( mes2 => mes2 == "enero");
console.log(existe2);