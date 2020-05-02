//create the form class
class Form
{
    //create the constructor function
    constructor()
    {
      this.input = createInput("Name");
       this.button = createButton('play');
       this.greeting = createElement('h3');
       this.age = createInput("Age");

       this.reset = createButton('Reset');


    }

    //create the hide function
    hide()
    {
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
     this.age.hide();

    }

    //create the display function
    display()
    {
      var title = createElement('h2');
      title.html("Hurdle Race Game");
      title.position(430,0);

      
      this.input.position(430,160);
      this.button.position(550,300);
      this.age.position(430,200);
      this.reset.position( 300, 30);

      this.button.mousePressed(() => {
         this.input.hide();
         this.button.hide();
         this.age.hide();
         player.name = this.input.value();
         playerCount += 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Hello " + player.name);
         this.greeting.position(530,160);
         player.age = this.age.value();

      })

      this.reset.mousePressed(() => {
        game.update(0);
        player.updateCount(0);
  
      })
  


    }


};