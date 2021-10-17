var path,pathimg
var boy, running_boy
var boundary1,boundary2


function preload(){
  //pre-load images
   pathimg = loadImage("path.png");
   running_boy = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //moving background
  path=createSprite(200,200);
  path.addImage("path",pathimg);
  path.velocityY=4;
  path.scale=1.2;
  // boy
  boy=createSprite(200,320,20,40)
  boy.addAnimation("running",running_boy)
  boy.X=200;
  boy.Y=320;
  boy.scale=1.0;
  
  //visible bounderies
  boundary1=createSprite(40,200,10,400)
  boundary1.visible=false;
  boundary2=createSprite(360,200,10,400)
  boundary2.visible=false;
  
}

function draw() {
  background(0);
  // infinite back ground
  if(path.y>400){
    path.y=height/2
  }
  if (boy.isTouching(boundary1)) {
    boy.collide(boundary1);
  }
  if (boy.isTouching(boundary2)) {
    boy.collide(boundary2);
  }
  boy.x=World.mouseX
  //collide the boy with invinsible boundaries
  boy.collide(boundary2)
  boy.collide(boundary1)

  drawSprites()

}
