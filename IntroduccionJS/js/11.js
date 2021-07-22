// Objetos
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

/*
//forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombre;

console.log(precioProducto);
console.log(nombreProducto);
*/

//destructuring 
const { precio, nombre } = producto;

console.log(precio);
console.log(nombre);