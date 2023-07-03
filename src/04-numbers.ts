//Se crea el scope para que no se tenga conflicto con las variables
(()=>{
  //Trabajar con las variables Inferida que no se declara el tipo de variable
  let productPrice = 100;
  productPrice=12;
  //Impresion de la variables
  console.log('productPrice',productPrice);

  //Trabajar con las variables explicita que si se declara de tipo de dato de variable
  let customerAge: number = 28;
  //Suma de la variable customerAge + 1 (28+1)
  customerAge= customerAge + 1;
  //No se puede hacer la suma con un string
  //customerAge = customerAge + "1"
  console.log('customerAge',customerAge)//Impresion de la variable

  //Para poder crear una variable sin ser inicializada se debe que trabajar con variable explicita
  let productInStock: number=50;
  console.log('productInStock',productInStock)//Al momento de querer imprimir una variable que no ha sido inicializada
  //Tambien funciona con sentencias de control de flujo nos avisa cuando la variable a validar no ha sido inizializada
  if(productInStock > 10){
    console.log('is greater');
  }

  //Transforma con el metodo parseInt el dato del string
  let discount = parseInt('bksdds');
  console.log('discount',discount)
  if (discount <= 200){
    console.log("Aplica")
  }else{
    console.log("No aplica")
  }

  let hex = 0xFFF //Utilizamos 0x para denominar a los hexadecimales.
  let bin = 0b1010 //Utilizamos 0b para demnominar a los binarios.

  console.log(hex) //4095
  console.log(bin) //10
})();
