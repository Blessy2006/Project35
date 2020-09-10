//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;
var feedDog,addFood,fedTime,lastFed,foodObj;

function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg.png');
  
  happyDog = loadImage('images/dogImg1.png');
  
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  foodObj = new Food();
  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);
foodObj.display();

feedTime = database.ref('FeedTime');
feedTime.on("value",function(data){
  lastFed = data.val();
})
  
  //add styles here
  fill(255,255,254); 
   textSize(15);
  if(lastFed>=12){
text("LAST FEED : "+ lastFed%12 + " PM",350,30); 
}
else if(lastFed == 0){
  text("LAST FEED : 12 AM",350,30); 
}
else{
  text("LAST FEED : "+ lastFed + " AM",350,30); 
}
drawSprites();
   }


function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStoke(foodS);
}

function feedDog(){ dog.addImage(happyDog);
   foodObj.updateFoodStoke(foodObj.getFoodStoke()-1);
    database.ref('/').update({ Food:foodObj.getFoodStoke(),
       FeedTime:hour() })
       } 
       //function to add food in stock
        function addFoods(){ foodS++;
 database.ref('/').update({ Food:foodS })
        }