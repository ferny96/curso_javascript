//Pasar parametros a un arrow functions
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} con J. de la torre y ${tecnologia2}`);
}

aprendiendo('JavaScript','React');

//ARROW FUNCTION
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;//Cuando ya vamos a pasar dos parametros
                                                                //es necesario el parentesis del arrow
                                                                //function

console.log(aprendiendo2('JavaScript','Node.js'));