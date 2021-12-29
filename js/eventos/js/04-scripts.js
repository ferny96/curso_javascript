//Eventos en el formulario: submit
const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', (e) => {
    /*e.preventDefault: Detiene la accion por defecto, previene la accion que realizaria
    el elemento en cuestion*/
    e.preventDefault();

    console.log(e.target.method)
    console.log(e.target.action)
});


/*Declaracion de la funcion
Sintaxis con declaracion de la funcion:
for.addEventListener('submit u otro', nombre_funcion);*/
formulario.addEventListener('submit', validarFormulario);

function validarFormulario (e){
    e.preventDefault();

    console.log(e.target.method)
}