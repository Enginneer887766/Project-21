var bullet, wall;
var speed, weight;
var deformation,thickness;


function setup() {
  createCanvas(1600,400);
 
  speed = random(20, 321);
  weight = random(30, 52);
  console.log(speed);
  console.log(weight);
  
  bullet = createSprite(50,200,55,25);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  thickness = random(22,83);
  deformation = 0.5 * weight * speed * speed / thickness*thickness*thickness;
  
  bullet.velocityX = 10;
  
}

function draw() {
  if (bullet.x   - wall.x  < wall.width/2  + bullet.width/2
    && wall.x - bullet.x   < wall.width/2  + bullet.width/2
    && bullet.y  - wall.y  < wall.height/2 + bullet.height/2
    && wall.y - bullet.y   < wall.height/2 + bullet.height/2) {

      bullet.velocityX = 0;

if (deformation > 10)
{
  wall.shapeColor = ("red");
}
if ( deformation < 10)
{
  wall.shapeColor = ("green");
}

  }
  background(255,255,255);  
  console.log(deformation);
  
  drawSprites();

}