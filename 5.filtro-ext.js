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
      var ext2 = path.extname (files[i]);

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
