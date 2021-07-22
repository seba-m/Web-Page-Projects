// Objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

/*console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["precio"]);*/

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.disponible;

console.log(producto);