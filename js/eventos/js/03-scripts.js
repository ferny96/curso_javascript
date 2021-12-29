//EVENTOS DEL TECLADO

const busqueda = document.querySelector(".busqueda");

//SE EJECUTA CUANDO ESTAMOS ESCRIBIENDO
busqueda.addEventListener("keydown", () => {
    console.log('Escribiendo');
})

//SE EJECUTA CUANDO SOLTAMOS O DEJAMOS DE ESCRIBIR
busqueda.addEventListener("keyup", () => {
    console.log('Soltaste la tecla');
})

/*blur: para validacion de formularios
hay que entrar y salrse de un objeto o  elemento para
que se ejecute la funcion*/
busqueda.addEventListener("blur", () => {
    console.log('Ejecutando blur');
})

//CUANDO COPIAMOS (CTRL + C)
busqueda.addEventListener("copy", () => {
    console.log('Copiaste');
})

//CUANDO PEGAMOS (CTRL + V)
busqueda.addEventListener("paste", () => {
    console.log('Pegaste');
})

//CUANDO CORTAMOS (CTRL + X)
busqueda.addEventListener("cut", () => {
    console.log('Cortaste');
})

//Es la combinacion de todo lo anterior (menos el blur)
busqueda.addEventListener("input", (e) => {
    if(e.target.value === ''){
        console.log("Fallo la validacion")
    }
})