/*FOR...IN: itera sobre objetos

    SINTAXIS:

    for (let nombre_variable in nombre_objeto){
        Lo que se desea imprimir o mostrar
    }

*/

const automovil = {
    modelo:'Camaro',
    ano:1969,
    motor:'6.0'}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

/*OTRO ITERADOR PARA OBJETOS (empleado en ES7)

    SINTAXIS:

    for (let [variable1, variable2] of Object.entries(nombre_objeto)){
        console.log(`${variable1}: ${variable2}`);
    }

*/

for(let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave}: ${valor}`);
}