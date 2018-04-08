//# Aprendiendo NODE.JS!
//# LS FILTRADO (Ejercicio 5 de 13)

// Crea un programa que dado un directorio imprima una lista de archivos
// filtrados por la extensión. El primer argumento será la ruta al directorio
// (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si
// recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.
// Nota: el segundo argumento no incluye el punto '.'.

 //La lista de archivos a imprimir en consola debe hacerse un archivo por
 //línea y debes utilizar Async I/O.

//## PISTAS
// La función fs.readdir() recibe como parámetros: una ruta(path) y un
// callback. La firma del callback es:
//    function callback (error, lista) { /* ... */ }
// La lista es un arreglo de nombres de archivos de tipo String.

var fs = require('fs');     //modulo fs
var path = require('path');   // modulo path

var filePath = process.argv[2];// ruta directa, la ruta incluye al mismo archivo
var ext = process.argv[3]; // Devuelve la ext sin el (.)

// Asynchronous readdir(3). Reads the contents of a directory
// The callback gets two arguments (err, files) where files is
// an array of the names of the files in the directory excluding '.' and '..'.
fs.readdir(filePath, function callback(err, files){
  if (err){ console.log(err)  }

var l = files.length;
  for (i = 0; i < l ; i++)
    {
      var ext2 = path.extname (files[i]);  // path.extname devuelve la extensión del archivo en la posicion [i] del array files

        if ('.'+ext === ext2)  //Le agregué el (.) a la ext para luego comparar
        {
         console.log(files[i]);
        }
    }
//console.log(files);
//console.log(str);
//console.log(l);
//console.log(ext);
}
);  // fin fs.readdir
//console.log(ext2);
//console.log(filePath);
//console.log(ext);
