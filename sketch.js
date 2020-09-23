
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(400,670,800,20,ground_options);
	World.add(world,ground);
	console.log(ground.position);
	
	paperObject = new Paper(200,500,20,"pink")

	box1 = new Dustbin(600,640,17,70);
	box2 = new Dustbin(649,655,80,10);
	box3 = new Dustbin(690,640,17,70);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

 

  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
 
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-60});


	}



}




