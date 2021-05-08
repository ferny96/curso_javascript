//Buenas practicas a la hora de evaluar booleanos
const autenticado = true;

if(autenticado){ //RECOMENDACION: no poner == true
    console.log("Si puedes ver Netflix");
}else {
    console.log("No, no puedes ver Netflix");
}

//Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');