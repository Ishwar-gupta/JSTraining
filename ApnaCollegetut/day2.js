/*
/////////////////  Assignment -1  Electricity Bill Calculator ///////////////////////////////////////////////////////////////////////////////////
prompt the user to enter the number of electricity units consumed.
calculate the total electricity bill according to  these slabs:
-first 50 units:Rs.5/unit
-Next 100 units(51-150):7/unit
-Next 150 units(151-300):Rs.10/unit
-above 300 units:Rs.15/unit
-display the total bill using console.log or alert.
Validate the input to ensure it is a non-negative number.
*/
/*
//taking user input of consumed units
let units=Number(prompt("Enter the number of electricity units consumed:"));

//validating for non-negatve number along with condition

if(isNaN(units) || units <= 0){
     alert("Please enter a valid non-negative number for units.");
}else{
    let bills=0;
    if(units <= 50){
        bills=units*5;
    }else if(units <=150){
        bills=50*5 + (units-50)*7;
    }else if(units <= 300){
        bills=50*5 + 100*7 + (units-150)*10;
    }else if(units > 300){
        bills = 50*5 + 100*7 +(units-300)*15;
    }

    console.log(`Total electricity bill for ${units} units is Rs. ${bills}`);
}*/

/////////////////  Assignment -2    Car Rental Cost Calculator////////////////////////////////////////////////////////////////////////////////////

/*
prompt the user  to enter the number of days a car was rented.
-calculate the total rental cost based on:
Rs.1000 per day for the first 5 days.
Rs.800 per day for any additional days beyond 5
Display the total cost using alert.
Validate the input to ensure it is a positive number.

*/
/*
//taking user-input
let days=Number(prompt("Enter the number of days a car was rented:"));

//validating the days to ensure it is a positive number
if(isNaN(days) || days <= 0){
    alert("Please enter a valid postive number.");
}else{
    let cost=0;
    if(days <= 5){
        cost= days*1000;
    }else{
        cost=1000*5 + (days - 5)*800;
    }
    //displaying the result using alert
    alert(`The total cost for ${days} is Rs.${cost}`);
}*/

/////////////////  Assignment -3  Number Properties Checker////////////////////////////////////////////////////////////////////////////////////
/*
prompt the user to enter a number.
determine and console.log whether the number is positive or negative.
dtermine and cosole.log whether the number is even or odd
Count the number of digits manually(without built-in functions) and console.log:
-"Single Digit Number"if digits =1
-"Double Digit Number"if digits=2
-"Number with more than two Digits"if digits >2
-Validate the input to ensure it is a valid number.
*/
/*
// taking input from user
let num = Number(prompt("Enter the number:"));

// validating the input to ensure it is a valid number
if (isNaN(num)) {
    alert("Please enter a valid number.");
} else {
    // store original number
    let originalNum = num;

    // positive or negative
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is neither negative nor positive (zero).");
    }

    // even or odd (only for integers)
    if (Number.isInteger(num)) {
        if (num % 2 === 0) {
            console.log("The number is even.");
        } else {
            console.log("The number is odd.");
        }
    } else {
        console.log("The number is not an integer, so even/odd check skipped.");
    }

    // count digits manually (ignoring sign and decimal)
    let absNum = Math.abs(Math.floor(num)); // remove decimal and make positive
    let count = 0;

    if (absNum === 0) {
        count = 1;
    } else {
        while (absNum !== 0) {
            absNum = Math.floor(absNum / 10);
            count++;
        }
    }

    // output based on digit count
    if (count === 1) {
        console.log("Single Digit Number");
    } else if (count === 2) {
        console.log("Double Digit Number");
    } else if (count > 2) {
        console.log("Number with more than two Digits");
    }
}
*/
/////////////////  Assignment -4  PIN Verification and ATM Withdrawal Simulation////////////////////////////////////////////////////////////////////////////////////
/*
set a correct PIN(e.g 1234) and initial account balance (e.g Rs.5000).
Allow the user upto 3 attempts to enter the correct PIN using a while loop.
if the correct PIN is entered,prompt for the withdrawal amount.
if the withdrawal amount is valid and less than or equal to balance,dudect it and
display the remaining balance
if the withdrawal amount is invalid or insufficient,displaya an appropriate alert.
if PIN attempts excedd 3 ,display an account locked message.
validate inputs accordingly.
*/
/*
let correctPin = 1234;
let balance = 5000;
let attempts = 0;
let pin;

while (attempts <= 3) {
    pin = prompt("Enter your PIN:");
    
    if (parseInt(pin) === correctPin) {
        let amount = prompt("Enter amount to withdraw:");
        amount = Number(amount); // ensure it's treated as a number

        if (amount > 0 && amount <= balance) {
            balance = balance - amount;
            alert("Withdrawal successful!! Remaining Balance: Rs. " + balance);
        } else {
            alert("Invalid or insufficient amount.");
        }
        break;
    } else {
        attempts++;
        if (attempts === 3) {
            alert("Your Account has been locked.");
        } else {
            alert("Incorrect PIN. Attempts left: " + (3 - attempts));
        }
    }
}*/
//another method using var keyword
/*
var correctPin=1234;
var balance=5000;
var attempts=0;
var pin;
while(attempts <= 3){
    pin=prompt("Enter your PIN:");
    if(parseInt(pin) === correctPin){
        var amount = prompt("Enter amount to withdraw:");
        if(amount > 0 && amount <= balance){
            balance=balance-amount;
            alert("Withdrawal successful !! Remaining Balance: Rs. " + balance);
        }else{
            alert("Invalid or insufficient amount.");
        }
        break;
    }else{
        attempts++;
        if(attempts === 3){
            alert("Your Account has been locked.");
        }else{
            alert("Incorrect PIN. Attempts left: " + (3-attempts));
        }
    }
}*/

/////////////////  Assignment -5  Weekly Sales Total Calcualator////////////////////////////////////////////////////////////////////////////////////
/**
 prompt the user to enter daily sales amount for 7 days(one by one 
 using afor loop).
 use  a for loop to sum all daily sales.
 display the total sales at the end using alert
 validate that each daily sales input is a non-negative number.
 */
let total =0;
for(let i = 1 ;i <= 7; i++){
    let sale=Number(prompt("Enter sales for day" + i + ":"));
    if(!isNaN(sale) && sale >= 0){
        total += parseFloat(sale);
    }else{
        alert("Invalid Input !!");
        i--;//repeats the same day
    }
}
alert(`Total weekly sales:Rs.${total}`);














