const net = require('net')
/*
La función zeroFill, resuelve lo siguiente:
Tanto el mes, el día como la hora y minuto deben tener un 0 para
ocupar 2 espacios, por ejemplo: "2013-07-06 17:42"
*/
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' + // Por alguna razón es necesario sumar 1, por que en la rta devuelve el mes anterior.
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

// como imprime??, mediante el socket.end ??
// sintaxis de la funcion zeroFill
