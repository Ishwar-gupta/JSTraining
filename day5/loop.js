
///*************************************************************************************** */
/*
if (1){
    console.log("this is truthy value");
}
if(0){
    console.log("this is falsy value");
}


if (1){
    console.log("this is truthy value");
}
else{
    console.log("this is falsy value");
}
   
*/
/************************************************************************************** */
/*

let i = 1 ;
while(i < 101)
{
    if(i % 2 == 0)
    {
    console.log("the even number is "+(i));
    }
    i++ ;
}
////////////////////////////////////////////////////////////////////////////////////////////
let j = 1;
while(j < 101)
{
    if(j % 2 != 0)
    {
    console.log("the odd number is "+(j));
    }
    j++ ;
}
*/
/************************************************************************************** */

// to print name 100 times 
/*

let j = 1;
while(j < 101)
{
    console.log("my name is Siddheshwar gupta");
    j++ ;
}

*/
/************************************************************************************** */


// write a program using javascript to print the multiplication table of the number given by user.
/*

let number = Number(prompt("enter the number :"));
let i = 1 ;
while(i < 11)
{
    console.log((number) + " * " + (i) + " = " + (number * i));
    i++ ;
}
*/
/************************************************************************************** */

/*
let i = 1 ;
while(i < 101)
{
 if(i % 3 == 0)
 {
    console.log("Fizz");
 }else if(i % 5 == 0)
 {
    console.log("Buzz");
 }else if(i % 3 == 0 && i % 5 ==0)
 {
    console.log("FizzBuzz");
 }
    i++;
}
*/
/************************************************************************************** */

// to reverse the given number by user
/*
let num = Number(prompt("Enter the number :"))
let rev = 0 ;
let rem ;
while(num != 0)
{
rem = num % 10 ;
rev = rem + (rev*10);
num = parseInt(num / 10) ;        // parseInt or Math.floor

}
console.log(rev);
*/
/************************************************************************************** */


//---------------------------------ASSIGNMENT - DAY - 7----------------------------------

/*

_________________________
__________________________
Assignment 1: Sum of Digits Until It Becomes a Single Digit

Objective:
Given a positive number, repeatedly sum its digits until it becomes a single digit. 

Expected Input:
Input: 9875

Steps:(no need to be displayed)
9+8+7+5 = 29, 
then 2+9 = 11, 
then 1+1 = 2

Expected Output: 2
__________________________

*/

/*// ---------------------first try----------------------
let num = parseInt(prompt("Enter the number"));
let sum = 0 ,rem;
while(num != 0)
{
rem = num % 10 ;
sum = sum + rem ;
num = Math.floor(num / 10 );
}
let helper = sum ;
console.log("first sum : "+(sum));
if(helper >= 10)     // this means the sum done is a not a single integer ,so needs to do further sum untill becomes single
{
    let rem2 , sum2 = 0;
    while(helper != 0)
    {
    rem2 = helper % 10 ;
    sum2 = sum2 + rem2 ;
    helper = Math.floor(helper / 10);
    }
    console.log("second sum : "+(sum2));
}else{
    console.log(" It is already a single digit that is "+(sum));
}
*/

/************************************************************************************** */

// third try
/*

let number = parseInt(prompt("Enter the number"));    // step -1

function getintegers(num)   // step -3
{
    let sum = 0 ,rem;
    while(num != 0){
rem = num % 10 ;
sum = sum + rem ;
num = Math.floor(num / 10 );
}
return sum ;
}


while(number >= 10)    // step - 2
{
    number = getintegers(number);
}
console.log(number);
*/

/************************************************************************************************** */

/*
Assignment 2: Count How Many Times Digit 5 Appears in a Number

Objective:
Write a program using a while loop and if-else statements to count how many times the digit 5 appears in a given positive number.

Expected Input:
4553565

Expected Output:
Count of digit 5: 4
__________________________
Note
Use only while, if-else, and basic arithmetic operators
__________________________
__________________________
*/

/*
let num = parseInt(prompt("Enter the number"));
let rem ;
let count = 0 ;
while(num != 0)
{
rem = num % 10 ;
num = Math.floor(num / 10 );
if(rem == 5) 
{ 
    count++ ;
}
}
console.log("Count of digit 5 is : " + (count));
*/