//create an const object called "product" to store information under keys are title
//Rating,offer and price
/*
const product={
    title:"Ball pen",
    Rating:5.5,
    offer:40,
    price:500,
};
console.log(product.title);//Ball pen
// console.log(product["title"]);
console.log(product.Rating);//5.5
// console.log(product["Rating"]);//5.5
console.log(product.offer);//40
// console.log(product["offer"]);//40
console.log(product.price);//500
// console.log(product["price"]);//500
*/

//string is a sequence of characters used to represent text
//create string: let str="siddhu";
//string length:str.length in console
//string Indices: str[0],str[1],str[2];
/*
all strings declared in JS has inbuilt properties and functions called methods

 */
// let str="Siddhu";
// console.log(str[0]);
// console.log(str.length);
// console.log(str[5]);

/*
Type Checker:
Ask the user to enter any value.Based on the input,determine whether it is a number,boolean,null
or undefined and display the result using alert.

Hint:
use prompt for input(which always returns a string),then check:
=> If the value is exactly "true" or "false",treat it as boolean.
=> if the value is an empty string,consider it undefined.
=> if the value is "null",treat it as null.

-> Use isNaN and Number() to check if it's a number.

Expected Input:
"false"

Expected Output:
type is boolean (via alert);
 */

/*
//taking input from user
let input=prompt("Enter any value:");

let result;//it just check the type
if(input === "true" || input === "false"){
    result="the type is Boolean";//when input is true or false
}else if(input == ""){
    result="the type is undefined ";//when we click Ok button only it will print undefined
}else if(input == "null"){
    alert("the type is null ");//when we click cancel button only it will print null
}else if(!isNaN(Number(input))){
    result="the type is Number";
}else{
    result="the type is unknown";
}
//showing the result using alert
alert(result);
*/
/******************************************  Problem -2  ************************************************************************************** */
/*
Ask the user to enter a number.Use a while loop to print all multiples of 3 from 1 to 
that number
(inclusive).Stop the loop early  if a multiple of 5 is encountered.

Hint:
use a while loop  and check for i%3==0.if i%5==0 use break to exit.
Expected input:10
Expected Output:3
*/
/*
let num=Number(prompt("Enter number upto you want all multiples of that number:"));
let i=1;
while( i <= num){
        if(i % 5 == 0) {
            break;
        }
        if( i%3 == 0){
           console.log( i );
        }
        
    i++;
}*/

/******************************************  Problem -3  ************************************************************************************** */
/*
Problem:ODD NUMBER SKIPPER

Ask the user  to enter a number.Use a while loop to print all even numbers from 0 to 
that number(inclusive) in the console.Skip all odd numbers using continue.

Hint:
Convert the input to a number.Loop  from 0 to that number,use % to check for eveness ,
 and skip odd numbers with continue.

Expected Input:"6"
Expected Output:
0
2
4
6
 */
/*
let num=Number(prompt("Enter a number:"));
for( let i=0;i<=num;i++){
    if(i % 2 !== 0){
         continue;
    }else{
        console.log(i);
    }
}
*/
/********************************  Problem -4  ************************************************************************************** */
//Problem:guessing secret number
/*
set a secret number(eg.7) .Ask the user to guess it using prompt until they get it right.After a
correct guess,alert"correct".

Hint:
use a do-while loop to keep prompting until the guess equals the secret number.Convert input to a
number for comparison.

Expected Input: "5","10","7"
Expected Output: correct!!(via alert)
 */
/*
 let userNumber;
let secretNumber=7;
do{
    userNumber=Number(prompt("Guess the game number:"));

    if(userNumber==secretNumber){
         alert("Congratulations!! You guess correct secret Number:");        
    }else{
         alert("You entered wrong number!!,please guess again!1");
    }

}while(userNumber!=secretNumber);
*/
/********************************  Problem -5  ************************************************************************************** */
/*
Problem:Truthy or Falsy Checker

Ask the user to input a value and determine whether the value is truthy or falsy in JS

Display the result using alert.

Hint:
Use if(input) to check truthiness.Remember falsy values include: 0,"",null,undefined,NaN and
false.
Expected input:"0"
Expected Output: the value is falsy(via alert);
 */
/*
let num=prompt("Enter the value:");
if(num){
    alert("the value is truthy.");
}else{
    alert("The value is falsy.");
}
*/
// console.log(typeof NaN);//number
// console.log(isNaN("hello"));//true
// console.log(Boolean(""));//false
// console.log(typeof typeof 7);//string
// console.log(null==undefined);//true
// console.log(!!"hello");//true
// console.log(1+"2"+3);//123
// console.log(true+false);//1
// console.log(typeof null==="object");true
// // console.log(typeof "")
// let a ="5";
// let b=2;
// console.log(a*b);  //10
// console.log(Boolean(NaN))
// if(0){
//     console.log("true");//true    
// }
// else{
//     console.log("false");
// }

// // let x=5;console.log((x++ + ++x));//12
// let value=10;
// value=value>5?"Greater":"smaller";//greater
// console.log(value);

// switch(typeof NaN){
//     case "number":
//         console.log("it's a number");//it's a number is o/p
//         break;
//     default:
//         console.log("something else");
// }

// let a="hello";
// let b=3;
// console.log(a-b);
// let a =null;
// console.log(typeof a );
// let i=0;
// while(i<3){
//     i++;
// }
// console.log(i);//3
// console.log(Boolean(NaN));

/********************************  Problem -6  ************************************************************************************** */
/*

Assignment for Tuesday
_______________________
Task 1: (Conditional Statement: Switch.... case+if else if else)

You are tasked with building part of a banking system that handles different types of transactions: 

deposit, withdraw, and transfer.

Write a program that:
1. Takes three variables:
 - transactionType (string): either "deposit", "withdraw", or "transfer"

 - accountType (string): either "savings" or "checking" 

 - amount (number): the amount involved in the transaction

-all input from prompt and output in console. 

2. Based on the transaction type and conditions below, prints the correct message: 

3. Rules:

- Deposit:
 - If the amount is greater than 10,000, print "Large deposit - requires manager approval."

 - Otherwise, print "Deposit successful."

- Withdraw:
 - From savings:

 - If the amount is over 1000, print "Savings withdrawal limit exceeded."

 - Otherwise, print "Withdrawal from savings successful."

 - From checking:
 - If the amount is over 5000, print "Overdraft alert! Transaction blocked."

 - Otherwise, print "Withdrawal from checking successful." 

- Transfer:
 From savings, print "Transfers from savings are not allowed."

 - From checking:
 - If the amount is over 2000, print "Transfer requires OTP verification."

 - Otherwise, print "Transfer successful."

- For any invalid transaction type, print "Invalid transaction type."

Sample Input:

transactionType = 'withdraw';
accountType = 'savings';
amount = 1200;

Expected Output:
Savings withdrawal limit exceeded.
_________________________
*/
/*
//taking input from user 
let transactionType=prompt("Enter transaction type(deposit,withdraw or transfer):");
let accountType=prompt("Enter account type(savings or checking):");
let amount=Number(prompt("Enter transaction amount:"));
//to handle case sensitivity input is changed into loweCase
transactionType=transactionType.toLowerCase();
accountType=accountType.toLowerCase();
//operating switch operation
switch(transactionType){
    case "deposit":
        if(amount > 10000) console.log("Large deposit-requires manager approval.");
        else console.log("Deposit Successful !!");
        break;
    case "withdraw":
        if(accountType == "savings") {
            if(amount > 1000) console.log("Savings withdrawal limit exceeded.");
            else console.log("Withdrawal from savings successful !!");          
        }else if( accountType == "checking"){
            if(amount > 5000) console.log("Overdraft alert! Transaction blocked.");
            else console.log("Withdrawal  from checking successful.");            
        }
        else console.log("Invalid Account Type.!!");
        break;
    
    case "transfer":
        if(accountType == "savings") console.log("Transfer from savings aren't allowed");
        else if(accountType == "checking"){
            if(amount > 2000)  console.log("Transfer requires OTP verification");
            else console.log("Transfer Successful.");
        }
        else console.log("Invalid Account Type.");
        break;

    default:
        console.log("Invalid Transaction Type.");                 
}
*/

let x=10;
function call(){
    console.log(x);
    let x=20;
}
call();






























