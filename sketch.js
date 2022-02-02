var boat,boatImg;
var sea,seaImg;
var pirateboat,pirateboat1,pirateboat2,piratesGroup;
var gameState = "play"

function preload(){
    boatImg = loadImage("Ship.png");
    seaImg = loadImage("Sea.png");
    pirateboat1 = loadImage("PirateShip.png");
    pirateboat2 = loadImage("PirateShip2.png");
 
}


    

function setup(){
createCanvas(900,600);
 
sea = createSprite(600,200);
sea.addImage("sea",seaImg);
sea.velocityY = 5;
 
piratesGroup = new Group();
 
boat = createSprite(380,500,30,30);
boat.addImage(boatImg);
boat.scale = 0.2;
boat.setCollider("rectangle",0,0,10,10);
}







    

function draw() {
background(0);
 
if(sea.y > 360){
sea.y = 300;
}
 
if (gameState === "play") {
 
if(keyDown("LEFT_ARROW")){
boat.x = boat.x -6;
        }
if(keyDown("RIGHT_ARROW")){
boat.x = boat.x +6;
        }
if(keyDown("UP_ARROW")){
  boat.velocityY = -8;
}
boat.velocityY = boat.velocityY +0.3;
spawnPirateboats();
if(piratesGroup.isTouching(boat) || boat.y > 800){
boat.velocityY = 0;
sea.velocityY = 0;
boat.destroy();            
gameState = "end"
        }
      }   
drawSprites();
if (gameState === "end"){
stroke("blue");
fill("blue");
textSize(50);
text("Game Over!", 280,310)
pirateboat.destroy();


}
}
function spawnPirateboats(){
  if(frameCount % 150 === 0){
      pirateboat = createSprite(random(10,750),-15);
      pirateboat.velocityY = 10;
      var rand = Math.round(random(1,2));
      switch(rand) {
          case 1: pirateboat.addImage(pirateboat1);
                  break;
          case 2: pirateboat.addImage(pirateboat2);
                  break;
         default: break;
        }
        piratesGroup.add(pirateboat);
  }
}





  