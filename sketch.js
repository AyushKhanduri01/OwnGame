
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var char;
var charImg,charImgRunning;
var bgImg;
var logo,logoImg;
var ground;


var PLAY = 1 ;
var END = 0 ;
var GameState = PLAY;

function preload()
{
  charImg = loadImage("images/P1A3.png");
  charImgRunning = loadImage("images/P1A.png","images/P1A1.png","images/P1A2.png","images/P1A3.png");
  bgImg = loadImage("images/bg.jpg");
  logoImg = loadImage("images/Logo.png");

}

function setup() {
	createCanvas(1375, 620);


	engine = Engine.create();
	world = engine.world;
   

	//Create the Bodies Here.
    char = new Character(100,100,100,150);


    logo = createSprite(1150,70,20,20);
    logo.addImage("design",logoImg);
    logo.scale = 0.1;

    ground = new Ground(150,600,200,10);
    
    
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);


  if(keyDown(RIGHT_ARROW)){
     changePosition(+1,0);
  }

  createEdgeSprites();
  drawSprites();
  char.display();
  ground.display();
 
}



  function changePosition(x,y){
    char.x = char.x + x;
    char.y = char.y + y;
  }
