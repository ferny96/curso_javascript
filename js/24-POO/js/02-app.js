class Cliente{
    constructor(nombre, saldo){
        
        this.nombre = nombre;
        this.saldo = saldo;
    }

    /*Creando un metodo para la clase (aunque al final terminan siendo
        funciones)*/
    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }

    /*Propiedades estaticas
    NOTA: estas para mostrarlas no necesitamos de una instancia*/
    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}


/*instanciar la clase*/
const fernando = new Cliente('Fernando', 400);
console.log(fernando.mostrarInformacion());
console.log(Cliente.bienvenida());

/*2 forma: class expresion*/
const Cliente2 = class {
    constructor(nombre, saldo){
        
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fernando2 = new Cliente2('Fernando', 600);
console.log(fernando2);