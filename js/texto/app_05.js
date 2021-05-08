//Repeat y Split
const producto = "Monitor 20 Pulgadas";

//Repeat, permite repetir una cadena de texto
const precio = " en promocion".repeat(3); //Si ponemos 2.4 lo va a redonder a 2
console.log(precio);



//Split, permite dividir un string
const actividdad = "Estoy aprendiendo JavaScript moderno";
console.log(actividdad.split(" "));

const programacion = "PHP, JavaScript, MongoDB, MySQL, MariaDB";
console.log(programacion.split(","));

const programacion2 = "PHP. JavaScript. MongoDB. MySQL. MariaDB";
console.log(programacion2.split("."));

const tweet = "Estoy aprendiendo #JSModernoConJuan";
console.log(tweet.split("#"));