//import class
import { CustomerDetails, paymentDetails } from "../Helpers/printHelper.js";
var customerDetails = new CustomerDetails
customerDetails.printFirstName("John")
customerDetails.printLastName("Smith")

//imported the instance of the class
paymentDetails.printCard(123456789)