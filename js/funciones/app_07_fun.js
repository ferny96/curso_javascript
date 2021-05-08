//Como se comunican las funciones
iniciarAPP();

function iniciarAPP(){
    console.log('iniciando app');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    
    usuarioAutenticado('Fernando');
}

function usuarioAutenticado(nombre){
    console.log('Autenticando usuario, espere...');
    console.log(`Usuario ${nombre} autenticado con exito`);
}