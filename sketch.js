var player
var ball , ball1Group , ball2Group
var playerFront , playerUp , playerRight , playerLeft , playerStanding
var hitSound , backSound
var dodgeBackground
var ballHit = 0
var gameState = "play"

function preload(){
playerFront = loadAnimation("assets/playerfront1.png" , "assets/playerfront2.png" , "assets/playerfront3.png" , "assets/playerfront4.png" , "assets/playerfront5.png" ,
"assets/playerfront6.png","assets/playerfront7.png" ,"assets/playerfront8.png")

playerLeft = loadAnimation("assets/playerleft1.png" , "assets/playerleft2.png"  , "assets/playerleft3.png"  , "assets/playerleft4.png" ,"assets/playerleft5.png" 
,"assets/playerleft6.png","assets/playerleft7.png" , "assets/playerleft8.png"  )

playerRight = loadAnimation("assets/playerright1.png"  , "assets/playerright2.png" , "assets/playerright3.png" , "assets/playerright4.png",
"assets/playerright5.png","assets/playerright6.png","assets/playerright7.png","assets/playerright8.png")

playerUp = loadAnimation("assets/playerup1.png" , "assets/playerup2.png" ,"assets/playerup3.png" ,"assets/playerup4.png" ,"assets/playerup5.png" ,
"assets/playerup6.png" ,"assets/playerup7.png" ,"assets/playerup8.png" ,)

playerStanding = loadAnimation("assets/playerfront1.png")

dodgeBackground = loadImage("assets/dodgeballback.png")


ball = loadImage("dodgeball.png")

hitSound = loadSound("ballhitsound.wav")

backSound = loadSound("assets/back.mp3")




}



function setup(){
createCanvas(600,600)
backSound.loop()
player = createSprite(300,300.20,60)
player.addAnimation("standing" ,playerStanding)
player.addAnimation("front" , playerFront)
player.addAnimation("up" , playerUp)
player.addAnimation("left" , playerLeft)
player.addAnimation("right" , playerRight)

player.scale = 0.15

ball1Group = new Group()
ball2Group = new Group()



}
function draw(){
background(dodgeBackground)
textSize(20)
fill("white") 
text("BALLHITS:"+ ballHit,245,20)
if(gameState === "play"){
  player.velocityY = 0
  player.velocityX = 0
  
  spawnLeft()
spawnRight()


if(ball1Group.isTouching(player)){
  
  hitSound.play()
  ballHit = ballHit+1
  ball1Group[0].destroy()
  


}
else if(ball2Group.isTouching(player)){
  hitSound.play()
ball2Group[0].destroy()




}

if(ballHit === 5){
gameState = "END"


}


}
else if(gameState === "END"){
  textSize(35)
  fill("red")
  stroke(3)
text("GAME OVER!", 200 , 250)
player.changeAnimation("standing")



  player.x = 300
  player.y = 300



textSize(20)
fill("white")
text("press R to restart" , 200 , 350)

if(keyIsDown("r")){
  gameState = "play"
}




}








drawSprites()
}


function keyPressed(){
if(keyCode === UP_ARROW){
  //player.y = player.y-6
  player.velocityY = -12
  player.changeAnimation("up")
}

if(keyCode === DOWN_ARROW){
  // player.y = player.y+6
   player.velocityY = +12
   player.changeAnimation("front")

}

if(keyCode === LEFT_ARROW){
    //player.x = player.x-6
    player.velocityX = -12
    player.changeAnimation("left")

}

if(keyCode === RIGHT_ARROW){
  //player.x = player.x+6
  player.velocityX = +12
  player.changeAnimation("right")
}

}

function spawnLeft(){
  if(frameCount%60===0){
    ball1 = createSprite(0,random(20,380),20,20)
    ball1.velocityX = 4
    ball1.velocityY = ball1.velocityY+1
    ball1.addImage(ball)
    ball1.scale= 0.1
    ball1Group.add(ball1)
  }



}

function spawnRight(){
if(frameCount%60===0){
ball2 = createSprite(600, random(0,400) , 20, 20)
ball2.velocityX = -4
ball2.velocityY = ball2.velocityY+1
ball2.addImage(ball)
ball2.scale = 0.1
ball2Group.add(ball2)
}





}







