"use strict";

//función que muestra por consola la fecha como nos pide el ejercicio
function formatoFecha(fecha) {
    let diaSemana = fecha.getDay();
    let diaMes = fecha.getDate() + 1;
    let mes = fecha.getMonth() + 1;
    let ano = fecha.getFullYear();

    console.log(`${diaSemana}, ${diaMes} de ${mes} del año de nuestro señor ${ano}`)
}

let fecha = new Date(); //generación de una fecha con dia de hoy
formatoFecha(fecha);
