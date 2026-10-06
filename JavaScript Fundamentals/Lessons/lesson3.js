//Objects
var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Honda", "BMW", "Mercedes", "Lexus"]
}
//console.log(customer) //print the whole object
//console.log(customer.firstName) //print just one specific value with dot notation
//console.log(customer["lastName"]) //another way of calling a specific value with bracket notation

customer.firstName = "Jane" //dot notation
customer['lastName'] = "Doe" //bracket notation

//console.log(`${customer.firstName} ${customer.lastName}`)//interpolation

//Arrays
var cars = ["Honda", "BMW", "Mercedes", "Lexus"]
console.log(cars[1])
cars[0] = "Audi"
console.log(cars[0])
console.log(customer.cars[2]) //calling array from an object