//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito");
const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

//Registro de los eventos
cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    /*Muestra en el carrito las compras*/
    document.addEventListener('DOMContentLoaded', () => {
        /*Si el usuario no ha agregado nada al carrito marcara un null por eso
        hay que agregar la parte de '|| []' que es un arreglo vacio*/
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    
    });

    /*Vaciar el carrito
    NOTA: Cuando es poco codigo lo recomendable es hacerlo de esta manera con funcion anonima
    y cuando es mucho codigo hacerlo de la forma como lo tenemos arriba*/
    vaciarCarrito.addEventListener('click', () => {
        //Reseteamos el arreglo
        articulosCarrito = [];

        //Volvemos a imprimir el HTML
        limpiarHTML();
    });
}

//Funciones
function agregarCurso(e){
    e.preventDefault();
    //Verificar si el elemento posee la clase
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute("data-id");

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        /*Iterar sobre el carrito y mostrar su HTML*/
        carritoHTML();
    }
}


//Lee el contenido del HTML al que le dimos clic y extrae la informacion del curso
function leerDatosCurso(curso){
    
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        tituto: curso.querySelector("h4").textContent,
        /*De la clase precio seleccionamos el span*/
        precio: curso.querySelector(".precio span").textContent,
        /*Para traer el id de cada curso seleccionamos la etiqueta "a"
        y con getAttribute accedemos a el mediante data-id*/
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1

    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //Retorna el objeto actualizado
            } else {
                return curso; //Retorna los objetos que no son los duplicados
            }
        });

        articulosCarrito = [...cursos];

    } else {
        //Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    }

    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        //Para estos casos es mejor hacer uso de destructuring
        const { imagen, tituto, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>
            ${tituto}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    /*Sincronizacion con el localStorage*/
    sincronizarStorage();

}

/*Anadiendo localStorage al carrito de compras*/
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Limpiar HTML
function limpiarHTML(){
    //Forma lenta de limpiar el HTML
    //contenedorCarrito.innerHTML = '';

    //Para un mejor penformace hacer uso de lo siguiente
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    /*Explicacion del codigo anterior:
    Lo que hace es que verifica si hay hijo, al existir hijos eliminara uno y
    continuara en ejecucion, hara lo mismo de nuevo y cuando ya no hayan hijos
    el while dejara de ejecutarse, entonces este codigo hace que mi app sea mas
    rapida*/
}