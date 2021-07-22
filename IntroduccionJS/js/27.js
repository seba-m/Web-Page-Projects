//POO

/*Object literal*/

const producto = {
    nombre: "Pantalón",
    precio: 100,
}

//object constructor


function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// prototype: crear funciones que solo se pueden utilizar en un objeto especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto("Pantalón", 100);
const producto3 = new Producto("Camiseta", 200);
const cliente = new Cliente("Sebastian", "Morgado");

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());