//GENERANDO HTML CON JAVASCRIPT

//EJEMPLO #1
//Primera forma de hacerlo, para la creacion de elementos no es key sensitive
const enlace = document.createElement('a');

//Agregando el texto al enlace creado anteriormente
enlace.textContent = "Nuevo enlace";

//Añadiendo href al enlace
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

//Agregando alguna clase
enlace.classList.add("alguna-clase");

enlace.onclick = miFuncion;

console.log(enlace);

//SELECCIONAR LA NAVEGACION
/*.appendChild: Es como agregarle un hijo a la navegacion y coloca
el enlace al final de la navegacion*/
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace);

/*insertBefore: Colocar el enlace en la posicion que deseamos,
esta forma requiere dos argumentos:
1. El elemento que deseamos agregar
2. Donde deseamos mostrarlo*/
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert("Diste clic");
}


//EJEMPLO #2
//Crear un card de forma dinamica
//Parrafo 1
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria","concierto")
console.log(parrafo1);

//Parrafo 2
const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");
console.log(parrafo2);

//Parrafo 3
const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//CREAR DIV CON LA CLASE DE INFO
const info = document.createElement("div");
info.classList.add("info");

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//CREAR LA IMAGEN
const imagen = document.createElement("img");
imagen.src = 'img/hacer2.jpg';

//Texto alternativo
imagen.alt = ("Texto alternativo");

/*Si estuviese haciendo uso de botstrap sería de la siguiente
manera: está clase es nativa de botstrap img-fluid, dicha clase
hace que se vuelvan responsive*/
// imagen.classList.add("img-fluid");

//CREAR EL CARD
const card = document.createElement("div");
card.classList.add("card");

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//INSERTAR EN EL HTML
const contenedor = document.querySelector(".hacer .contenedor-card");
//contenedor.appendChild(card);

//También el poder utilizar la forma de colocarlo donde deseamos
contenedor.insertBefore(card, contenedor.children[0]);