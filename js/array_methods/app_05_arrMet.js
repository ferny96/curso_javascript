//.FIND> Crea un nuevo arreglo basado en la condicion que estamos revisando

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    {nombre:"Television", precio: 100 },
    {nombre:"Tablet", precio: 200 },
    {nombre:"Audifonos", precio: 300 },
    {nombre:"Teclado", precio: 400 }
];

//Con un forEach
let resultado = '';

 carrito.forEach((producto, index) => {
     if(producto.nombre === "Tablet"){
         resultado = carrito[index];//index, en la posicion que encontro el elemento (tablet)
     }
 });

 console.log(resultado)


/*Con .find
NOTA: .find nos muestra solo el primer elemento que cumpla con la condicion*/
let resultado2 = carrito.find( producto => producto.nombre === "Tablet");//SINO SE CUMPLE LA CONDICION NO CREA NADA
console.log(resultado2);