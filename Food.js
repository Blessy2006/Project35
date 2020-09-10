class Food {
    constructor(){
      this.foodStoke = 0;
      this.lastFed;

      this.image = loadImage("images/milk.png");
    }


    getFeedTime(lastFed){
 this.lastFed = lastFed;
   }
    getFoodStoke(){
    return this.foodStoke;
    }
  
    updateFoodStoke(foodStock){
     this.foodStoke = foodStock;
    }
  
    deduteFood(){
      if(this.foodStoke>0){
          this.foodStoke = this.foodStoke-1;
      }
    }
  display(){

      var x = 80, y = 100;

      imageMode(CENTER);
      image(this.image,720,220,70,70);

      if(this.foodStoke != 0){
          for(var i = 0;i<this.foodStoke;i++){
              if(this.foodStoke != 0){
                  if(i%10 == 0){
                      x = 80;
                      y = y+50;
                  }
                  image(this.image,x,y,50,50);
                  x = x+30;
              }
          }
      }
  }
    
}