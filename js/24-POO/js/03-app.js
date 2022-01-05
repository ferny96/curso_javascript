/*Herencia:
NOTA: Heredar los atributos de otra clase*/

class Cliente{
    constructor(nombre, saldo){
        
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

/*Heredando
NOTA: Cuando vamos a heredar hacemos uso de Extends nombre_clase de la
que deseamos realizar la herencia.
En otras palabras Empresa vendria siendo hijo de Cliente.
Cuando heredamos si escribimos un metodo de la clase padre en la clase hijo,
este ultimo va a reescribir el del padre*/
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        /*Nos mostrara error la consola al utilizar this.nombre y this.saldo
        ya que estos se heredan lo que hay que hacer es mandarlas a buscar lo
        cual se hace con super(nombre_de_los_parametros);*/
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    /*Metodo heredado de Cliente a Empresa
    NOTA: Se reescribe de la clase Cliente*/
    static bienvenida() {
        return 'Bienvenido al cajero de Empresas';
    }

}

/*instanciar la clase*/
const fernando = new Cliente('Fernando', 400);
const empresa = new Empresa('Daniel', 1000, 96885556, 'Aprendiendo JS');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());