
var ball;
var wall1,wall2,wall3;
var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	wall1 = createSprite(780,600,20,120);
	wall2 = createSprite(700,650,140,20);
	wall3 = createSprite(620,600,20,120);

    ground = createSprite(400,680,800,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(300,500,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
 
}

function keyPessed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body,position,{x:85,y:85});

}

}






	


