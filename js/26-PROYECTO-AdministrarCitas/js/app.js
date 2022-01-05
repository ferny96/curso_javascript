/*variables de los campos del formulario*/
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

/*Interfaz de usuario - UI*/
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

/*Clases*/
class Citas {
    constructor(){
        /*Arreglo de citas*/
        this.Citas = [];
    }

    /*Metodo para agregar cita*/
    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
}

/*Esta clase no tiene constructor ya que solo se utilizara para la interfaz
de usuario*/
class UI {
    /*Alerta*/
    imprimirAlerta(mensaje, tipo){
        /*Crear el div*/
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('text-center', 'alert', 'display-block', 'col-12');

        /*Agregar clase en base al tipo de error*/

        if(tipo === 'error'){
            mensajeDiv.classList.add('alert-danger');
        } else {
            mensajeDiv.classList.add('alert-success');
        }

        /*Mensaje de error*/
        mensajeDiv.textContent = mensaje;
        
        /*Agregar al DOM (HTML)*/
        document.querySelector('#contenido').insertBefore(mensajeDiv, document.querySelector('.agregar-cita'));

        /*Quitar o eliminar la alerta despues de 5 segundos*/
        setTimeout(() => {
            mensajeDiv.remove();
        }, 5000);
    }

    /*metodo de imprimir las citas
    NOTA: Tambien podemos hacer destructuring dentro de los parentesis en los
    parametros, ejemplo:
    imprimirCitas({citas}){}*/
    imprimirCitas({citas}){
        citas.forEach((cita) => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            /*Scripting de los elementos de la cita*/
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            /*Aqui le pasamos el nombre de la mascota*/
            mascotaParrafo.textContent = mascota;

            /*Agregar los parrafos al divCita*/
            divCita.appendChild(mascotaParrafo);

            /*Agregar las citas al HTML*/
            contenedorCitas.appendChild(divCita);

        });
    }
}

/*Instanciando las clases de forma global*/
const ui = new UI();
const administrarCitas = new Citas();

/*Registro de eventos*/
eventListeners();
function eventListeners(){
    /*Cada vez que se ingresen datos a los campos, estos se iran agregando al
    objeto 'citaObj'*/
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
    
    formulario.addEventListener('submit', nuevaCita);
}

/*Objeto con la informacion de la cita
NOTA: El HTML tiene que tener la etiqueta 'name' definida con los nombres de las
propiedades del objeto. Ejemplo name='mascota' en el objeto tiene que ser mascota*/
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

/*Funciones*/
/*Agrega datos al objeto de citas*/
function datosCita(e){
    /*En este proyecto hacemos uso de la sintaxis de '[]' para poder acceder
    a las propiedades del objeto, ya que si utilizamos la otra va a tratar de
    acceder al evento de citaObj
    NOTA: La ventaja de esta funcion es que captura la data de cada input y
    lo va agregando al objeto*/
    citaObj[e.target.name] = e.target.value;

}

/*Valida y agrega una nueva cita a la clase citas*/
function nuevaCita(e){
    e.preventDefault();

    /*Extrae la informacion del objeto de citas*/
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    /*Validar*/
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas == '' ){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        /*Para que no se ejecuten las siguientes lineas*/
        return;
    }

    /*Generar un id unico*/
    citaObj.id = Date.now();

    /*Creando una nueva cita
    NOTA: Al momento de ejecutar el codigo la primera vez se llena el objeto
    pero al pasarlo la segunda vez se agregan los datos al objeto duplicados,
    es decir, lo que se agregago al inicio se reescribe con lo que se agrego
    la segunda vez y asi sucesivamente
    
    Para solucionar lo antes mencionado haremos lo siguiente:
    agregar {} y le pasamos una referencia del objeto y no el objeto
    completo, ejemplo: ({...citaObj})*/
    administrarCitas.agregarCita({...citaObj});

    /*Reiniciar el objeto para la validacion*/
    reiniciarObjeto();

    /*Reiniciar el fomulario*/
    formulario.reset();

    /*Mostrar el HTML de las citas*/
    ui.imprimirCitas(administrarCitas);
}

/*Funcionar para reiniciar el objeto citaObj, ya que sino lo hacemos, si hemos
agregado una cita al quedar los campos vacios y le damos clic en crear cita
registrara de nuevo la que teniamos*/
function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}