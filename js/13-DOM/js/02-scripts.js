/*Seleccionar elementos por clase de la forma anterior:
getElementsByClassName: seleccionar elementos por su clase*/

/*ES KEY SENSITIVE, si la clase esta es minuscula aqui tambien va en minuscula
y si es al contrario igual.
Todos los selectores inician con document*/
const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

//SI LAS CLASES EXISTEN MAS DE UNA VEZ
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//SI UNA CLASE NO EXISTE: nos retorna un HTMLColection vacio
const noExiste = document.getElementsByClassName("noExiste");
console.log(noExiste);