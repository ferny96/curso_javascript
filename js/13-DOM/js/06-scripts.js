//MODIFICAR TEXTO E IMAGENES CON JS
const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//COMO ACCEDER AL TEXTO, TRES FORMAS
//PRIMERA FORMA:
/*Si en el CSS tenemos habilitado visibility:hidden; no lo va a
encontrar, ya que esto hace invisible al texto*/
console.log(encabezado.innerText);

//SEGUNDA FORMA:
console.log(encabezado.textContent);//Si lo va a encontrar

//TERCERA FORMA:
console.log(encabezado.innerHTML);//Se trae el HTML

//Podemos aplicar el chaining o encadenamiento
const encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado2);

//Cambiar el texto aplicando el chaining o encadenamiento
document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

//SELECCIONAR UNA IMAGEN
const imagen = document.querySelector(".card img");
// console.log(imagen);

//CAMBIAR UNA IMAGEN
imagen.src = 'js/13-DOM/img/hacer2.jpg';