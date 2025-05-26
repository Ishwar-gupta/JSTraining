/*
Problem:

Ask the user to input a value and determine whether the value is truthy or falsy in JS

Display the result using alert.

Hint:

Use if(input) to check truthiness.Remember falsy values include: 0,"",null,undefined,NaN and
false.

Expected input:

"0"

Expected Output:

the value is falsy(via alert);
 */



let input = prompt("Enter the value : ");
let number = Number(input)
if(input == 0 || input == null || input == "" || isNaN(number)  || input == false)
{
    alert("falsy value ! ");
}else
{
    alert("truthy value ! ");
}