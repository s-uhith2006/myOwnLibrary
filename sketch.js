var fixedRectangle;
var movingRectangle; 
var object1,object2,object3,object4,object5;


function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(600, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  movingRectangle = createSprite(400,200,80,30);
  movingRectangle.shapeColor = "green";
  object1=createSprite(100,100,50,50);
  object1.shapeColor="yellow";
  object2=createSprite(200,100,50,50);
  object2.shapeColor="yellow";
  object2.velocityX=-5;
  object3=createSprite(300,100,50,50);
  object3.shapeColor="yellow";
  object3.velocityX=5;
  object4=createSprite(400,100,50,50);
  object4.shapeColor="yellow";
  object4.velocityY=-5;
  object5=createSprite(400,400,50,50);
  object5.shapeColor="yellow";
  object5.velocityY=5;


}

function draw() {
  background("white");  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  if(isTouching(movingRectangle,object1)){
    object1.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else{
    object1.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }
  bounceOff(object2,object3);
  bounceOff(object4,object5);
  drawSprites();


}





