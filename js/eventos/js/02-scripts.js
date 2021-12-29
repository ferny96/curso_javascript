//Eventos con el MOUSE
const nav = document.querySelector(".navegacion");

//Registrar un evento
nav.addEventListener('click', () => {
    console.log("Clic en nav");
});

//mouseenter: Cuando posicionamos el puntero en la navegacion
nav.addEventListener('mouseenter', () => {
    console.log("Entrando a la navegacion");

    nav.style.backgroundColor = "white";
});

//mouseout: cuando sacamos el puntero del area
nav.addEventListener('mouseout', () => {
    console.log("Saliendo de la navegacion");

    nav.style.backgroundColor = 'transparent';
});

//mousedown: similar a click
nav.addEventListener('mousedown', () => {
    console.log("Entrando a la navegacion");
});

//mouseup: se ejecuta cuando se da clic y se suelta
nav.addEventListener('mouseup', () => {
    console.log("Entrando a la navegacion");
});

//dblclick: doble click
nav.addEventListener('dblclick', () => {
    console.log("Diste doble clic");
});