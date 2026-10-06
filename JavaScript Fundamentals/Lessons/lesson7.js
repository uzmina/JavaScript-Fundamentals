//Loops
//For(initialization statement; condition statement; what you want to do after one cycle is complete){}

//for i loop
for(i=0; i<5; i++){
    console.log("Hello World "+ i) //will print the value of i after each run
}

//for of loop
var cars = ["Honda", "BMW", "Mercedes", "Lexus", "Audi", "Ferari", "Alpha Romeo"]
for(car of cars){
    console.log(car)
    if(car == "Lexus"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car =>{
    console.log("in ES6 loop  " + car)
})