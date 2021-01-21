var gameState = 1;




function preload (){
  asteroidImage = loadImage('asteroids.jpg')
  spaceImage = loadImage('background.jpg')
  rocketImage = loadImage('rocket ship.jpg')
  alienImage = loadImage('alien.png')
}


function setup(){
    createCanvas(400,400)

    backGround = createSprite(200,200,400,400)
    backGround.addImage(spaceImage)
    backGround.scale = 1.7;

    rocketShip = createSprite(50,200,20,20)
    rocketShip.addImage(rocketImage)
    rocketShip.scale = 0.5
}


function draw (){
  background("black")
  if(gameState === 1 ){

    backGround.velocityX = -4;
    if(backGround.x<0){
        backGround.x = 200
    }

    if(keyDown(UP_ARROW)){
        rocketShip.y = rocketShip.y -5
    }

    if(keyDown(DOWN_ARROW)){
        rocketShip.y = rocketShip.y +5
    }
  }


  Enemy();


  drawSprites()
}

function Enemy(){

  if(frameCount%100 === 0){
     enemy = createSprite(380,Math.round(random(20,380)))
     var number = Math.round(random(1,2))
     enemy.velocityX = -5
     enemy.scale = 0.1
     if(number === 1){
         enemy.addImage(alienImage)

         
     }
     else{

        enemy.addImage(asteroidImage)
        
     }
     
  }

}