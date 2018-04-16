const http = require('http')
const fs = require('fs')

/*Los parámetros request y response son los objetos que representan la
petición y su respuesta respectivamente. La petición provee propiedades,
como ser el encabezado y los parámetros de la misma. La respuesta permite
devolverle al cliente encabezados y un cuerpo (body).*/


const server = http.createServer(function (request, response) {

/*Establece la cabecera con un tipo de estado 200 que indica "The request has succeeded."
y el tipo de contenido es plano */

  response.writeHead(200, { 'content-type': 'text/plain' })

fs.createReadStream(process.argv[3]).pipe(response)

/* "fs.createReadStream", Es es un API para streaming de archivos, la información de
la posición 3  la  convierte es un stream que representa el archivo de entrada.

Luego se utiliza la opción src.pipe(dst), que sirve para conectar
un filesystem stream a un --> HTTP response stream */

})

server.listen(Number(process.argv[2]))  // En la posición 2 esta el puerto.

// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
