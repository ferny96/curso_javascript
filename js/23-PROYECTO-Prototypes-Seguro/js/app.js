/*Constructores*/
function Seguro(marca, ano, tipo){
    this.marca = marca;
    this.ano = ano;
    this.tipo = tipo;
}

/*No le pasamos ningun parametro ya que este se encargara de la parte
de la interfaz del proyecto*/
function UI (){

}

/*Prototypes*/
/*Este prototype del constructor UI llena las opciones de los anos
en el select*/
UI.prototype.llenarOpciones = () => {
    /*Aqui obtenemos la hora con max, con min le restamos a max
    20 anos*/
    const max = new Date().getFullYear(),
        min = max - 20;

    /*Variable del select para poderlo llenar con los anos*/
    const seleccionAno = document.querySelector('#year');
    
    /*Con el for iteramos y cargamos en el select los anos*/
    for(let i = max; i > min; i--){
        /*Se crea el select (option)*/
        let opcion = document.createElement('option');
        /*Se cargara el select (option) con los anos*/
        opcion.value = i;
        opcion.textContent = i;
        /*Con esto aparecera en el select los anos*/
        seleccionAno.appendChild(opcion);
    }
}

/*Muestra alertas en pantalla
NOTA: Recordando que podemos hacer uso de function o ()=> {}
pero lo recomendable es ser consistente y solo hacer uso de uno,
si vamos a acceder a propiedades del objeto lo mejor es hacer
uso de () => {}*/
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje','mt-10');

    div.textContent = mensaje;

    /*Insertar en el HTML
    NOTA: La siguiente variable no importa que se llame igual
    que otra que esta en una funcion mas abajo ya que no son globales
    sino internas de cada funcion*/
    const formulario = document.querySelector('#cotizar-seguro');
    /*NOTA: Al hacer uso de insertBefore el primer parametro es el nuevo
    nodo y el nodo de referencia donde queremos insertarlo*/
    formulario.insertBefore(div, document.querySelector('#resultado'));

    /*Limpiar el mensaje despues de tres segundos*/
    setTimeout(() => {
        div.remove();
    }, 3000);
}

/*Mostrar el resultado de la cotizacion*/
UI.prototype.mostrarResultado = (total, seguro) => {

    const { marca, ano, tipo } = seguro;

    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    /*Crear el resultado*/
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
    <p class="font-bold">Total: <span class="font-normal"> $ ${total}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo}</span></p>
    <p class="font-bold">Ano: <span class="font-normal"> ${ano}</span></p>
    `;

    const resultadoDiv = document.querySelector("#resultado");

    /*Mostrar el spinner*/
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    /*despues de 3 segundo se pierde el spinner*/
    setTimeout(() => {
        spinner.style.display = 'none';

        /*Una vez se elimina el spinner se muestra el resultado
        de la cotizacion*/
        resultadoDiv.appendChild(div);

    },3000);
}

/*Realiza la cotizacion con los datos
NOTA: En este no se hace uso de arrow function sino de function
porque hay que acceder a los datos del objeto*/
Seguro.prototype.cotizarSeguro = function () {
    /*
    Opciones
    1 = americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    /*Leer el ano*/
    const diferencia = new Date().getFullYear() - this.ano;

    /*Cada ano que la diferencia es mayor el costo va a reducirse un 3% el costo del seguro*/
    cantidad -= ((diferencia * 3 ) * cantidad) / 100;

    /*1. Si el seguro es basico se multiplica por un 30% mas
    2. Si el seguro es completo se multiplica por un 50% mas*/
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

/*Instanciar UI*/
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    /*Llena el select con los anos al cargar el HTML*/
    ui.llenarOpciones();
});

eventListeners();
function eventListeners(){
    /*NOTA: Los selectores es mejor no hacerlos dentro de un
    prototype*/
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    /*Leer la marca seleccionado*/
    const marca = document.querySelector('#marca').value;

    /*Leer el ano seleccionado*/
    const ano = document.querySelector('#year').value;

    /*Leer el tipo de cobertura
    NOTA: Para leer el valor de un chek con JS lo hacemos de la
    siguiente manera*/
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || ano === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }

    ui.mostrarMensaje('Cotizando','exito');

    /*Ocultar las cotizaciones previas*/
    const resultados = document.querySelector('#resultado div');

    if(resultados != null){
        resultados.remove();
    }

    /*Instanciar el seguro*/
    const seguro = new Seguro(marca, ano, tipo);
    const total = seguro.cotizarSeguro();

    /*Utilizar el prototype que va a cotizar.*/
    ui.mostrarResultado(total, seguro);

}