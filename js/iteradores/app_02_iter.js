//BREAK Y CONTINUE en un FOR LOOP
//BREAK: corta la ejecucion de un for loop
//CONTINUE: intersecta un elemento y continua la ejecucion

for(let i = 0; i <= 10 ;i++){

    if(i === 5){
        console.log('CINCO');
        break;
    }
    console.log(`Numero ${i}`);
}

//CONTINUE
for(let n = 0; n <= 10 ;n++){

    if(n === 5){
        console.log('CINCO');
        continue;
    }
    console.log(`Numero ${n}`);
}

//CUANDO POEDEMOS APLICAR CONTINUE
const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000,
     descuento: true},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}
];

for( let x = 0; x < carrito.length; x++){

    if(carrito[x].descuento){
        console.log(`El articulo ${carrito[x].nombre} tiene descuento`);
    }
    console.log(carrito[x].nombre);

}