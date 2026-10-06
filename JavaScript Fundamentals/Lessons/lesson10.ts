//Difference between JS and TS
//strict adherence to data type
//can create a new type
var firstName: string = "John"
var lastName: string = "Smith"
var age: number = 25

//create a new type
type Customer = {firstName:string, lastName:string, active:boolean}
var firstCustomer:Customer ={
    firstName:"Jane",
    lastName:"Doe",
    active:true
}