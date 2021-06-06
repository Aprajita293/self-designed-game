var bg;
var balloon;  

function preload(){
balloon=loadImage("balloon.png")
bird_img=loadImage("bird.png")
light1=loadImage("light1.png")
light2=loadImage("light2.png")
building1=loadImage("Building1.png")
building2=loadImage("Building2.png")
building3=loadImage("Building3.png")
building4=loadImage("Building4.png")
building5=loadImage("Building5.png")


}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.shapeColor="lightblue" 
  //bg.velocityX=-3
  bg.x=bg.width/2

  balloons=createSprite(100,300,10,10)
  balloons.addImage(balloon)
  balloons.scale=0.5
  //balloons.velocityY=0

  buildingGroup=new Group ()
  streetGroup=new Group ()
}

function draw() {
  background(0);
 
  if(keyDown('space')){
  balloons.velocityY=-2
  }
  balloons.velocityY=balloons.velocityY+1
  bird()
  streetLight()
  spawnBuildings()

  drawSprites();
}

function bird(){
  if(frameCount%120===0){
    var birds=createSprite(1500,300,10,10)
    birds.addImage(bird_img)
    birds.scale=0.2
    birds.velocityX=-3
    birds.y=Math.round(random(20,300))
  }
}

function streetLight(){
  if(frameCount%240===0){
    var light=createSprite(1500,700,10,10)
    var rand=Math.round(random(1,2))
    switch(rand){
      case 1:light.addImage(light1);
      light.scale=0.2;
      break;
      case 2:light.addImage(light2);
      light.scale=0.3;
      break;
      default:break;
    }
      light.velocityX=-3
    
      }
}

function spawnBuildings(){
  if(frameCount%180===0){
    var building=createSprite(1500,700,10,10)
    var rand=Math.round(random(1,5))
    switch(rand){
      case 1:building.addImage(building1)
      break;
      case 2:building.addImage(building2)
      break;
      case 3:building.addImage(building3)
      break;
      case 4:building.addImage(building4)
      break;
      case 5:building.addImage(building5)
      break;
    }
    building.velocityX=-3
    building.scale=2.5
  }
}
