//EVENTOS CON EL MOUSE
const nav = document.querySelector(".navegacion");

//REGISTRAR UN EVENTO
nav.addEventListener('click', () => {
    console.log("Clic en nav");
});

//mouseenter
nav.addEventListener('mouseenter', () => {
    console.log("Entrando a la navegacion");

    nav.style.backgroundColor = "white";
});

//mouseout: cuando sacamos el punto del area
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

//dblclick: double click
nav.addEventListener('dblclick', () => {
    console.log("Diste doble clic");
});