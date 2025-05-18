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
let input=prompt("Enter the number:");
if(input){
    alert("this is Boolean type.");//when input is true or false
}else if(input == ""){
    alert("this is undefined ");//when we click Ok button only it will print undefined
}else if(input == null){
    alert("this is null type:");//when we click cancel button only it will print null
}else{
    alert("invalid!!!");
}


console.log(typeof typeof 9);
//this will give string as output because single typeof give number as output and number is string