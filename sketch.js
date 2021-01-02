var starImg, fairyImg, bgImg;
var fairy , fairyVoice, fairyHandBody;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var counter, pos;
function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0, isStatic:true});
	World.add(world, starBody);
	
	
	Engine.run(engine);

	//fairy.debug = true;
	//fairy.setCollider("rectangle",0,0,900,900);
}


function draw() {
  background(bgImg);
  if(counter!= 1){
 keyPressed();}
  if(starBody.position.y > fairy.y - 20 && fairy.x + 100 < starBody.position.x < fairy.x + 130 ){
	  Matter.Body.setStatic(starBody,true);
	  counter = 1;
	 
	  
  }
 
  
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  drawSprites();
  fill("white");
  textSize(15);
  text("Help the fairy collect the star by taking it to the right star and pressing down arrow!",30,50);
  if(starBody.position.y > fairy.y - 20 && fairy.x + 100 < starBody.position.x < fairy.x + 130 ){
	textSize(20);
	text("Done!",100,100);
	  fairyVoice.play();
  }
}

function keyPressed() {
	//write code here
	if(keyDown("down") ){
		
		Matter.Body.setStatic(starBody,false);
	}
	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	}
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}
}
