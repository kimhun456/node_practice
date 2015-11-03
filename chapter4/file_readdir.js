var fs = require('fs');
var processId;

fs.readdir(".", function (err, filenames){
  var i;
  for(i=0; i<filenames.length; i++){
    console.log(filenames[i]);
  }
  console.log("Ready");
});
console.log("start");
processId = process.getuid();
console.log(processId);
