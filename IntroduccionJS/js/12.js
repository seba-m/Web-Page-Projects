//"use strict"; //correr javascript en modo estricto

// Objetos
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.seal(producto); // seal permite modificar las propiedades existentes, pero no añadir nuevas ni eliminar.
Object.freeze(producto); //freeze no permite modificar, agregar ni elimnar propiedades del objeto.

producto.precio = "nuevo precio";

delete producto.precio;

console.log(producto);