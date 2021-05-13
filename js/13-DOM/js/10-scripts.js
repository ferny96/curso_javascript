//GENERANDO HTML CON JAVASCRIPT

//EJEMPLO #1
//PRIMERA FORMA DE HACERLO
const enlace = document.createElement('a');

//AGREGANDO EL TEXTO
enlace.textContent = "Nuevo enlace";

//ANADIENDO HREF
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

enlace.classList.add("alguna-clase");

enlace.onclick = miFuncion;

console.log(enlace);

//SELECCIONAR LA NAVEGACION
//.appendChild coloca el enlace al final de la navegacion
const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace);


//COLOCAR EL ENLACE EN LA POSICION QUE DESEAMOS
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert("Diste clic");
}


//EJEMPLO #2
//Crear un card de forma dinamica
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria","concierto")
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");
console.log(parrafo3);

//CREAR DIV CON LA CLASE DE INFO
const info = document.createElement("div");
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//CREAR LA IMAGEN
const imagen = document.createElement("img");
imagen.src = "../img/hacer2.jpg";
imagen.alt = "Texto alternativo";

console.log(imagen);

//CREAR EL CARD
const card = document.createElement("div");
card.classList.add("card");


//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//INSERTAR EN EL HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);
