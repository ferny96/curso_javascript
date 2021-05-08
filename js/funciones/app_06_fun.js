//Parametros por default
/* Su funcion es que cuando no se tiene presente un valor (en este caso un apellido) se imprime lo que
   esta despues del igual, ahora si le agregamos un apellido lo que esta despues del igual no se imprime
   es sustituido por el apellido */
function saludar(nombre = "Desconocido", apellido = ""){
    console.log(`Hola ${nombre} ${apellido}`);
}

//Argumentos
saludar();