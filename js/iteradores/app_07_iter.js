/*FOR...OF: itera sobre arreglos

    SINTAXIS

    for (let nombre_variable of nombre_arreglo){
        lo que se va a imprimir o mostrar
    }
*/

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Tablet", precio: 1000},
    {nombre: "Celular", precio: 5000},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Cargador", precio: 300},
    {nombre: "Teclado", precio: 400}];

for(let pendiente of pendientes){
    console.log(pendiente);
}

for ( let producto of carrito){
    console.log(producto.nombre);
}