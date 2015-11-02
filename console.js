// time() 속도를 재고싶을때 쓴다.
console.time("measurement");
var result = "";

for(var i=1 ;i <=100; i++){
  result += i+' ';
}
console.log("result :" , result);

console.timeEnd('measurement');
