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

//HAY QUE ENTRAR Y SALIRSE DE UN OBJETO O ELEMENTO PARA QUE SE EJECUTE
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

//ES LA COMBINACION DE TODO LO ANTERIOR (menos el blur)
busqueda.addEventListener("input", (e) => {
    if(e.target.value === ''){
        console.log("Fallo la validacion")
    }
})