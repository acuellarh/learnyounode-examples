
const http = require ('http');
const bl = require('bl');
const mensaje = [];
let contador = 0 ;


for (var i = 0; i < 3; i++)// Ciclo para ir ejecutando la funcion httpGet, para este caso tres veces
{
  httpGet(i)
}

function httpGet (location)  // location, es un nombre de parametro que se recibe del ciclo for y que es utilizado

{
  http.get(process.argv[2 + location], function(response){

    response.pipe(bl (function (err, data){  // entube el buffer que se esta construyendo con cada dato recibido

      if (err)
        {
        console.log(err)
        }

        mensaje[location] = data.toString()  // Convierte los datos a un string y los guarda en una posición en el buffer mensaje
        contador ++                          // contador para controlar cuantas veces se ha ejecutado la función HttpGet, dado que a la 3ra debemos imprimir
        // console.log(process.argv[2 + location]);
        // http://localhost:56643
        // http://localhost:56644
        // http://localhost:56645

        if (contador === 3)  // Cuando cumple esta condición llama a la funcion print que esta fuera de la presente función.
          {
          print();
          }
      })
      );

    })
}

          function print ()// funcion encargada de imprimir
         {
           for(var i=0; i<3; i++)
              {
                console.log(mensaje[i]);  // Imprime la información almacenada en el buffer mensaje en las posiciones 0,1 y 2. Para eso se utilizó el ciclo for
              }
          }
