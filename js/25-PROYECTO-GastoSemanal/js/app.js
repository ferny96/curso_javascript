/*Variables y selectores*/
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

/*Eventos*/
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
    gastoListado.addEventListener('click', eliminarGasto)
}

/*Clases*/
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    /*Metodos*/
    nuevoGasto(gasto){
        /*Generamos una copia del arreglo vacio al momento de generar un nuevo
        gasto, esto con el fin de recuperar lo realizado en la operacion anterior*/
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    /*Este metodo lo que hara es que ira disminuyendo el saldo que tenemos y lo
    imprimira en el apartado Restante*/
    calcularRestante(){
        /*Va iterando sobre todo el arreglo*/
        const gastado = this.gastos.reduce( (total, gasto) => {
            total + gasto.cantidad, 0
        });

        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
    } 
}

class UI{
    insertarPresupuesto(cantidad){
        /*Extrayendo los valores*/
        const {presupuesto, restante} = cantidad;

        /*Agregando al HTML*/
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        /*Crear el div*/
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        /*Validando el tipo de mensaje*/
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        /*Mensaje de error*/
        divMensaje.textContent = mensaje;

        /*Insertar en el HTML*/
        document.querySelector(".primario").insertBefore(divMensaje, formulario);

        /*Quitar el mensaje despues de 3 segundos*/
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){
        /*Elimina el HTML previo*/
        this.limpiarHTML();

        /*Iterar sobre los gatos*/
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            /*Crear un LI*/
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            /*NOTA: En nuevas versiones de JS, es recomendable hacer uso de .dataset
            ya que le agrega el "data-", por lo cual podemos dejar de hacer uso de
            ".setAttribute('data-id', nombre_variable)"*/
            nuevoGasto.dataset.id = id;

            /*Agregar el HTML del gasto*/
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
            
            /*Boton para borrar el gasto*/
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);

            /*Agregar al HTML*/
            gastoListado.appendChild(nuevoGasto);

        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    /*Actualiza el saldo restante*/
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const { presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        /*Comprobar 25%*/
        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        /*Si el total es 0 o menor a 0*/
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

/*Instanciar*/
const ui = new UI();
let presupuesto;

/*Funciones*/
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        /*Recargar la ventana actual*/
        window.location.reload();
    }

    /*Instanciando presupuesto*/
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

/*Funcion que anade gastos*/
function agregarGasto(e){
    e.preventDefault();

    /*Leer los datos del formulario*/
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    /*Validar que los dos campos no esten vacios*/
    if(nombre ===''|| cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;

    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');

        return;
    }

    /*Generar un objeto con el gasto
    NOTA: Esto es lo contrario a un destructuring, conocido como
    object literal*/
    const gasto = { nombre, cantidad, id: Date.now() }

    /*Anade un nuevo gasto*/
    presupuesto.nuevoGasto(gasto);
 
    /*Si el gasto fue agregado mostrara el mensaje de exito*/
    ui.imprimirAlerta('Gasto agregado correctamente');

    /*Imprimir los gastos, los agregamos al listado (li)*/
    const { gastos, restante } = presupuesto;
    
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    /*Comprobamos todo el presupuesto
    NOTA: Le pasamos 'presupuesto' porque vamos a comprbar
    lo que hemos gastado junto con el presupuesto*/
    ui.comprobarPresupuesto(presupuesto);

    /*Luego reiniciamos el formulario*/
    formulario.reset();

}

function eliminarGasto(id){
    /*Elimina los gastos del objeto*/
    presupuesto.eliminarGasto = id;

    /*Elimina los gastos del HTML*/
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}