//TEXTO
const nombre = "Fernando";
const apellido = "Rodriguez";
console.log(nombre);

//como concatenar
//Primera opcion
console.log(nombre.concat(apellido));

//Segunda opcion
console.log(nombre+" "+apellido);
console.log(nombre," ",apellido);

//Tercera opcion (TEMPLATE STRING)
console.log(`Mi nombre es: ${nombre} ${apellido}`);

//Eliminar espacio al inicio y al final
const mes = "      enero      ";
console.log(mes);

//Al inicio
console.log(mes.trimStart());

//Al final
console.log(mes.trimEnd());

//Ambos lados
console.log(mes.trimStart().trimEnd());

//Forma anterior (vieja)
console.log(mes.trim());

//Reemplazar algo REPLACE
const producto = "Monitor 20 Pulgadas";
console.log(producto.replace("Monitor","Monitor curvo"));

//cortar un fragmento SLICE
console.log(producto.slice(0,7));

//Tambien lo podemos hacer con subStrings
console.log(producto.substring(0,9));

//REPEAT Y SPLIT
//REPEAT
const nuevo = " En promocion".repeat(3);
console.log(nuevo);

//SPLIT
const lenguajes = "PHP, JS, C#, C++, PYTHON";
console.log(lenguajes.split(","));

const tecnologia ="celular monitor audifonos cargador";
console.log(tecnologia.split(" "));


//NUMEROS


//BOOLEANOS
const bool1 = true;
const bool2 = false;

console.log(bool1 == bool2);//Mostrara FALSE
console.log(bool1 == true);//mostrar TRUE
console.log(bool1 == "true");//En esta forma mostrara FALSE ya que se esta comparando(true) en tipo texto

//Buenas practicas haciendo uso de booleanos
const autenticado = true;

if(autenticado){
    console.log("Muy bien estas dentro del sistema");
}else{
    console.log("Lo sentimos no puedes iniciar sesion");
}

//Con operador ternario
console.log(autenticado ? "Muy bien" : "Hubo un problema");

//OBJETOS
//crear un objeto
const productos = {
    nombre: "Monitor pc",
    precio: 800,
    disponible: true
}

console.log(productos);

//Como acceder a un objeto
//FORMA NUMERO1
console.log(productos.nombre);

//FORMA NUMERO2
console.log(productos['nombre']);

//Como agregar mas propiedades a los objetos
productos.imagen = "imagen.png";

console.log(productos);

//como eliminar propiedades
delete productos.imagen;
console.log(productos);

//DESTRUCTURING en objetos
const productos2 = {
    nombre2: "Monitor pc",
    precio2: 800,
    disponible2: true
}

const {nombre2, precio2, disponible2} = productos2;
console.log(nombre2);
console.log(precio2);
console.log(disponible2);

//DESTRUCTURING con objetos anidados
const productos3 = {
    nombre3: "Monitor pc",
    precio3: 800,
    disponible3: true,
    informacion: {
        peso:"1kg",
        altura:"1metro",
        paises: {
            pais1:"china",
            pais2:"rusia"
        }
    }
}

const {nombre3, precio3, informacion, informacion:{paises, paises:{pais1}}} = productos3;

console.log(pais1);