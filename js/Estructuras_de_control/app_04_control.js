//ELSE IF
const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar){
    console.log("Si podemos pagar");
}else if(tarjeta){
    console.log("Si puedo pagar porque tengo la tarjeta");
}else if(cheque){
    console.log("Pago con cheque");
}else{
    console.log("No podemos pagar, fondos insuficientes");
}