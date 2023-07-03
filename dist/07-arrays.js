"use strict";
//Se crea el scope para que no se tenga conflicto con las variables
(() => {
    //Array de numeros
    let prices = [1, 2, 3, 4, 5];
    //Método Push para agregar un elemento al final del array
    prices.push(6);
    console.log(prices); // [1,2,3,4,5,6]
    //No se puede agregar elementos diferentes a numeros al array ya que se encuentra como definido un array de puros numeros
    //prices.push("aasas");
    //prices.push(true);
    //prices.push({});
    //Crear array de forma esplicita, que tipos de campos voy a refirir
    //Creacion de array explicita
    let mixed = ['hola', true];
    //Ingresar numeros al string
    mixed.push(12);
    //Se puede ingresar cualquier cosa que este dentro del conjunto de elementos (number | string | boolean)
    mixed.push("as");
    mixed.push(true);
    //Nomas no se puede inresar un objeto, array o que no se encuentre definido dentro del conjunto de elementos
    //mixed.push({});
    //mixed.push([])
    //Creación de array explicita
    let mixed2 = ['Eduardo', 29];
    //Ingresar Objeto y Array
    //Al momento de colocar en el array el Objeto "Object" y con esto permitira ingresar objetos y arrays
    mixed2.push({});
    mixed2.push([]);
})();
