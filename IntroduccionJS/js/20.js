const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log(`Pausando...`);
    },
    crearPlayList: function(nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Borrando canción con el ID: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');