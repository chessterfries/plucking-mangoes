
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, ground, stone, slingshot;
var boy, boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1366, 653);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,350);
	ground = new Ground(683,640,1366,25);
	stone = new Stone(200,100,10);
	boy = createSprite(180,500,30,30);
	boy.addImage(boyImg);
	boy.scale = 0.17;
	mango1 = new Mango(1000,190,50);
	mango2 = new Mango(1140,190,50);
	mango3 = new Mango(1120,100,50);
	mango4 = new Mango(1250,250,50);
	mango5 = new Mango(1030,270,50);
	mango6 = new Mango(950,300,50);
	mango7 = new Mango(1100,300,50);	
	mango8 = new Mango(1300,300,50);
	mango9 = new Mango(910,230,50);
	mango10 = new Mango(1230,180,50);
	mango11 = new Mango(1080,220,50);
	mango12 = new Mango(1040,130,50);
	mango13 = new Mango(1180,270,50);

	tree.debug = true;

	slingshot = new Slingshot(stone.body,{x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");

  Engine.update(engine);

  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  slingshot.display();
  
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);
detectCollision(stone,mango13);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    } 
}