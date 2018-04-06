// Programa que indica la cantidad de saltos de linea en un parrafo.
'use strict';
var fs = require('fs');
var filePath = process.argv [2];  // ruta al archivo, la información está en la posición 2

var buf = fs.readFileSync(filePath); //Siempre devuelve un objeto buffer con los contenidos del archivo de manera sincrona, es decir lo hace de una vez sin validaciones previas
var str = buf.toString();  // se pueden convertir en string, utilizando el metodo toString
var arr = str.split('\n');  // convierte el string en un array de substrings, y utiliza el '\n', como delimitador
var l = arr.length-1;  // La longitud del array menos 1, nos indica la cantidad de saltos de linea

//console.log('Camino '+ filePath);
//console.log('buffer '+ buf);
//console.log('cadena'+ str);
console.log(l); // Imprime finalmente la cantidad de saltos de pagina del parrafo


// Los objetos buffer de Node son una representación eficiente de
// arrays de datos, en variedad de formatos como ASCII, binarios o UTF-8
// se pueden convertir en string, utilizando el metodo toString
