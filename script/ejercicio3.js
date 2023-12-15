"use strict";

//objecto con la estructura de usuario dada por el ejercicio
let usuario = {
    nombre : "",
    edad : 0,
    calle : "",
    numero : 0,
    provincia : "",
    profesion : "",
    sueldo : 0,
    mudarse : (nuevaCalle,nuevoNumero,nuevaProvincia) => {
        this.calle = nuevaCalle;
        this.numero = nuevoNumero;
        this.provincia = nuevaProvincia;
    },
    cambiarTrabajo : (nuevoTrabajo) => {
        this.trabajo = nuevoTrabajo;
    }
}

//creamos el objeto pedro a partir de usuario
let pedro = Object.create(usuario);
pedro.nombre = "Pedro"; //modificamos el nombre de pedro
console.log(usuario.nombre); //comprobamos que la estructura de usuario no ha cambiado
console.log(pedro.nombre); //comprobamos que la estructura de pedro sí ha cambiado
