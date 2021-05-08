//Funciones que retornan valores
function sumar(a, b){
    return a + b;
}

const resultado = sumar(2,4);
console.log(resultado);

//Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;

}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(500);
total = agregarCarrito(200);

const totalPagar = calcularImpuesto(total);

console.log(`El total es: ${total}`);
console.log(`El total a pagar con el impuesto es de: ${totalPagar}`);
