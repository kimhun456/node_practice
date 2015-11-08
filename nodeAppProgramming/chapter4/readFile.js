var fs = require('fs');

// 프로세스의 argv에는 프로세스가 받은인자들이 들어가 있게 된다.
// forEach를 이용하여 배열속의 변수에 접근이 가능하다.
process.argv.forEach(function (item,index) {


  console.log(index + " : " + item);


  if(index ==2){
    //두번째 인자로 받은 파일명을 읽게해준다.
    fs.readFile(item, 'utf8', function (err,data){
      console.log(data);
    });
  }

});
