//Objetos dentro de otro objeto

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m",
        otrasMedidas: {
            altura: "2m",
            ancho: "5m"
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

//Algo mas complicado un objeto dentro de un objeto dentro de otro objeto
console.log(producto.informacion.otrasMedidas.altura)