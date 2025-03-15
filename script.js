const runBtn = document.querySelector('.run');
const stopBtn = document.querySelector('.stop');

const addWaterBtn = document.querySelector('.addWaterBtn');
let addWaterInput = document.querySelector('#addWaterInput');
let addWaterAmount = addWaterInput.value;

const addMilkBtn = document.querySelector('.addMilkBtn');
let addMilkInput = document.querySelector('#addMilkInput');
let addMilkAmount = addMilkInput.value;

const late = document.querySelector('#late');
const expresso = document.querySelector('#expresso');
const marachuji = document.querySelector('#marachuji');
const doubleLate = document.querySelector('#doubleLate');
 


function CoffeeMachine(power){
    this.waterAmount = 0;
    this.milkAmount = 0;
 
    const WATER_HEAT_CAPACITY = 4200;
    let timerId;
 
    let getBoilTime = function(){
        console.log(this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power);
 
        return this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power;
    }.bind(this);
 
    function onReady(){
        alert("Кава Готова!");
    }
 
    this.run = () => {
        timerId = setTimeout(onReady, getBoilTime());
        this.waterAmount = this.waterAmount - 100
        this.milkAmount = this.milkAmount - 100
        if (this.milkAmount < 0) {
         this.milkAmount = 0
        }
         document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
         document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`

         document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
         document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

         console.log(this.waterAmount)
         console.log(this.milkAmount)
         alert(`Кава буде готова через ${Math.round(getBoilTime() / 1000)} секунд`)
    }
 
    this.stop = function(){
        clearTimeout(timerId);
        alert("Приготування кави зупинено!");
    }

    this.addWater = (addWaterAmount) => {
        if(this.waterAmount + addWaterAmount > 1000) {
            alert("Забагато води!")
        } else if(this.waterAmount + addWaterAmount <= 1000) {
            this.waterAmount += addWaterAmount
        }
        
        console.log(this.waterAmount)
    }

    this.addMilk = (addMilkAmount) => {
      if(this.milkAmount + addMilkAmount > 1000) {
          alert("Забагато молока!")
      } else if(this.milkAmount + addMilkAmount <= 1000) {
          this.milkAmount += addMilkAmount
      }
      
      console.log(this.milkAmount)
  }
}
 


let coffeeMachine = new CoffeeMachine(10000);

runBtn.addEventListener('click', function(){
    if (coffeeMachine.waterAmount >= 100) {
        coffeeMachine.run();
    } else {
        alert("Не достатньо води")
    }
    
});
stopBtn.addEventListener('click', function(){
    coffeeMachine.stop();
})

console.log(coffeeMachine);

   addWaterInput.addEventListener("input", (event) => {
        addWaterAmount = event.target.value;
        document.querySelector(".numberWater").innerHTML = `${addWaterAmount} мл`
    });

addWaterBtn.addEventListener('click', function(){
  
    coffeeMachine.addWater(+addWaterAmount)
    document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
    document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`
})
 
addMilkInput.addEventListener("input", (event) => {
   addMilkAmount = event.target.value;
    document.querySelector(".numberMilk").innerHTML = `${addMilkAmount} мл`
});

addMilkBtn.addEventListener('click', function(){

coffeeMachine.addMilk(+addMilkAmount)
 document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
    document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

})

late.addEventListener("click", function() {
   coffeeMachine.waterAmount = 700
   coffeeMachine.milkAmount = 700

   document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
   document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`

   document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
   document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

   console.log(coffeeMachine.waterAmount)
   console.log(coffeeMachine.milkAmount)
})
marachuji.addEventListener("click", function() {
   coffeeMachine.waterAmount = 300
   coffeeMachine.milkAmount = 700

   document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
   document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`

   document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
   document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

   console.log(coffeeMachine.waterAmount)
   console.log(coffeeMachine.milkAmount)
})
expresso.addEventListener("click", function() {
   coffeeMachine.waterAmount = 800
   coffeeMachine.milkAmount = 400

   document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
   document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`

   document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
   document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

   console.log(coffeeMachine.waterAmount)
   console.log(coffeeMachine.milkAmount)
})
doubleLate.addEventListener("click", function() {
   coffeeMachine.waterAmount = 600
   coffeeMachine.milkAmount = 800

   document.querySelector(".progressWater").innerHTML = coffeeMachine.waterAmount
   document.querySelector(".progressWater").style = `width: ${coffeeMachine.waterAmount * 100 / 1000}%`

   document.querySelector(".progressMilk").innerHTML = coffeeMachine.milkAmount
   document.querySelector(".progressMilk").style = `width: ${coffeeMachine.milkAmount * 100 / 1000}%`

   console.log(coffeeMachine.waterAmount)
   console.log(coffeeMachine.milkAmount)
})
