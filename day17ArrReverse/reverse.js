
/*
let user="Siddhu";
let split=user.split("");
console.log(split);
let reversedArr=split.reverse();
console.log(reversedArr);
console.log(reversedArr.join());//u,h,d,d,i,S
console.log(reversedArr.join(""));
console.log(reversedArr.join("-"));
console.log(user.split("").reverse().join(""));

//sorting
let num=[1,4,2,3,8,5,6,9,7,20,11,23,45,111,1111,11111];
// console.log(num.sort());//it sort like sorting of dictionary but in number
//(a,b)=>a-b; if a-b gives negative then small is written first
//(a,b)=>a+b; it gives positive then interchange their position

console.log(num.sort((a,b)=> a-b));//in ascending order
console.log(num.sort((a,b)=>b-a));//in descending order
*/

/*
//Additional methods
1.)toString();
2.)from();
3.)isArray();//it gives true or false
4.)of();
*/
/*
//Implementation
let num=[1,4,2,3,8,5,6,9,7,20,11,23,45,111,1111,11111];
console.log(num.toString());//it changes into string
let userName="Siddhu";
console.log(Array.from(userName));//it forms array of username
console.log(Array.isArray(userName));//false
console.log(Array.isArray(num));//true
//creating array
console.log(Array.of(1,2,3));//it creates array of 1,2,3 i.e [1,2,3]
*/
/*
//sorting String
let fruits=["cherry","Cherry","apple","banana","grapes"];
let ft1=fruits[0];
let ft2=fruits[1];
let ft3=fruits[3];
console.log(ft1.charCodeAt(0));//c=99
console.log(ft2.charCodeAt(0));//C=67
console.log(ft3.charCodeAt(0));//a=97
console.log(fruits.sort());//in ascending order
console.log(fruits.reverse());//in descending order
*/
/****************   Problem based on Array and it's Method   ************************** */
/*************************   Problem-1   ****************************************************** */

/*
You are building a digital billing system for a restaurant.You have an array of item prices
ordered by a customer.You need to calculate the final bill by applying 13%VAT to each item
and summing the total.
Hint: Use .map()for VAT ,.reduce() for summation.
Input:[100,200,150],
Output: Total bill:508.5
*/
/*
let itemPrices=[100,200,150];
let vatApply=itemPrices.map((price=>price+price*13/100));
console.log(vatApply);
console.log(vatApply.reduce((add,val)=>add+val,0));
*/
/*************************   Problem-2   ****************************************************** */
/*
In a university's result processing system,you are given an array of student marks.
Write a function to return the list of marks that represent students who passed(>=40)
Hint:Input:[35,80,70,25,90];
Output:[80,70,90];
*/
/*
let marks=[35,80,70,25,90];
console.log(marks.filter((mark)=>mark>=40));
*/
/*************************   Problem-3   ****************************************************** */
/*
While reviewing a customer's cart,the system must find the price of the most expensive
item to offer a premium warranty.
Hint:Use .reduce() to find the max.
Input:[199,499,1299,850,350];
Output:Most Expensive item:1299;
*/
/*
 const itemPrices=[199,499,1299,850,350];
 let expensiveItem=itemPrices.reduce((first,second)=>(first > second)?first:second);
 console.log(expensiveItem);
 */
/*************************   Problem-4   ****************************************************** */
/*
In a student record system,return the first student who has scored 80 or above for 
immediate distinction notification.
Hint:Use .find()
Input:[50,65,77,81,60]
Output:First distinction:81
*/
/*
const mark=[50,65,77,81,60];
let firstDis=mark.find((num)=>num>=80);
let firstIndex=mark.findIndex((num)=>num>=80);
console.log(`First distinction:${firstDis}`);
console.log(`Index of first distinction:${firstIndex}`);
*/
/*************************   Problem-5   ****************************************************** */
/*
An online shop stores delivery status of each order as true(delivered) or flase(pending).
WAP to verify if all orders have been delivered.
Hint:Use .every().
Input:[true,true,false,true]
Output:Not all orders are delivered
*/
/*
const order=[true,true,false,true];
console.log(order);

let verifyOrder=order.every((val)=>val === true);
// console.log(verifyOrder);
if(verifyOrder){
    console.log(`All orders are delivered`);
}else{
        console.log(`NOt all orders are delivered`);
}
*/
/*************************   Problem-6   ****************************************************** */
/*
In a gaming app,scores below 50 are disqualified.The rest get a 10-point bonus.
Filter and adjust the scores.
Hint: .filter() then .map()
Input:[30,55,70,45,90]
Output:[65,80,100]
*/
/*
const score=[30,55,70,45,90];
let disqualified=score.filter((score)=>score>50);
let adjust=disqualified.map((add)=>add+10);
console.log(adjust);
*/
/******************   Problem-7 -> Inventory Sales Summary  ****************************************************** */

/*
🏬 Problem 7: Inventory Sales Summary
Problem: You are tracking the total number of items sold in a store. 
Given an array of sold units per product, calculate the total.
 Hint: Use .reduce(). Input: [2, 5, 7, 3] 
 Output: Total items sold: 17
*/
/*
let soldArr=[2, 5, 7, 3];
let prodArr=soldArr.reduce((add,val)=> add + val,0);
console.log(`Total items sold:${prodArr}`);
*/
/******************   Problem-8 -> Movie Duration Filter  ****************************************************** */

/*
🎥 Problem 8: Movie Duration Filter
Problem: In a movie recommendation app, suggest the first movie 
longer than 2 hours from the given durations. 
Hint: Use .find(). Input: [90, 110, 130, 100] 
Output: First long movie: 130
*/
/*
const movieArr=[90, 110, 130, 100] ;
let firstLong=movieArr.find((min)=>min>120);
console.log(`First long movie:${firstLong}`);
*/
/******************   Problem-9 -> Failing Students Alert  ****************************************************** */

/*
🎓 Problem 9: Failing Students Alert
Problem: A school management system must quickly identify if 
any student has failed an exam (marks < 40). 
Hint: Use .some(). Input: [70, 55, 30, 85]
 Output: There is at least one failed student.
*/
/*
const markArr=[70, 55, 30, 85];
let failedArr=markArr.some((mark)=>mark < 40);
if(failedArr){
    console.log(`There is at least one failed student.`);
}else{
    console.log(`There is Noone failed student.`);    
}
*/
/******************   Problem-10 -> Inventory Capitalization ****************************************************** */

/*
🛒 Problem 10: Inventory Capitalization
Problem: You are preparing inventory reports. 
Convert all product names to uppercase before displaying.
 Hint: Use .map(). Input: ["milk", "bread", "butter"].
  Output: ["MILK", "BREAD", "BUTTER"]
 */
/*
const reportArr=["milk", "bread", "butter"];
let upperOutput=reportArr.map((str)=>str.toUpperCase());
console.log(upperOutput);
*/
/******************   Problem-11 -> Meal Calorie Calculator ****************************************************** */

/*
🍔 Problem 11: Meal Calorie Calculator
Problem: In a fitness tracking app, calculate the 
total calorie intake from a list of food items consumed. 
Hint: Use .reduce(). Input: [300, 450, 500]
 Output: Total calories: 1250
*/
/*
const foodItems=[300, 450, 500];
let totalCalorie=foodItems.reduce((add,val)=>add+val,0);
console.log(`Total calorie:${totalCalorie}`);
*/
/******************   Problem-12 -> Hotel Room Availability Checker ****************************************************** */

/*
🛏 Problem 12: Hotel Room Availability Checker
Problem: In a hotel booking system, determine the index of the first available room. 
Hint: Use .findIndex(). Input: ["booked", "booked", "available", "booked"]
 Output: First available room at index 2
*/
/*
const rooms=["booked", "booked", "available", "booked"];
let firsAvailableRoom=rooms.findIndex((room)=> room==="available");
console.log(`First available room at index ${firsAvailableRoom}`);
*/
/******************   Problem-13 -> Out of Stock Alert**************************************************** */

/*
🏪 Problem 13: Out of Stock Alert
Problem: A store tracks product availability using a boolean array. 
Check if any product is out of stock. 
Hint: Use .some(). Input: [true, true, false, true] 
Output: Some items are out of stock.
*/
/*
const storeProd=[true, true, false, true] ;
let stockItem=storeProd.some((hasStock)=> hasStock === false);
if(stockItem){
    console.log(`Some items are out of stock`);    
}else{
     console.log(`All items are in stock`);    
}
*/
/******************   Problem-14 -> Product of All Elements**************************************************** */

/*
🔢 Problem 14: Product of All Elements
Problem: Calculate the product of all 
elements in a given array for performance analytics. 
Hint: Use .reduce(). 
Input: [1, 2, 3, 4] 
Output: Product: 24
*/
/*
const arrElmt=[1, 2, 3, 4] ;
let prodElmt=arrElmt.reduce((prod,val)=> prod*val ,1);
console.log(`Product:${prodElmt}`);
*/
/******************   Problem-15 -> Extract Numbers from Mixed Array*************************************************** */
/*
📊 Problem 15: Extract Numbers from Mixed Array
Problem: In a data cleaning process, extract only numeric values from a mixed-type array. 
Hint: Use .filter() + typeof. 
Input: [1, "hello", 3, true, 5] 
Output: [1, 3, 5]
*/
/*
const mixedArr=[1, "hello", 3, true, 5] ;
let numbersOnly=mixedArr.filter((item)=> typeof item ==="number");
console.log(numbersOnly);
*/
/******************   Problem-16 -> Count Specific Number Frequency  *************************************************** */

/*
📞 Problem 16: Count Specific Number Frequency
Problem: Given an array of feedback scores, 
count how many times a particular score (e.g., 5) was given.
 Hint: Use .filter() and .length.
  Input: [5, 2, 5, 6, 5], find 5 
  Output: 5 occurs 3 times
*/
/*
const scores=[5, 2, 5, 6, 5];
 let particularScore=5;
let filteredArr=scores.filter((item)=> item===particularScore);
console.log(` ${particularScore} occurs ${filteredArr.length} times`);

/******************   Problem-17 -> Reverse a Name  *************************************************** */

/*
🔁 Problem 17: Reverse a Name
Problem: A text editor needs to reverse a string input character by character.
 Hint: Use .split("") + .reduceRight().
  Input: "coding" Output: gnidoc
*/
/*
const str="coding";
let reversedArr=str.split("");
let reversedstring=reversedArr.reduceRight((acc,val)=>acc+val,"");
console.log(reversedstring);
*/
/******************   Problem-18 -> Enhance Playlist Titles  *************************************************** */

/*
🎵 Problem 18: Enhance Playlist Titles
Problem: In a music app, append a 🎵 emoji to
 each playlist name for design improvement. 
Hint: Use .map().
 Input: ["Rock", "Jazz", "Pop"] 
 Output: ["Rock🎵", "Jazz🎵", "Pop🎵"]
*/
/*
const music=["Rock", "Jazz", "Pop"] ;
let popedMusic=music.map((emoji)=>emoji + "🎵");
console.log(popedMusic);
*/
/******************   Problem-19 -> Enhance Playlist Titles  *************************************************** */

/*
🔍 Problem 19: First Prime Number Detection
Problem: In a math tutoring tool, detect the first prime number from a user-entered array. 
Hint: Use .find() with a custom isPrime() function. 
Input: [4, 6, 8, 11, 15]   -->     Output: First prime: 11
*/
/*
// Prime checker function
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const num = [4, 6, 8, 11, 15];

// Using.find() to get the first prime number
let primeNum = num.find(isPrime);

console.log(`First prime: ${primeNum}`);
*/
/******************   Problem-20 -> Remove Duplicate Orders  *************************************************** */

/*
🧺 Problem 20: Remove Duplicate Orders
Problem: In an order management system, remove duplicate order IDs from the log.
 Hint: Use .filter() with indexOf() check. 
 Input: [1, 2, 2, 3, 4, 4, 5] 
 Output: [1, 2, 3, 4, 5]
*/
let arr = [1,2,2,3,4,4,5]
let filteredArray = arr.filter((v,i,array)=>array.indexOf(v)===i)
let newArray = arr.filter((v,i,array)=>array.indexOf(v)===i)
console.log(filteredArray)
console.log(newArray)


























