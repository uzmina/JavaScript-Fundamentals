//Relational and comparison operators

//Relational
//> more than
//< less than
// >= more than and equal to
//<= less than or equal to

var result = 10>5
//console.log(result) // will return True since 10 is more than 5

var result = 4>5
//console.log(result)// should return false
var result = 5<5 //will result in false
var result = 5<=5 // will result in true
console.log(result)

//Equality Operators
var x = 1
console.log(x == '1') //will return true as this ia a lose comparison and does not look for type
console.log(x === '1')// will return false as this is a strict comparison and compare the type of the value, so here 
//the value is a string and not a number
console.log(x === 1) //will return true as x is a number