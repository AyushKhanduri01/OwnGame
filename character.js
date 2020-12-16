class Character {
     constructor(x,y,width,height){
         var options = {
             density : 1.0,
             restitution : 1.0

         }
         this.width = width;
         this.height = height;
         this.image = loadImage("images/P1A2.png");
         this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world,this.body);
     }

     
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x,pos.y);
         imageMode(CENTER)
         image(this.image,100,400,this.width,this.height);
         pop();
     }
}