/*NOTA: Para proyectos pequenos no es recomendable trabajar con
los prototype.

Funcion para la informacion del cliente*/
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const fernando = new Cliente('Fernando', 1000000);

/*funcion que muestre el nombre y el saldo*/
function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(fernando));

/*Funcion para la informacion de la empresa*/
function Empresa (nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const cjt = new Empresa('Fernando', 120, 'en linea');

console.log(formatearEmpresa(cjt));