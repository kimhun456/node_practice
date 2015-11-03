var fs = require('fs');
var oldFilename;
var newFilename;

oldFilename = "./process.txt";
newFilename = "./processidold.txt";

fs.chmod(oldFilename, 777, function (err) {
  // body...
  fs.rename(oldFilename,newFilename,function(err){
    fs.lstat(newFilename, function (err,stats){
        var isSymlink = stats.isSymbolicLink();
    });
  });
});
