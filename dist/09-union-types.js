"use strict";
//Se crea el scope para que no se tenga conflicto con las variables
(() => {
    //Creacion de variable dinamica de forma esplicita que tipos de datos que quiero contemplar en mi varible
    //La variable userId contandra los tipos de dato string y number
    let userId;
    userId = 123;
    userId = "String";
    //Funcion que contendra dos parametros que se trabajara de forma esplicita que tipos de datos que quiero contemplar en mi varible
    function helloUser(id) {
        console.log(`Hola usuario con el número de id ${id}`);
    }
    //helloUser("Hola");
    //helloUser(29);
    function greeting(myText) {
        //cuando sea un string actuo de una forma y cuando sea un number de otra forma
        //guardiones
        //El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
        //operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    console.log(greeting('Migue'));
    //console.log(greeting(13.313));
})();
