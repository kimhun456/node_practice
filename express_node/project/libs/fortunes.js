var fortunes = [
  "good",
  "bad",
  "very good",
  "not bad",

  "terrible"

];



exports.getFortunes = function(){
  var indexs  = Math.floor(Math.random() * fortunes.length);
  return fortunes[indexs];
};
