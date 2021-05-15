//EJEMPLO AVANZADO DE LO QUE SE PUEDE HACER CON JS
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");


/*btnFlotante.addEventListener('click', () => {
    console.log("Diste clic en un boton");
});*/

//TAMBIEN PODEMOS HACERLO ASI

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){

    //COMO SABER SI EXISTE UNA CLASE O ID EN EL HTML (se hace uso de contains)
    if(footer.classList.contains('activo')){
        footer.classList.remove("activo");
        this.classList.remove("activo");
        this.textContent = "Idioma y Moneda";
    } else {
        footer.classList.add("activo");
        this.classList.add("activo");
        this.textContent = "X Cerrar";
    }

}