var dog,happyDog;
var database;
var foodS,foodStock;



function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  dogImage2=loadImage("dogImg1.png");
  
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(700,300,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
 
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  stroke("yellow");
}


function draw() {  
  background(46,139,87);
 
  fill(255,255,254);
  textSize(15);
  text("NOTE:PRESS UP_ARROW KEY TO FEED STARKY",300,30);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);

  }

   
  drawSprites();
  
  text("FOOD REMAINING:19",180,120);
  
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}
 function readStock(data){
  foodS=data.val();

 }






  




