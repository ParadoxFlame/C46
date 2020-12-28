var back1, back2, back3, track1, track2, track3
var player, playerCar, playerSprite
var zombieMove, zombieIdle;
var zombieGroup, zombieGroup2;
var score, coin, coinSprite;
var gameState="level1";
var back;
var count=0;
var levelComplete, levelFailed, levelSprite;
function preload()
{
  track1 = loadImage("Images/desertroadOFFICIAL.png");
  track2 = loadImage("Images/map1OFFICIAL.png");
  //track3 = loadImage("Images/track.jpg");
  playerCar = loadImage("Images/carOfficial.png");


  zombieMove = loadAnimation("Images/zombieOFFICIAL/Move/skeleton-move_0.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_1.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_2.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_3.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_4.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_5.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_6.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_7.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_8.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_9.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_10.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_11.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_12.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_13.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_14.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_15.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_16.png")

  zombieIdle = loadAnimation("Images/zombieOFFICIAL/idle/skeleton-idle_0.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_1.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_2.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_3.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_4.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_5.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_6.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_7.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_8.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_9.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_10.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_11.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_12.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_13.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_14.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_15.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_16.png")

  coin = loadAnimation("Images/ScoreOFFICIAL/Coin1.png",
  "Images/ScoreOFFICIAL/Coin2.png",
  "Images/ScoreOFFICIAL/Coin3.png",
  "Images/ScoreOFFICIAL/Coin4.png",
  "Images/ScoreOFFICIAL/Coin5.png",
  "Images/ScoreOFFICIAL/Coin6.png",
  "Images/ScoreOFFICIAL/Coin1.png")

  levelComplete = loadImage("Images/levelCompleteScreenOFFICIAL.png");

 /* playerSprite=loadAnimation("Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_0.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_1.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_2.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_3.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_4.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_3.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_5.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_6.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_7.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_8.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_9.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_10.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_11.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_13.png","Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_14.png")*/
  playerSprite=loadImage("Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_0.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  score = 0
 
  back1 = createSprite(windowWidth/2, windowHeight, 1000,500);
  back1.addImage("track1",track1);
  back1.addImage("track2",track2);
  back1.scale = 0.9;

  player = createSprite(windowWidth/2, windowHeight/2+4200,20,50);
  player.addAnimation("player_driving", playerCar);
  player.addImage("player_level2", playerSprite);
  player.scale = 0.05;
  zombieGroup= new Group();
  zombieGroup2 = new Group();

  

  spawnZombies();
  spawnZombies2();

  //player.y = -3263
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  camera.position.x=windowWidth/2;
  camera.position.y=player.y;
  
  //LEVEL1 Starts Here
  if(gameState === "level1")
  {
    back1.changeImage("track1",track1);
    player.changeImage("player_driving", playerCar);
    
    //dealing with visibility of zombie level2
    for(var i=0;i<zombieGroup2.length;i++)
    {
      if(zombieGroup2.get(i).isTouching(player))
      {
        zombieGroup2.get(i).visible=false

      }
    }

    //Control the player
    if(keyDown(UP_ARROW))
    {
      player.y = player.y - 10;
      
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }


   
    for(var i=0;i<zombieGroup.length;i++)
    {
      if(zombieGroup.get(i).isTouching(player))
      {
        zombieGroup.get(i).destroy();
        score = score + 10
  
      }   
      }
      for(var i=0;i<zombieGroup.length;i++)
      {
        if(zombieGroup.length >0 )
        {
          if(player.y-zombieGroup.get(i).y < 300)
          {
          
            zombieGroup.get(i).changeAnimation("moving", zombieMove);
            zombieGroup.get(i).velocityY = 3; 
          }
      }
    }
    
    if(player.y < -2750)
    {
      zombieGroup.destroyEach();

      camera.position.x=windowWidth/2;
      camera.position.y=-2750;

      levelSprite = createSprite(windowWidth/2, -2750);
      levelSprite.addImage("Level Passed", levelComplete);
      levelSprite.scale = 0.5
  
    }

    if(player.y < -3264)
    {
      gameState = "level2"

      camera.position.x=player.x;
      camera.position.y=player.y;
      player.changeImage("player_level2", playerSprite);
      player.x = windowWidth/2
      player.y = 2220
      

    }
  }
  else if(gameState === "level2")
  {
    
    console.log(player.x);
    console.log(player.y);
    player.scale = 0.4;
    back1.changeImage("track2", track2);
    
    back1.scale = 1.1;
    for(var i=0;i<zombieGroup2.length;i++)
    {
      if(zombieGroup2.get(i).isTouching(player))
      {
        zombieGroup2.get(i).visible=true

      }
    }
    //level2Sprites();
    
    if(keyDown(UP_ARROW))
    {
      
      player.y = player.y - 10;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }

    if(keyDown(DOWN_ARROW))
    {
      player.y = player.y + 5;
    }

    if(player.y > 2220)
    {
      camera.position.y= 2220;
      camera.position.x=player.x;
    }

    if(player.y < 2220)
    {
      camera.position.x=player.x;
      
    }

    if(player.y < - 285)
    {
      camera.position.y= -285;
    }

    if(player.x < - 263.5)
    {
      camera.position.x = -248.5;
      
    }
      for(var i=0;i<zombieGroup.length;i++)
      {
        console.log("zombieGroup.length"+zombieGroup.length)
        if(zombieGroup.length >0 )
        {
          if(player.y-zombieGroup.get(i).y < 300)
          {
          
            zombieGroup.get(i).changeAnimation("moving", zombieMove);
            zombieGroup.get(i).velocityY = 3; 
          }
      }
    }
  }
  

  drawSprites();
  fill("white");
  textSize(20);
  text("Score: " + score, camera.position.x - 450, camera.position.y - 395);
  text("Level: " + gameState, camera.position.x - 450, camera.position.y - 370);

}
function controlPlayer()
{
  if(keyDown(UP_ARROW))
    {
      player.y = player.y - 10;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }
  
}
//LEVEL 1 
function spawnZombies() 
{
  for (var i=0; i<100; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2-100,windowWidth/2+100)),Math.round(random(-2500, 4000)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
	  zombie.scale = 0.3;
	
	  //add each zombie to the group
	  zombieGroup.add(zombie);
  }
}
//LEVEL 2
function spawnZombies2() 
{
  for (var i=0; i<100; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2-100,windowWidth/2+100)),Math.round(random(-2500, 4000)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
	  zombie.scale = 0.3;
	
	  //add each zombie to the group
	  zombieGroup2.add(zombie);
  }
}
function level2Sprites()
{
  //office
  var s1 = createSprite(161.5, 1510, 50, 100);
  var s2 = createSprite(101.5, 1510, 50, 100);
  var s3 = createSprite(96.5, 1455, 30, 30);
  var s4 = createSprite(71.5, 1510, 30, 30);
  var s5 = createSprite(131.5, 1500, 50, 100);
  var s6 = createSprite(26.5, 1525, 30, 30);
  var s7 = createSprite(-275.5, 1425.8, 350, 160);
  var s8 = createSprite(-433.5, 1525, 30, 30);
  var s9 = createSprite(-383.5, 1245, 30, 30);
  var s10 = createSprite(-13.5, 1400, 30, 30);
  var s11 = createSprite(61.5, 1143, 140, 100);
  var s12 = createSprite(141.5, 1140, 20, 20);
  var s13 = createSprite(-18.5, 1140, 20, 20);
  var s14 = createSprite(151.5, 1085, 30, 30);
  var s15 = createSprite(-83, 1160, 30, 240);
  var s16 = createSprite(-183.5, 1160, 60, 240);

  s1.bounceOff(player);
  //s1.setVisibility = "false";
}