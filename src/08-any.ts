//Se crea el scope para que no se tenga conflicto con las variables
(()=>{
  //Creacion de variable con un valor any
  //Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable
  let myDynamicVar: any;
  myDynamicVar = 100; // number
  myDynamicVar = null; //Boolean
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string

  //Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:
  myDynamicVar = "Hola";
  //Podemos convertir de any a cualquier otro tipo de dato con el "as" operator. Este se usa de la siguiente forma.
  const otherString = (myDynamicVar as string).toLowerCase();

  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();

  //Como observamos, podemos tratar nuestra variable any como string en el primer caso y como number en el segundo. Después de esto, podemos acceder a los métodos toLowerCase() y toFixed() según el tipo de dato correspondiente.

})();
