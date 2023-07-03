//Se crea el scope para que no se tenga conflicto con las variables
(()=>{
  //Generacion de variable que almacenara un string
  let productTitle="My amazing product"

  //Cambiar el valor de la variale diferente a un string marcara error
  //productTitle = () =>{}
  //productTitle= 123;

  //Cambio de reasignación de valor
  productTitle="My amazing product changed";
  console.log('productTitle',productTitle)

  //Comillas simples:
  let myProducts = 'Soda'; //CORRECTO
  let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
  //let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO

  //Comillas dobles:
  let myProduct = "Soda"; //CORRECTO
  let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
  //let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO

  //Usando backticks
  let myName = `Frank`;

  //Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar seguido de llaves ${} y escribir lo que queremos concatenar dentro de esas llaves:
  let variableTitulo = "TypeScript";
  let summary = `
      title: ${variableTitulo}
  `;
})();
