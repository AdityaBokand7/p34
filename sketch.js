var dog;
var happyDog;
var foodS;
var foodStock;
var database;

function preload()
{
Doog = loadImage("images/Dog.png")
happyDog123 = loadImage("images/happydog.png")
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
writeStock(foods)

dog.addImage(happyDog123)

}
  drawSprites();
  //add styles here
  textSize(30);
  fill("green")
  text("foodStock"+foodS,200,200)

}
function readStock(data){
foodS = data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  }

  )
}



