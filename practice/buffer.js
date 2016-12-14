

var buf = new Buffer(10);

var buf2 = new Buffer([10,20,30,40,50]);

var buf3 = new Buffer("simple node js " , "utf-8");

len = buf.write("simple");

console.log(buf3);

console.log(buf3.toString());

console.log("Octets written : " + len);

buf = new Buffer(26);

for(var i = 0 ; i < 26 ; i ++){

	buf[i] = i + 97;

}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));

console.log(buf.toString('utf8', 0,5));

buf = new Buffer("Simply Easy Learning");

var json = buf.toJSON(buf);

console.log(json);


