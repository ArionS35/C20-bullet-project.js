var bullet1,wall1;
var speed, weight, thickness;



function setup() {
  createCanvas(1600,600);


  bullet1 = createSprite(200, 300, 40, 20);
  bullet1.shapeColor='grey';
  wall1 = createSprite(1200, 300, 20, 200);
  wall1.shapeColor='yellow';

  bullet1.velocityX=random(50,90);
 
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);



}

function draw() {
  background(15,15,15);  

   if (wall1.x-bullet1.x < (bullet1.width+wall1.width)/2) {
     bullet1.velocityX=0;

     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
     bullet1.shapeColor='red';
    }
    if(damage<10){
      bullet1.shapeColor='green';
     }

   }

   if(bullet1.isTouching(wall1)){
     bullet1.velocityX=0
   }





   bullet1.collide(wall1);

  drawSprites();
}