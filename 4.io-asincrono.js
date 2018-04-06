var fs = require('fs');
var filePath = process.argv [2];  // ruta al archivo

 fs.readFile(filePath, function callback(err, data){  // el archivo leido lo archiva en "data"
                if(err){return console.log(err)}

                var str = data.toString();  // se pueden convertir el buffer a un string, utilizando el metodo toString
                var arr = str.split('\n');  // convierte el string en un array de substrings, y utiliza el '\n', como delimitador
                var l = arr.length-1;  // La longitud del array menos 1, nos indica la cantidad de saltos de linea
                console.log(l);
              }
            );

// En un IO asincrono, se utiliza la opción fs.readFile, esta función
//no retorna un valor de manera inmediata, este procesa el resultado con
// una funcion de callback para validar si hay un error, de no presentarle
// el valor de 'data', será un objeto buffer de nodejs como con la
// opción readFileSync.
