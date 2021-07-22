//this

const reservacion = {
    nombre: 'seba',
    apellido: 'morgado',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();