function SoccerPlayer(){
  this.position = "Forward";
}

var VanPersie = new SoccerPlayer();

console.log(VanPersie.position);


function SoccerPlayer(name, position){
  this.name = name;
  this.position = position;
  
}
