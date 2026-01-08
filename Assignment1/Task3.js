/*
Problem:
Ask the user  to enter a number.Use a while loop to print all even numbers from 0 to that number
(inclusive) in the console.Skip all odd numbers using continue.

Hint:
Convert the input to a number.Loop  from 0 to that number,use % to check for eveness , and skip
odd numbers with continue.

Expected Input:
"6"

Expected Output:
0
2
4
6
 */

let num=Number(prompt("Enter a number:"));
for( let i=0;i<=num;i++){
    if(i % 2 !== 0){
         continue;
    }else{
        console.log(i);
    }
}