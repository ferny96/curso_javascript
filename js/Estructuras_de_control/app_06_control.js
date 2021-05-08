//OPERADOR && para revisar que se cumplan dos o mas condiciones
const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log("Si eres usuario y puedes pagar");
} else if(!usuario){
    console.log("No eres usuario, inicia sesion o crea una cuenta");
} else if(!puedePagar){
    console.log("No puedes pagar");
} else {
    console.log("No eres usuarios y no puedes comprar");
}