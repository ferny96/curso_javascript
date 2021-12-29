//EJEMPLO AVANZADO DE LO QUE SE PUEDE HACER CON JS
const botonFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

/*Haciendo uso de addEventListener.
La forma en como le decimos a un elemento que tiene que esperar
al interactuar con el es el addEventListener*/

/*Funciones anonimos: con las que no tienen nombre pero se
declaran con un array function*/
/*botonFlotante.addEventListener('click', () => {
    console.log('Diste clic en el boton');
});*/

//Tambien podemos hacerlo con una funcion
botonFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    //constains nos permite verificar si un elemento tiene o no una clase
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = "Idioma y Moneda";
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = "X Cerrar";
    }
    
}