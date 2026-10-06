//Functions

//declarative function can be called from any point(before or after writing the function)
function HelloOne() {
    console.log("Hello One")
}

HelloOne()

//Anonymous function can only be called after declaring
var helloTwo = function(){
    console.log("Hello Two")
}
helloTwo()

//ES6 syntax function or Arrow function dont have to mention keyword function
var helloThree = () => {
    console.log("Hello Three")
}
helloThree()

//functions with parameter
var printName = (firstName, lastName, age) => {
    console.log(firstName, lastName, age)
}
printName('Jane', 'Doe', 25)

//function with return value
function multiplyNum(number){
    return number*2
}
console.log(multiplyNum(5))

//using functions by importing
import { printAge } from "../Helpers/printHelper.js"
printAge(23)

//import everything
import * as helper from "../Helpers/printHelper.js"
helper.printAge(10)