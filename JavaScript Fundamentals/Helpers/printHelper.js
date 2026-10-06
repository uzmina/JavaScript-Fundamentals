// add export keyword so fucntion could be exported to be reused

export function printAge(age){
    console.log(age)
}

//create a class
export class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }

    printLastName(lastName){
        console.log(lastName)
    }
}
//exporting the instance instead of class to keep the logic encapsulated
class PaymentDetails{
    printCard(card){
        console.log(card)
    }
}

export const paymentDetails = new PaymentDetails;