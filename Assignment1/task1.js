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
