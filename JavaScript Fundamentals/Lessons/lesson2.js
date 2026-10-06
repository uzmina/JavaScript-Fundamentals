//Concatenation and interpolations
var price = 80
var itemName = "Cups"

var message1 = "The price for " + itemName + " is " + price //concatenations
var message2 = `The price for ${itemName} is ${price} dollars`  //interpolation
console.log(message1)
console.log(message2)