var spaceImg,space;
var asteroidImg,asteroid,asteroidGroup;
var rocketImg,rocket;
var gameState="play"
var song;

function preload(){
spaceImg = loadImage("space.jpg");
asteroidImg=loadImage("astro.jpg");
rocketImg=loadImage("work.jpg")
song=loadSound("Broozer Squares Up.mp3");

}

function setup() {
 createCanvas(600,600);
 space=createSprite(300,300);
 space.addImage("space",spaceImg);
 space.velocityY=1;

 asteroidsGroup=new Group();
 rocketGroup=new Group();

 rocket=createSprite(200,200,50,50);
 rocket.scale=0.3;
 rocket.addImage(rocketImg);
}

function draw() {
 background(0);

 if(gameState==="play"){

    if(space.y<400){
        space.y=300
    }
    if(keyDown("left_arrow")){
        rocket.x=rocket.x+3;
    }
    if(keyDown("right_arrow")){
        rocket.x=rocket.x-3;
    }
    spawnAsteroid();
    if(asteroidGroup.isTouching(rocket)){
        rocket.velocityY=0;
        rocket.destroy();
        gameState="end"
    }
 }
 if(gamestate==="end"){
     stroke("yellow");
     fill("yellow");
     textSize(30);
     text("GAME OVER,250,230")
 }
 drawSprites();
}
function spawnAsteroid(){
    
}