"use strict";
/**
 * clase padre Trabajador
 * 
 * @param nombre guarda el nombre del trabajador
 * @param apellidos guarda el apellido del trabajador
 * @param sueldo guarda el sueldo del trabajador
 * 
 * @method getNombre metodo que devuelve el nombre
 * @method getApellidos metodo que devulve los apellidos
 * @method getSueldo metodo que devuelve el sueldo
 * @method setNombre @param nombre metodo que sobreescribe el nombre del trabajador
 * @method setApellidos @param apellidos metodo que sobreescribe el apellido del trabajador
 * @method setSueldo @param sueldo metodo que sobreescribe el sueldo del trabajador
 */
class Trabajador {
    constructor(nombre, apellidos, sueldo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sueldo = sueldo;
    }
    
    getNombre() {
        console.log(this.nombre);
    }
    
    getApellidos() {
        console.log(this.apellidos);
    }

    getSueldo() {
        console.log(this.sueldo);
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos
    }

    setSueldo(sueldo) {
        this.sueldo = sueldo;
    }
}

/**
 * Clase informatico que hereda de trabajador
 * 
 * @method programar metodo que pone a programar al informatico
 * @method repararPc metodo que pone a reparar PCs al informatico
 * @method documentando metodo que pone a documentar al informatico
 */
class Informatico extends Trabajador {
    
    programar() {
        console.log("Estoy programando");
    }

    repararPc() {
        console.log("Estoy reparando un PC");
    }

    documentando() {
        console.log("Estoy documentando codigo");
    }
}

/**
 * Clase Conserje que hereda de Trabajador
 * 
 * @method atender metodo que pone a atender al conserje
 * @method imprime metodo que pone a imprimir papeles la conserje
 * @method cierra metodo que pone a cerrar el instituto al conserje
 */

class Conserje extends Trabajador {

    atender() {
        console.log("Atiende la entrada del instituto");
    }

    imprime() {
        console.log("Imprime documentos");
    }

    cierra() {
        console.log("Cierra el instituto");
    }
}

//Comprobaciones de Jose como informatico
let Jose = new Informatico("Jose","Fernandez",2000);
Jose.getNombre();
Jose.getApellidos();
Jose.getSueldo();
Jose.setNombre("Alfredo");
Jose.getNombre();
Jose.setApellidos("Fernandez");
Jose.getApellidos();
Jose.setSueldo(2500);
Jose.getSueldo();
Jose.programar();
Jose.documentando();
Jose.repararPc();
//Comprobaciones como Maria como Conserje
let Maria = new Conserje("Maria","Julian Cruz",1200);
Maria.getNombre();
Maria.getApellidos();
Maria.getSueldo();
Maria.setNombre("Maripili");
Maria.getNombre();
Maria.setApellidos("De carglas");
Maria.getApellidos();
Maria.setSueldo(1600);
Maria.getSueldo();
Maria.atender();
Maria.imprime();
Maria.cierra();




