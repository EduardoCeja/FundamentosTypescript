"use strict";
//Se crea el scope para que no se tenga conflicto con las variables
(() => {
    //Trabajar con las variables Inferida que no se declara el tipo de variable
    let isEnabled = true;
    //No se puede cambiar el tipo de dato
    //isEnabled='as';
    //isEnabled=200;
    //Trabajar con las variables explicita que si se declara de tipo de dato de variable
    let isNew = false;
    console.log(isNew); //false
    isNew = true;
    console.log(isNew); //true
    //Sacar un número entre 0 y 1 con el objeto Mat.random
    const random = Math.random();
    console.log('random', random);
    //Se va asociar una condición y la asociamos a la variable
    isNew = random >= 0.5 ? true : false;
    console.log('isNew', isNew);
})();
