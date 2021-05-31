function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,300,100,20);
  rect1=createSprite(50,50,50,50);
  rect2=createSprite(750,50,50,50)
rect1.shapeColor="pink"
rect2.shapeColor="lightblue"
rect1.velocityX=2
rect2.velocityX=-2
}

function draw() {
  background(0);
movingrect.x=World.mouseX
movingrect.y=World.mouseY
if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 &&
  movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2 
  ){ 
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}
else{
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}
if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
  rect2.x-rect1.x<=rect1.width/2+rect2.width/2 ){
    rect1.velocityX*=(-1)
rect2.velocityX*=(-1)
  }
  drawSprites();
  
}