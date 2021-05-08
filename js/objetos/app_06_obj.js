//Destructuring con objetos anidados
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

//Aplicando destructuring
/*En este punto const {nombre, informacion:{peso} } = producto; le estamos diciendo que nos interesa
otrasMedidas, al ir a la consola no nos imprimira la variable "informacion" para ello tendriamos que
crearla aparte*/
const {nombre, informacion, informacion:{ otrasMedidas, otrasMedidas: {altura}} } = producto;

/*Ahora en este punto si nos va a mostrar la variable
"informacion" const {nombre, informacion, informacion:{otrasMedidas} } = producto;*/

console.log(nombre);
console.log(informacion);
console.log(otrasMedidas);
console.log(altura);