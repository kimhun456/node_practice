var fs = require('fs');

// 비동기함수의 경우 마지막 인수가 수행완료시 호출하게될 콜백 함수로 지정되어야 한다.
// 이 콜백함수는 항상 첫번째 인수를 예외 처리에 관한 객체로 가진다.

// fs.unlink('/tmp/hello', function(err){
//   if(err) throw err;
//   console.log("successfully deleted/ /tmp/hello")
// })

// fs.rename("/tmp/hello", "/tmp/world", function(err){
//   if(err) throw err;
//   console.log("renamed complete");
// });

// fs.stat('/tmp/world' , function(err ,stats){
//   if (err) throw err;
//   console.log('stats : ' + JSON.stringify(stats));
//
// });

fs.readFile("/etc/passwd",function(err,data){
  if(err) throw err;
  console.log(data);
});

fs.writeFile("message.txt","Hello node",function(err){

  if(err) throw err;
  console.log("success");
});
