const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); // el promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // el promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

//en los promises existen 3 valores posibles:
// pending: no se ha cumplido, pero tampoco se ha rechazado
// fulfilled: ya se cumplio
// rejected: se ha rechazado o no se pudo cumplir