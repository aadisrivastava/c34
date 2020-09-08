//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  database=firebase.database();
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  stroke("yellow");
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogImage2)
  }
  drawSprites();
  text("Note:Press UP_Arrow key to feed DRAGO" ,120,10)
  text("FOOD REMAINING:",180,120);

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

