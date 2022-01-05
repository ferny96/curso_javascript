/*Variables*/
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

/*EventListeners*/
eventListeners();

function eventListeners(){
    /*Cuando el usuario agrega un nuevo tweets*/
    formulario.addEventListener('submit', agregarTweet);

    /*Cuando el documento esta listo*/
    document.addEventListener('DOMContentLoaded', () => {
        /*Este codigo lo que hace es lo siguiente:
        esta parte: JSON.parse(localStorage.getItem('tweets')) busca los
        tweets en localStorage para convertirlos en JSON.parse pero si lo
        marca como null entonces que cree un arreglo vacio con []*/
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    });
}

/*Funciones*/
function agregarTweet(e){
    e.preventDefault();

    /*textArea donde el usuario escribe*/
    const tweet = document.querySelector('#tweet').value;

    /*validacion*/
    if(tweet === ''){
     
        mostrarError('Un mensaje no puede ir vacio');
        /*Evita que se ejecuten mas lineas codigo
        NOTA: este return funciona en un if cuando esta dentro
        de una funcion*/
        return;
    }

    /*NOTA: 'texto: tweet' seria igual a utilizat solo tweet (sin texto:)*/
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    /*Anadir al arreglo de tweets*/
    tweets = [...tweets, tweetObj];

    /*Una vez agregado hay que crear el HTML*/
    crearHTML();

    /*Reiniciar el formulario*/
    formulario.reset();

}

/*Mostrar mensaje de error*/
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
    /*Insertarlo en el contenido*/
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    /*Quitar mensaje despues de 3 segundos*/
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

/*Muestra un listado de los tweets*/
function crearHTML(){

    limpiarHTML();

    /*NOTA: length no es un metodo de null al igual forEach por lo cual se muestra
    un error, para ello en los eventLinsteners se hara la solucion con JSON.parse*/
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            /*Agregar un boton de eliminar*/
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            /*Anadir la funcion de eliminar*/
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
 
            //Crear el HTML
            const li = document.createElement('li');

            //anadir el texto
            li.innerText = tweet.tweet;

            /*Asignar el boton*/
            li.appendChild(btnEliminar);

            //Insertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

/*Agrega los tweets actuales al localStorage*/
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

/*Eliminar un tweet*/
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

/*Limpiar el HTML*/
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}