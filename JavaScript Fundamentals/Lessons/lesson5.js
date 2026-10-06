//logical operators
// AND &&
//console.log(true && true) // will return true as in order for expression to be true, all values have to be true
//console.log(true && false) //will return false since one value is flase

//logical operator OR ||
console.log(true || true) // will return true as in order for expression to be true, any one value have to be true
console.log(true || false) // will also return expression as true since any of the value has to be true
console.log(false || false) // will return  false as expression as both of the value are false

var isAgeMoreThanEighteen = false
var isUSCitizen = true

var eligibleForDriverLicense = isAgeMoreThanEighteen && isUSCitizen //for expression to be true both conditions should be true
console.log("This person is eligible for driver license  " + eligibleForDriverLicense)

var eligibleForDriverLicense = isAgeMoreThanEighteen || isUSCitizen
console.log("This person is eligible for driver license  " + eligibleForDriverLicense)// for expression to be true any of the value should be true

//Logical operator NOT
console.log(!true) // will return false
console.log(6 == 10) // will return false as 6 is not equal to 10
console.log(6 !== 10) // will return true as 6 is not equal to 10 we are using NOT logical operator !