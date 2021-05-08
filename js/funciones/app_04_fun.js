//Diferencia entre funciones y metodos
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //Esto es una funcion
console.log(numero1.toString()); //Esto es un metodo (ya que va primero el nombre de la variable y luego un punto con el metodo)

function sumar(){
    console.log(2 + 2);
}

sumar();