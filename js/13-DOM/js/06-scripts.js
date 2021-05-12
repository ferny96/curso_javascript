//MODIFICAR TEXTO E IMAGENES CON JS
const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//COMO ACCEDER AL TEXTO, TRES FORMAS
//PRIMERA FORMA:
console.log(encabezado.innerText);//Si en el CSS visibility:hidden: no lo va a encontrar

//SEGUNDA FORMA:
console.log(encabezado.textContent);//Si lo va a encontrar

//TERCERA FORMA:
console.log(encabezado.innerHTML);//Se trae el HTML

//Podemos aplicar el chaining o encadenamiento
const encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado2);

document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

//SELECCIONAR UNA IMAGEN
const imagen = document.querySelector(".card img");
// console.log(imagen);

//CAMBIAR UNA IMAGEN
imagen.src = 'js/13-DOM/img/hacer2.jpg';