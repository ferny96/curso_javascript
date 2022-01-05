/*NOTA: Los prototypes no son faciles de entender y crear, por eso
hay que practicar
NOTA: Los prototype tienen bastante relacion con los obejtos, todos
los objetos tienen un prototype*/

/*Objeto object literal, esta forma es menos dinamica*/
const cliente = {
    nombre: 'Fernando',
    edad: 25
}

/*Para crear objetos reutilizables debemos de hace lo siguiente*/
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const fernando = new Cliente('Fernando', 1000000);

console.log(fernando);