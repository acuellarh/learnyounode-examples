/*## COLECCIÓN HTTP (Ejercicio 8 de 13)
 Escribe un programa que realice una petición HTTP GET a una URL provista
 como primer argumento del programa. Almacena todos los datos recibidos del
 servidor, es decir no sólo el primer evento "data", y luego escribe a
 consola dos líneas:
  » En la primera escribe la cantidad de caracteres recibidos.
  » En la segunda escribe la totalidad de caracteres recibidos (todo el string).

  Solucion:
  -Usa un paquete de terceros para evitar los problemas de almacenar el
  stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer
  List) o concat-stream.
  - El paquete puede usar un stream piped para capturar los datos. Una
 vez que se acaba el stream se dispara un callback con todos los datos:
    response.pipe(bl(function (err, data) {  }))

  Recuerda hacer data.toString() para convertir al Buffer de Node a String.
*/

const http = require ('http');
var urlPath = process.argv[2];
var bl = require('bl');

http.get(urlPath, function(response){

    response.pipe(bl (function (err, data){

      if (err){
        console.log(err)
      }

      console.log(data.length);
      console.log(data.toString());

    }) );

    })
