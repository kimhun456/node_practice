var fs = require('fs');

var sum = 0;
var filenames = fs.readdir(".",function(err,filenames){

  var i ;
  count = filenames.length;
  for(i=0;i<filenames.length;i++){
    fs.stat("./" + filenames[i], function(err,stats){
      sum += stats.size;
      count--;
      if(count ==0){
        console.log(sum);
      }
    });
  }

});
