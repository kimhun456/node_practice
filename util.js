var util = require('util');

// format함수는 인수를 사용하여 문자열을 포맷팅한다.
console.log(util.format("%s %s ","foo"));
console.log(util.format("%s %s","foo","bar","baz"));
console.log(util.format("1","2","3",""));
// util.debug와 error는 더이상 쓰지 않는다.
//console.debug("this is debug message");
console.error("this is error message");
console.log(util.inspect(util,true,null));

// 정규표현식 관련 사이트 http://www.nextree.co.kr/p4327/
console.log(util.isRegExp(/asdfasf/));
