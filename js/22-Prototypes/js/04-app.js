/*Heredar un prototype*/

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

/*NOTA: Personas y Cliente comparten atributos similares como:
nombre y saldo, por consiguiente lo correcto seria heredar de cliente
nombre y saldo a Persona, esto nos evita tener tanto codigo repetido.

Para ellos haremos lo siguiente:
Eliminamos los atributos de Persona: this.nombre y this.saldo, los
sustituimos por Cliente.call(this, nombre, saldo); y de esta forma
es como se hereda de Cliente a Persona*/

function Persona(nombre, saldo, telefono){
    //this.nombre = nombre;
    //this.saldo = saldo;
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

/*NOTA: Si deseamos heredar las funciones debemos de hacerlo de la
siguiente manera, esto se hace antes de crear una INSTANCIA esto es
muy importante de tener en cuenta

En este ejemplo estamos pasando de Cliente a Persona
Object.create es una funcion disenada exclusivamente para copiar
prototypes*/
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

/*Instanciar el objeto Persona*/
const daniel = new Persona('Fernnado', 400, 96885556);

console.log(daniel);

/*Al heredar las funciones de Clientes podemos hacer lo siguiente*/
console.log(daniel.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El numero de telefono de la persona es ${this.telefono}`;
}

console.log(daniel.mostrarTelefono());