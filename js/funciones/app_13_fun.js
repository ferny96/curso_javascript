//Arrow function con metodos de propiedad
const reproductor = {
    cancion:"",
    nombre: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log("Pausando.."),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlayList: nombre => console.log(`Creando Play List: ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo play list: ${nombre}`),

    //ESTO ES NUEVO
    set nuevaCancion(cancion){//Agregar valores
        this.cancion = cancion;
        console.log(`Anadiendo ${cancion}`);
    },
    get obtenerCancion(){//obtener valores
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Caraluna";
reproductor.obtenerCancion;

reproductor.nombre(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("Mago de OZ");
reproductor.reproducirPlayList("Mago de OZ");