/*Propiedades privadas en JS*/

class Cliente{

    /*Para que una propiedad sea privada lo que debemos de hacer es
    poner antes del nombre de la propiedad el signo '#'*/

    #nombre;

    constructor(nombre, saldo){
        
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const fer = new Cliente('Fernando', 1200);
console.log(fer.mostrarInformacion());

/*Tambien lo podriamos trabajar asi*/
class Cliente2{

    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const dani = new Cliente2();
dani.setNombre('Daniel Fernando Aguilar');
console.log(dani.getNombre());