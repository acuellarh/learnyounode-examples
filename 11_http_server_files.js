const http = require('http')
const fs = require('fs')

/*Los parámetros requesty y response son los objetos que representan la
petición y su respuesta respectivamente. La petición provee propiedades,
como ser el encabezado y los parámetros de la misma. La respuesta permite
devolverle al cliente encabezados y un cuerpo (body).*/


const server = http.createServer(function (requesty, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })  //La respuesta permite devolverle al cliente encabezados y un cuerpo (body)

  fs.createReadStream(process.argv[3]).pipe(response)
/*  Recuerda que el módulo fs tiene APIs para streaming de archivos. Debes
  usar fs.createReadStream() para crear un stream que represente el archivo
  de entrada. Luego puedes concatenar el stream con pipe src.pipe(dst) para
  pasar los datos del stream src al stream writer de salida dst. Es decir
  puedes conectar un filesystem stream a un HTTP response stream.*/

})

server.listen(Number(process.argv[2]))
