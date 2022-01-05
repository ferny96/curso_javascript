/*Programacion orientada a objetos POO
NOTA: Los prototype evolucionaron en la POO con las clases

Existen dos formas de crear clases en JavaScript*/

/*1 forma: class declaration, esta es mas popular
NOTA: En c# y java el constructor tiene el mismo nombre de la
clase, en JS utilizamos constructor*/
class Cliente{
    constructor(nombre, saldo){
        /*aqui pasamos los valores que tendra el objeto una vez ha sido
        instanciado*/
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

/*instanciar la clase*/
const fernando = new Cliente('Fernando', 400);
console.log(fernando);

/*2 forma: class expresion*/
const Cliente2 = class {
    constructor(nombre, saldo){
        /*aqui pasamos los valores que tendra el objeto una vez ha sido
        instanciado*/
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fernando2 = new Cliente2('Fernando', 600);
console.log(fernando2);