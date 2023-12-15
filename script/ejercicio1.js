let tamaño = prompt("Introduzca el tamaño del triangulo"); //prompt que le pedimos el tamaño al usuario
let linea = "";

//for por el que generaremos el triangulo rectangulo en la consola
for (let i = 0; i < tamaño; i++) { 
    linea += "*";
    console.log(linea);
}
