//Arrow Functions
//EXPRESION DE LA FUNCION
const aprendiendo = function(){
    console.log("Aprendiendo JS");
}

aprendiendo();

//ARROW FUNCTION
//Aqui ya ni seria necesario el console.log
const aprendiendo2 = () => {
    console.log("Aprendiendo JS");
}

aprendiendo2();

//Seria asi
const aprendiendo3 = () => 'Aprendiendo JS';

console.log(aprendiendo3());