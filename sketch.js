var Wall ,thickness;
var bullet, speed ,Weigth;



function setup(){   
createCanvas(1600 ,400);

thickness=random(22,83);

bullet = createSprite(50,200,50,10);
Wall =   createSprite(1200,200,thickness,100);


speed = random(223,321);
Weigth = random(30,52);

bullet.velocityX =speed;


}
    
function draw(){

background("black");

if (Wall.xbullet.x <(bullet.Width+Wall.Width)/2); {
bullet.velocityX=0;
var deformation=0.5 * Weigth * speed * speed/22509;
if (deformation>180) {
 bullet.shapecolor ="white";   
}
if (deformation<180 && deformation>100) {
    bullet.shapecolor ="white";
}
if (deformation>100) {
    bullet.shapecolor ="white";
}

  }
 if (hasCollided(bullet, Wall))
{ 
bullet.velocityX=0;
var damage=0.5 *Weigth * speed*speed/(thickness *thickness*thickness);
 if (damage>10)
 {
     Wall.shapecolor="red";
 }

 if (damage>10)
 {
     Wall.shapecolor="green";
 }

}




drawSprites();

}
  
function hasCollided (lbullet,lwall) {
bulletRigthEdge=lbullet.x +lbullet.Width;
WallLeftEdge==lwall.x;
if(bulletRigthEdge>=WallLeftEdge) {
 return true

}

return false;



}
