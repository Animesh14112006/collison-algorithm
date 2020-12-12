var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 80, 30);
 fixedrect.shapeColor = "green";
 
 movingrect = createSprite(600,300,50,80);
 movingrect.shapeColor = "green";
 console.log(movingrect.x - fixedrect.x);
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x - fixedrect.x<movingrect.width/2 + fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y<fixedrect.height/2 + movingrect.height/2
    && movingrect.y - fixedrect.y<movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";

  }
  else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  drawSprites();
}