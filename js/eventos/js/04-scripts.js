//EVENTOS EN EL FORMULARIO
const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();//DETIENE LA ACCION POR DEFECTO

    console.log(e.target.method)
    console.log(e.target.action)
});


//CON DECLARACION DE LA FUNCION
formulario.addEventListener('submit', validarFormulario);

function validarFormulario (e){
    e.preventDefault();

    console.log(e.target.method)
}