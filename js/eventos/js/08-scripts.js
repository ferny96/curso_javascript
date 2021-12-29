//Prevenir event bubbling con un metodo
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria","concierto")

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

/*tambien podria ser con un array function*/
parrafo3.onclick = function(){
    nuevaFuncion(1);
}

//Crear div con la clase info
const info = document.createElement("div");
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//CREAR LA IMAGEN
const imagen = document.createElement("img");
imagen.src = "../img/hacer2.jpg";
imagen.alt = "Texto alternativo";

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

function nuevaFuncion(id){
    console.log('Desde nueva funcion')
}