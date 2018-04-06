
const http = require ('http');
const urlPath = process.argv[2];
const bl = require('bl');
const mensaje = [];
let contador = 0 ;

function httpGet (location)
//for(var location=0; location < 3; location++)
{
  http.get(process.argv[2 + location], function(response){

    response.pipe(bl (function (err, data){

      if (err)
        {
        console.log(err)
        }

        mensaje[location] = data.toString()
        contador ++
        // console.log(location)

        if (contador === 3)
          {
          print();
          }
      })
      );

    })

}

          function print ()
         {
           for(var i=0; i<3; i++)
              {
                console.log(mensaje[i]);
              }
          }


          for (var i = 0; i < 3; i++)
          {
            httpGet(i)
          }
