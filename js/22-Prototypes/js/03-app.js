/*NOTA: Los prototype nos sirve para crear funciones exclusivas
de las instancias de nuevos clientes

Los prototype son utilizados como metodos en los objetos

PODEMOS crear los prototypes que sean necesarios para un
determinado objeto

NOTA: con los prototype no se suele utiliza array function sino
function debido a que estas buscan dentro del mismo obejto
mientras que los array function buscan en la ventana global
1. function: busca en el objeto actual
2. array function: busca en la ventana global

Podemos utilizar array function siempre y cuando no hagamos
referencia con .this*/

/*Esta funcion es el constructor, que son basicamente los datos
requeridos para crear un nuevo objeto en este caso de cliente*/
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

/*primero el nombre de la clase o el objeto, en este caso
Cliente luego .prototype y luego creamos o definimos una nueva
funcion, propiedad o proto en este caso .tipoCliente*/
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

/*Podemos hacer referencia a prototypes dentro de otros
prototype*/
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

/*Instanciar el objeto*/
const fer = new Cliente('Fernando', 30000);
/*Aqui invocamos a la nueva funcion .tipoCliente*/
console.log(fer.tipoCliente());
console.log(fer.nombreClienteSaldo());
/*Los prototype pueden tomar argumentos*/
fer.retiraSaldo(1000);
console.log(fer.nombreClienteSaldo());

/*Los prototype son exclusivos del objeto o clase para el que
fueron creados, en nuestro caso tenemos Cliente con un prototype
.tipoCliente pero si creamos un objeto llamado Empresa y ha este
no le creamos un prototype, no tendra acceso a .tipoCLiente ya
que es exclusivo de Cliente, para que pueda tener acceso a
prototype debemos de crearle uno que podria ser .tipoEmpresa*/