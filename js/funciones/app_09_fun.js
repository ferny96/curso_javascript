//ANADIENDO FUNCIONES A UN OBJETO
//Metodos de propiedad: son lo que va despues del nombre de la propiedad.
//EJEMPLO:
//nombre_propiedad: function(){}
const reproductor = {
    nombre: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log("Pausando..");
    },
    borrar: function(){
        console.log("Borrando cancion");
    },
    crearPlayList: function(nombre){
        console.log(`Creando Play List: ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo play list: ${nombre}`);
    }

}

reproductor.nombre(30);
reproductor.pausar();

//Agregar nueva propiedad
/*reproductor.borrar = function(){
    console.log("Borrando cancion...");
}*/

reproductor.borrar();
reproductor.crearPlayList("Mago de Oz");
reproductor.reproducirPlayList("Mago de Oz");