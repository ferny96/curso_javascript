//Detener la ejecucuion de un IF con una condicion
const autenticado = true;

if(autenticado){
    console.log("Autenticado");
}

const puntaje = 450;

function revisarPuntaje(){

    if(puntaje > 400){
        console.log("Excelente...");
        return;//Al cumplirse la condicion no continua evaluando y se sale, por eso solo va a imprimir una
                //de las que tengo
    }
    
    if(puntaje > 300){
        console.log("Buen puntaje...Felicidades");
        return;
    }

}

revisarPuntaje();