//FIND
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
         resultado = carrito[index];
     }
 });

 console.log(resultado)


//Con .find
let resultado2 = carrito.find( producto => producto.nombre === "Tablet");//SINO SE CUMPLE LA CONDICION NO CREA NADA
console.log(resultado2);