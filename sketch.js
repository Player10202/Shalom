var ball;
function setup() {
  createCanvas(800,800);
  ball=createSprite(200,300,40,50)
}

function draw() 
{
  background("green");
drawSprites ()
if(keyDown("left")){
  ball.x=ball.x-2
}
if(keyDown("right")){
ball.x=ball.x+2
}
if(keyDown("up")){
  ball.y=ball.y-2
}
if(keyDown("down")){
  ball.y=ball.y+2
}
}




