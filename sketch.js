var rec1, rec2 ;

function setup() {

  createCanvas(1500,900);

  rec1 = createSprite(300,100,50, 50);
  rec1.shapeColor = "red";

  rec1.velocityX = 3;

  rec2 = createSprite(1200,100,50,50);
  rec2.shapeColor = "red";

  rec2.velocityX = -3;
}

function draw() {

  background(0);
  
  //function call;
  BounceOFF(rec1,rec2);
  drawSprites();
}