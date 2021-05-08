//FILTER
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    {nombre:"Television", precio: 100 },
    {nombre:"Tablet", precio: 200 },
    {nombre:"Audifonos", precio: 300 },
    {nombre:"Teclado", precio: 400 }
];

/*FILTER: crea un nuevo arreglo con la condicion que estamos realizando, es decir, su resultado
en el nuevo arreglo sera con los valores encontrados*/
let resultado = carrito.filter( (producto) => producto.precio > 400);

resultado = carrito.filter( (producto) => producto.precio < 600 )
console.log(resultado);

//REDUCE Y FILTER SON LOS MAS UTILIZADOS
resultado = carrito.filter((producto) => producto.nombre !== "Audifonos");//SI DESEAMOS NO MOSTRAR UN ELEMENTO
resultado = carrito.filter((producto) => producto.nombre === "Audifonos");
console.log(resultado);