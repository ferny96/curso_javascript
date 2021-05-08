//FOR...IN: itera sobre objetos

const automovil = {
    modelo:'Camaro',
    ano:1969,
    motor:'6.0'}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

//OTRO ITERADOR PARA OBJETOS (empleado en ES7)
for(let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave}: ${valor}`);
}