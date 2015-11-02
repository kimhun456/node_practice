var os = require('os');

console.log("Hostname : " + os.hostname());
console.log("Os Type : " + os.type());
console.log("Platform : " + os.platform());
console.log("Architecture : " + os.arch());
console.log("Release Version : " + os.release());
console.log("System uptime : " + os.uptime());

var cpus = os.cpus();

for(var i=0; i<cpus.length;i++){
    console.log( i + " : " );
    console.log("model   " + cpus[i].model);
    console.log("speed   " + cpus[i].speed);
}
