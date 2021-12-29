//DETECTAR CUANDO EL HTML ESTA LISTO
//DOMContentLoaded: Evento que se ejecuta una vez se ha descargado todo el HTML

/*Sintaxis addEventListener:
document.addEventListener(aqui el evento entre "" o sencillas, aqui va la funcion anonima () => { aqui la logica })*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Documento listo");
});