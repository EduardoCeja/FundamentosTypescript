//Funcion anonima autoejecutada
(()=>{

  //myProductName tipo inferido (ya es una variable de strings)
let myProductName = 'Product 1';
//myProductPrice ya es una variable de tipo number
let myProductPrice = 123;


//ERROR! NO SE PUEDE ASIGNAR UN NUMERO A UNA VARIABLE DE TIPO STRING
//myProductName = 2;

//ERROR! NO SE PUEDE ASIGNAR UNA FUNCION A UNA VARIABLE DE TIPO STRING
//myProductName () =>{}

//Si se puede hacer el cambio debido a que el tipo de dato si es un string
myProductName = 'cambio';

//TypeScript ayuda a lo que es mostrar los metodos que se pueden trabajar con un string
myProductName.toLowerCase();

//TypeScript ayuda a lo que es mostrar los metodos que se pueden trabajar con un number
myProductPrice.toFixed();


const myProductStock = 1000
// myProductStock = 2000;//! no podemos hacerlo porque es una constante

 let myProductName2: string = 'Product 2'; //sin usar el motor de inferencia, se declara el tipo
})();



