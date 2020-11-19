var dog;
var happyDog;
var foods;
var foodStock;
var database;

function preload()
{
dog = loadImage("images/Dog.png")
happyDog = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
dog.addImage(dog)

  database = firebase.database();
  console.log(database)

 foodStock = database.ref('Food')
  foodStock.on("value",readStock)
 
}


function draw() {  
background(46,139,87)

if(KeyWentDown(UP_ARROW)){
writeStock(foods)
dog.addImage(happyDog)

}
  drawSprites();
  //add styles here
  textSize(30);
  fill("green")
  text("foodStock",200,200)

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



