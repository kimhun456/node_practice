// zlib 압축관리패키지

var zlib = require('zlib');
// var gzip = zlib.createGzip();
// var fs = require('fs');
// var inp = fs.createReadStream("input.txt");
// var outp = fs.createWriteStream("input.txt.gz");

//inp.pipe(gzip).pipe(outp);

// var input = "Writing an IT BOOK is very difficult";
//
// zlib.deflate(input, function(err,buffer){
//     if(!err){
//       console.log(buffer.toString('base64'));
//     }
// });

var buffer = new Buffer('eJwLL8osycxLV0jMU/AMUXDy9/dWyCxWKEstqlRIyUxLy0wuzSkBAOIiDJg=');
zlib.unzip(buffer, function (err,bf) {
  if(!err){
    console.log(bf.toString());
  }

});
