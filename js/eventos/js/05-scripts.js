/*Eventos al dar scroll con el mouse
NOTA: window es la ventana global*/
window.addEventListener('scroll', () => {
    console.log('SCROLLING')
})

//Verificar el scroll verticalmente
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    //Retorna el scroll en pixeles
    console.log(scrollPX);
});

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');

    /*Nos dice en que posicion se encuentra un elemento
    .getBoundingClientRect posee mucha informacion*/
    const ubicacion = premium.getBoundingClientRect();

    //
    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible')
    } else {
        console.log('Aun no, da mas scroll')
    }

})