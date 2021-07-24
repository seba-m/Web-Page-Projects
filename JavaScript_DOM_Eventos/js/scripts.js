// queryselector
const heading = document.querySelector('#heading'); //retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading';
console.log(heading);

// queryselectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo texto para Enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// generar nuevo enlace
const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// eventos
//const navegacion = document.querySelector('.navegacion');

console.log(1);
/*
window.addEventListener('load', function() { // load espera a que se descargue el js y los archivos que dependen del grml estén listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { // solo espera por el html, pero no espera css o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function() { // cuando se desplaza la ventana
    console.log("scrolling...");
};*/

//selecionar elementos y asignar eventos
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    console.log('enviando formulario');
    evento.preventDefault();
});*/

// Eventos de los inputs y de los textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// el evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // validar formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos estan vacios', true);
        return;
    }

    // crear la alerta de enviar correctamente

    mostrarAlerta('Mensaje enviado correctamente');

    // enviar formulario
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    //console.log(e.target.value);
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = false) {
    const alerta = document.createElement('div');
    alerta.classList.add('alerta');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    //desaparezca despues de 5 segundos
    setTimeout(() => alerta.remove(), 5000);
}