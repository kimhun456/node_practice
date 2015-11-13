var qr = require('qr-image');
var fs = require('fs');

var str = "hyunjae"

var code = qr.image(str, { type: 'png' });
var output = fs.createWriteStream('qrcode.png')

code.pipe(output);
