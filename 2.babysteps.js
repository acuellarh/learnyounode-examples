// Programa que recibe strings a partir de la segunda posición del array, los convierte en numeros
// y luego suma los elementos del array sin imprtar cuantos sean.
var l = process.argv.length;
suma = 0;
  for (i = 2; i < l ; i ++)
  {
  cadena = process.argv[i];
  //numero = Number(cadena);  // 1ra opción pasar de string a numero
  numero = +cadena;           // 2da opción pasar de string a numero
  suma = suma + numero;
  }
  //console.log('la longitud del array es= ' + l);
  //console.log( 'Los numeros son' + process.argv)
  console.log(suma);
