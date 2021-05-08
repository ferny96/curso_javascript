//Diferencia entre function expression y declaration

//Declaracion de funcion: en esta se puede acceder antes de inicializarla
sumar();

function sumar (){
    //CUERPO DEE LAFUNCION
    console.log(2 + 2);
}



//Expresion de funcion: no permite acceder a ella sino se ha inicializado
sumar2();

const sumar2 = function(){
    console.log(4 + 4);
}

