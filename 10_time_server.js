const net = require('net')
/*
La función zeroFill, resuelve lo siguiente:
Tanto el mes, el día como la hora y minuto deben tener un 0 para
ocupar 2 espacios, por ejemplo: "2013-07-06 17:42"
*/
function zeroFill (i)
{
   if(i < 10) {return '0'+i;}
   else { return ''+i;}
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' + // Se suma "1", por que empieza en "cero".
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

/*
1. Como imprime?? Realmente no se esta imprimiendo, basicamente esta enviando una información a un cliente, en los servidores TCP que es este caso,
se utilizan socket los cuales basicamente mantienen una conexion establecida, para este caso estamos mostrando al cliente una fecha de la sesion que esta
establecida.

Diferente en un servidor http que se establecen sesiones temporales, consulto una página y fin se acaba la sesión

2. En que consiste la sintaxis de la funcion zeroFill

------
function zeroFill (i) {
return (i < 10 ? '0' : '') + i   // operador ternary, Camilo lo llamá un "if elegante"
}
---------

El operador se llama "Conditional (ternary) Operator"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

*/
