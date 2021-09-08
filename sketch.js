var charizard,charizard1Img,charizard2Img,charizard3Img;
//var charizard4Img,charizard5Img,charizard6Img,charizard7Img,charizard8Img,charizardImg;
var  blast1, blast2, blast3, blast4;
var bgImg;
var script,scriptImg,battleImg;
var gameState = 0;
var playerCount;
var player;
var form, script;
var game;
//var gameStateBg = "form"
var pokemon;
var allPlayers;
var gameSt = 1;
function preload(){
charizardImg =  loadAnimation("charizard1.png","charizard2.png")
charizard1Img = loadAnimation("charizard1.png","charizard2.png")
charizard2Img = loadAnimation("charizard3.png","charizard4.png")
charizard3Img = loadAnimation("charizard5.png","charizard6.png")
charizard4Img = loadAnimation("charizaed7.png","charizard8.png")

blast1 = loadAnimation("blast.png","blast1.png")
blast2 = loadAnimation("blast2.png", "blast3.png")
blast3 = loadAnimation("blast4.png", "blast5.png")
blast4 = loadAnimation("blast6.png", "blast7.png")
//blastoImg = loadAnimation("blast.png","blast1.png")

bgImg = loadImage("loadingscreen.png")
scriptImg = loadImage("pokemon.png");
battleImg = loadImage("battlebackground.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
   database = firebase.database();
   game = new Game()
   game.getState();
   game.start()
 

  //     pokemon = [charizard, blastoise]
}

function draw() {
  //background(255,255,255); 
  
 
  // if (playerCount ===2){
  //   gameState = 2
  //   game.update(gameState)
  // }
  
  if (gameSt === 3 && playerCount ===2){
    //background(battleImg)
    game.play()
    
    
  }

  // if(keyDown("RIGHT_ARROW")){
  //   charizard.changeAnimation("right",charizard3Img)
  //   charizard.x = charizard.x + 10
    
  //     }
  //     if(keyDown("LEFT_ARROW")){
  //       charizard.changeAnimation("left",charizard2Img)
  //       charizard.x = charizard.x - 10


        
  //     }
  //     if(keyDown ("UP_ARROW")){
  //       charizard.changeAnimation("up",charizard4Img)
  //       charizard.y = charizard.y - 10
    
  //     }
  //     if(keyDown ("DOWN_ARROW")){
  //       charizard.changeAnimation("down",charizard1Img)
  //       charizard.y = charizard.y + 10
   
  //     }
  // drawSprites();
}
function keyPressed(){
 
}
