//THIS en los OBJETOS
//THIS es una forma de refiere a si mismo.

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();

console.log();