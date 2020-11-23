var dog;
var happyDog;
var foodS;
var foodStock;
var database;

function preload()
{
Doog = loadImage("Dog.png")
happyDog123 = loadImage("happydog.png")
}

function setup() {

  database = firebase.database();
  console.log(database)
  
  createCanvas(500, 500);

  dog = createSprite(250,250,20,20)
  dog.addImage(Doog)
dog.scale = 0.3
 

 foodStock = database.ref('Food')
  foodStock.on("value",readStock)
 
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS)

dog.addImage(happyDog123)

}
  drawSprites();
  //add styles here
  textSize(27);
  fill("white")
  text("Food Remaining :  "+foodS,100,100)

  textSize(20);
  fill("yellow")
  text("Press UP_ARROW Key To Feed The Drago Milk",50,50)

}
function readStock(data){
foodS = data.val();

}
function writeStock(x){
if(x<0){
  x=0
}else{
  x=x-1
}

  
  database.ref('/').update({
    Food:x
  }

  )
}



