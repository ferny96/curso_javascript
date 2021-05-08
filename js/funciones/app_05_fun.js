//Funciones que toman parametros y argumentos

function sumar (numero1, numero2){//numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}

sumar(10, 10);//10 y 10 son argumentos
sumar(200, 300);

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Fernando','Rodriguez');