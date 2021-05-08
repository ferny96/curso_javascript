//FOR...OF: itera sobre arreglos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "tablet",precio: 1000},
    {nombre: "Celular",precio: 5000},
    {nombre: "Audifonos",precio: 200},
    {nombre: "cargador",precio: 300},
    {nombre: "teclado",precio: 400}];

for(let pendiente of pendientes){
    console.log(pendiente);
}

for ( let producto of carrito){
    console.log(producto.nombre);
}