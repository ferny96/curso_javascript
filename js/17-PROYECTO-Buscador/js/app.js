/*Variables*/
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

/*Contenedor para los resultados*/
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

/*Generar un objeto con la busqueda*/
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

/*Eventos*/
document.addEventListener("DOMContentLoaded", () => {
    /*Muestras los automoviles al cargar*/
    mostrarAutos(autos);

    /*Llena las opciones de anos*/
    llenarSelect();
});

/*EventLinstener para los select de busqueda
NOTA: change evento que verifica cuando se han efectuado cambios
en un select*/
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

/*Funciones*/
function mostrarAutos(autos){
    
    /*Elimina el HTML previo*/
    LimpiarHTML();
    
    autos.forEach(auto => {

        /*Aplicando destructuring*/
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        /*Insertar en el HTML*/
        resultado.appendChild(autoHTML);
    });
}

/*Limpiar HTML*/
function LimpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

/*Genera los anos del select*/
function llenarSelect(){
    
    /*Este codigo lo que hara es viajar en el tiempo, es decir,
    le restara 10 anos a la fecha que estamos, ejemplo: 2021 - 10 = 2012*/
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        /*Agrega las opciones de ano al select*/
        year.appendChild(opcion);
    }
}

/*Funcion que filtra en base a la busqueda*/
function filtrarAuto(){
    /*NOTA: filter su sintaxis es con arrow function, pero cuando no declaramos
    arrow function y le pasamos una funcion se convierte en un funcion de alto
    nivel, esto se considera como las bases de la programacion funcional*/
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    //console.log(resultado);

    /*Esta condicion tiene dos funciones:
    1. Sino se encuentra algun resultado que muestre un mensaje de que no se encontro
    */
    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

/*Funcion que muestra mensaje cuando no se han encontrado resultados*/
function noResultado(){

    LimpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay resultados, intenta con otros terminos de busqueda";
    resultado.appendChild(noResultado);
}


/*Funcion que se encarga de filtrar solo por la marca*/
function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    /*Esto lo que hace es que si seleccione una marca me traera solo los autos
    de esa marca*/
    if(marca){
        return auto.marca === marca;
    }

    /*Si no he seleccionado ninguna marca me traera todos los autos*/
    return auto;
}

/*Funcion que filtra por el ano del automovil*/
function filtrarYear(auto){

    const { year } = datosBusqueda;

    if(year){
        /*Si ejecutamos el codigo y seleccionamos el ano nos mostrara un arreglo
        vacio, esto sucede porque year es un tipo de dato string por ende toca
        convertirlo a tipo numero con parseInt(nombre_variable_o_funcion);*/
        return auto.year === year;
    }

    return auto;

}

/*Filtra autos por el precio minimo*/
function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;

    if(minimo){
        /*Este codigo cambia un poco en comparacion a los dos anteriores,
        ya que en la condicion cambia ya no seria un === sino un >=*/
        return auto.precio >= minimo;
    }

    return auto;
}

/*filtra autos por precio maximo*/
function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;

    if(maximo){
        /*Este codigo cambia un poco en comparacion a los tres anteriores,
        ya que en la condicion cambia ya no seria un === sino un <= */
        return auto.precio <= maximo;
    }

    return auto;
}

/*Funcion que filtra por puertas*/
function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }

    return auto;
}

/*funcion que filtra por transmision*/
function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }

    return auto;
}

/*funcion que filtra por color*/
function filtrarColor(auto){
    const { color } = datosBusqueda;

    if(color){
        return auto.color === color;
    }

    return auto;
}