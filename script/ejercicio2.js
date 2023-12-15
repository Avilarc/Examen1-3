//a
let matriz = [];

let maximo = prompt("Introduzca el tamaño máximo permitido");

//For que genera el tamaño del array de 50 elementos aleatorios
for (let i = 0; i < 50; i++) {
    matriz.push(parseInt(Math.random() * maximo + 1)); //como limite máximo + 1 para incluir el numero
}

//b

//funcion en flecha encargada de calcular los pares y devolver una funcion con estos
let calculaPar = (matriz) => {
    let resultado = [];
    for (const numero of matriz) {
        if (numero % 2 == 0) {
            resultado.push(numero);
        }
    }
    return resultado;
}
//funcion en flecha encargada de calcular os impares y devolver una funcion con estos
let calculaImpar = (matriz) => {
    let resultado = [];
    for (const numero of matriz) {
        if (numero % 2 != 0) {
            resultado.push(numero);
        }
    }
    return resultado;
}


let pares = calculaPar(matriz);
let impares = calculaImpar(matriz);

//c
//funcion en flecha encargada de sumar un numero aleatorio entre 1 y 10 a los elementos de una matriz
let sumaNumeros = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        let numRand = parseInt(Math.random() * 10 + 1);
        nuevoNum = matriz[i] + numRand;
        matriz[i] = nuevoNum;
    }
}

sumaNumeros(matriz);
sumaNumeros(pares);
sumaNumeros(impares);

//d1
//funcion que devuelve la suma total de los elementos de una matriz
let sumaTotal = (matriz) => {
    let total = 0;
    for (const numero of matriz) {
        total += numero;
    }
    console.log(total);
}
console.log("La suma total de la matriz general es: ");
sumaTotal(matriz);
console.log("La suma total de la matriz de los pares es: ");
sumaTotal(pares);
console.log("La suma total de la matriz impar es: ");
sumaTotal(impares);
//d2
//función que devuelve el elemento mayor y menor dentro de la matriz
let mayormenor = (matriz) => {
    let minimo = matriz[0];
    let maximo = matriz[0];

    for (const numero of matriz) {
        if (numero > maximo) {
            maximo = numero;
        }
        if (numero < minimo) {
            minimo = numero;
        }
    }

    console.log(`El número máximo de la matriz es: ${maximo}, y el mínimo es: ${minimo}`);
}

console.log("Para la matriz general: ");
mayormenor(matriz);
console.log("Para la matriz par: ");
mayormenor(pares);
console.log("Para la matriz impar: ");
mayormenor(impares);