//SWITCH
const metodoPago = "efectivo";

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'tarjeta':
        console.log(`Pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pago con ${metodoPago}`);
        break;
    default:
        console.log("Aun no haz seleccionado un metodo de pago");
        break;
}

//TAMBIEN SE PUEDEN UTILIZAR FUNCIONES CON SWITCH
function pagar(){
    console.log("Pagando...");
}