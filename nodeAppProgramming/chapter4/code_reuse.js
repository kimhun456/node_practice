var fs = require('fs');
var path1 = "./";
var path2 = ".././";
var logCount;
//
// function countFiles(path){
//   var fileNames = fs.readdirSync(path);
//   return fileNames.length;
// }
// console.log(countFiles(path1)+" files in " + path1 );
// console.log(countFiles(path2)+" files in " + path2 );

function countFiles(path, callback){
  fs.readdir(path, function(err,filenames){
    callback(err, path, filenames.length);
  });
}

logCount = function (err,path,count){
  console.log(count+ " files in " + path);
}

countFiles(path1 , logCount);
countFiles(path2 , logCount);
