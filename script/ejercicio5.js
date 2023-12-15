//función que se encarga de generar las posiciones aleatorias en las que vamos a encriptar 
//nuestra contraseña
function generaPosiciones(contrasena) {
    let posiciones = [];
    for (let i = 0; i < contrasena.length; i++) {
        let ind = parseInt(Math.random() * contrasena.length);
        posiciones.push(ind);
    }
    return posiciones;
}
//funcion que se encarga de coger la letra nueva y genera la nueva cadena encriptada.
function encripta(contrasena, posiciones) {
        let nuevaPass = "";
        for (const ite of posiciones) {
            let letra = contrasena[ite];
            nuevaPass += letra;
        }
    
        return nuevaPass;
}

let cadena = prompt("Introduzca su contraseña:");
let posiciones = generaPosiciones(cadena)
nuevaPass = encripta(cadena, posiciones);
nuevaPass2 = encripta(cadena,posiciones);
console.log(`La contraseña original es: ${cadena}`);
console.log(`La contraseña encriptada es: ${nuevaPass}`);
console.log(`Comprobando que se mantenga igual al volver a cifrar la contraseña: ${nuevaPass2}`);