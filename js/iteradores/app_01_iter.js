//FOR LOOP
for(let i = 0; i < 10 ;i++){
    console.log(`Numero ${i}`);
}

//IDENTIFICAR NUMEROS PARES
for(let n = 1; n <= 20; n++){
    if( n % 2 == 0){
        console.log(`El numero ${n} es par`)
    }else{
        console.log(`El numero ${n} es impar`);
    }
}

const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}
];

for( let m = 0 ; m < carrito.length ; m++){
    console.log(carrito[m].nombre);
}