//create the game class
class Game 
{

//create the cnstructor function 
constructor()
{


}
//read the gamestate from the database
getState()
{
  var gameStateRef = database.ref('gameState');
  gameStateRef.on("value" , function(data){
      gameState = data.val();
  });
}
//update the gamestate in the database
update(state)
{
database.ref('/').update({
    gameState:state
})
}
//start the game when four player inters
start()
{
if(gameState === 0)
{
player = new Player();
player.getCount();
 form = new Form();
 form.display();


}
}

play()
{
 form.hide();
 textSize(30);
 text("Game Start" ,120,100);
 Player.getPlayerInfo();
 console.log(allPlayers);
 if(allPlayers !== undefined )
 {
  var display_position = 130;

  for(var plr in allPlayers )
  {
    if(plr === "player" + player.index)
    {
     fill("red");
    }
    else
    {
       fill("black");

    }

    display_position += 20;

    textSize(20);
    text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position);

  }


 }

 if(keyIsDown(RIGHT_ARROW) && player.index !== null)
 {
   player.distance += 50;
   player.update();



 }



}

};