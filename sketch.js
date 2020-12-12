
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,stone,treeImage,mango1,mango2,mango3,mango4,mango5,boyImage;
function preload(){
	boyImage=loadImage("boy.png");
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
    ground=new Ground(600,790,1200,20);
    
    mango1=new Mango(700,350,30);
    mango2=new Mango(800,350,30);
    mango3=new Mango(750,350,30);
    mango4=new Mango(850,350,30);
	mango5=new Mango(900,350,30);
	stone=new Stone(230,520,30);
	
	sling=new Sling(stone.body,{x:235,y:420});
	Engine.run(engine);
  
}

function draw() {
  background("white");
  image(boyImage,200,420,200,300);
  image(treeImage,540,200,500,600);
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
}
function keyPressed(){
	if (keyCode === 32){
	   Matter.Body.setPosition(stone.body,{x:230,y:520});
	   sling.attach(stone.body);
	}
}
function mouseDragged(){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	sling.fly();
}
function detectCollision(stone,mango){
	var stonePos=stone.body.position;
	var mangoPos=mango.body.position;
	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance<=stone.r+mango.r){
		Matter.Body.setStatic(mango.body,false)
	}
}