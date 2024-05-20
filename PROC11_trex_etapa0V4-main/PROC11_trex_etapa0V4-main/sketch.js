var floor
var trex ,trex_running;
var groundimage;
var invisiblefloor;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var score = 0;
var Play=1;
var end=0;
var gamestate = Play;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png"); 
groundimage = loadImage("ground2.png");
cloudImg=loadImage("cloud.png");
obstacle1=loadImage("obstacle1.png");
obstacle2=loadImage("obstacle2.png");
obstacle3=loadImage("obstacle3.png");
obstacle4=loadImage("obstacle4.png");
obstacle5=loadImage("obstacle5.png");
obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  
  trex=createSprite(20,160,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  floor=createSprite(100,170,300,20);
  floor.addImage(groundimage);
  invisiblefloor=createSprite(80,190,280,20);
  invisiblefloor.visible=false;

  
 
}

function draw(){
  background("white")
  text("score"+score,500,50);
  score=score+Math.round(frameCount/60);
  if(gamestate===Play){
  floor.velocityX=-5;
  if(floor.x<0){
    floor.x=floor.width/2

    
  }
  if(keyDown("space")&&trex.y >=150){
    trex.velocityY=-11
  }
  trex.velocityY=trex.velocityY+0.5;
  clouds();
  obstacles();
  }
  else if(gamestate===end){
    floor.velocityX=0;
    
  }
 
  
  

  
  
  trex.collide(invisiblefloor);
  
  drawSprites();


}
function clouds (){
  if (frameCount%60 ===0){
    var cloud=createSprite(500,50,100,10);
    cloud.addImage(cloudImg);
    cloud.velocityX= -5;
    cloud.y=Math.round(random(10,60));
    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
    cloud.lifetime = 200;
  }
   
}
function obstacles(){
  if(frameCount%60===0){
    var cactus = createSprite(500,160,20,20)
    cactus.velocityX=-5;

  var ram=Math.round(random(1,6));
  switch(ram){
    case 1:cactus.addImage(obstacle1);
    break;
    case 2:cactus.addImage(obstacle2);
    break;
    case 3:cactus.addImage(obstacle3);
    break;
    case 4:cactus.addImage(obstacle4);
    break;
    case 5:cactus.addImage(obstacle5);
    break;
    case 6:cactus.addImage(obstacle6);
    break;
    default:break;
  }
 cactus.lifetime=90;
 cactus.scale= 0.7;
 
}
}