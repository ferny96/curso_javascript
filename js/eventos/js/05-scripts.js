//EVENTOS AL DAR SCROLL CON EL MOUSE
window.addEventListener('scroll', () => {
    console.log('SCROLLING')
})

//VERIFICAR EL SCROLL VERTICALMENTE
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);
})

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();//NOS DICE EN QUE POSICION SE ENCUENTRA UN ELEMENTO

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible')
    } else {
        console.log('Aun no')
    }

})