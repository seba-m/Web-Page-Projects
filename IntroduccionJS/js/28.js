// Clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    getPrecio() {
        return `Precio: $${this.precio}`;
    }
}

const producto = new Producto('Pantalón', 100);

//herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '123456789123');

console.log(producto.formatearProducto());
console.log(libro.formatearProducto());