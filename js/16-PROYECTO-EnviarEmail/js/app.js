/*Variables*/

const btnEnviar = document.querySelector("#enviar");
btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

/*Variables para campos*/
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners(){
    /*Cuando la app arranca*/
    document.addEventListener('DOMContentLoaded', iniciarApp);

    /*Campos del fomrulario*/
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    /*Enviar email*/
    formulario.addEventListener('submit', enviarEmail);

    /*Resetea el formulario*/
    btnReset.addEventListener('click', resetearFormulario);
}


/*Funciones*/
function iniciarApp(){
    btnEnviar.ariaDisabled = true;
    /*Bloquear el boton enviar para que los usuarios no puedan
    interactuar con el, sino los campos estan vacios*/
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

/*Valida el formulario*/
function validarFormulario(e){

    if (e.target.value.length > 0){

        //Elimina los errores
        const error = document.querySelector('p.error');
        
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border','border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    /*Validar el campo email*/
    if(e.target.type === 'email'){
        /*indexOff lo que hara es buscar en el string si
        existe la @, esta validacion no es la mejor, lo
        correcto y mas profesional es hacer uso de una
        expresion regular*/
        //const resultado = e.target.value.indexOf('@');

        /*Para poderlo implementar haremos lo siguiente:
        hacemos uso de test y entre parentesis le pasamos lo
        que deseamos validar en este caso el email*/
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            
            if(error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('El email no es valido');
        }
    }

    /*NOTA: scoop es como el alcance de la variable, es decir, solo se puede
    acceder a ella solo donde se declaro ejemplo: en un if*/
    
    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
       btnEnviar.disabled = false;
       btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

/*Mostrar error*/
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');

    /*NOTA: Una mejor manera cuando vamos a hacer uso de una funcion en multiples
    eventos es hacer uso de una variable en la funcion en este caso 'mensaje' y asi
    le vamos a pasar el mensaje en donde llamemos a nuestra funcion*/
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    /*NOTA: length solo esta disponible cuando utilizamos querySelectorAll
    este codigo nos ayuda que cuando entremos a los tres campos y que los
    dejemos en blanco el mensaje de error no se imprima 3 veces sino solo 1*/
    if(errores.length === 0){
        /*De esta forma el mensaje de error se imprime al final*/
        formulario.appendChild(mensajeError);

        /*Con este lo imprimimos donde queremos, en este caso se vera arriba
        de la etiqueta Para:*/
        // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));

    }

}

/*Enviar email*/
function enviarEmail(e) {
    e.preventDefault();

    /*Mostrar el spinner*/
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    
    /*Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    NOTA: el setTimeout siempre es un arrow function
    el setInterval tambien es una opcion solo que este se puede
    ejecutar dependiendo la cantidad de tiempo mientras que setTimeout
    solo una vez*/
    setTimeout( () => {
        spinner.style.display = 'none';

        //Mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio corrctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        /*Agregar el mensaje al HTML, antes del spinner*/
        formulario.insertBefore(parrafo, spinner);

        setTimeout( () => {
            /*Eliminar el mensaje de exito*/
            parrafo.remove();

            resetearFormulario();
        }, 5000)

    }, 3000);
}


//Funcion que resetea el formulario
function resetearFormulario(){
    formulario.reset();

    /*Esto es para bloquear de nuevo el boton enviar*/
    iniciarApp();
}