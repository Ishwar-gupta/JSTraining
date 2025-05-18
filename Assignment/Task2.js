/*
Task2:
Ask the user to enter a number.Use while loop to print all multiples of 3 rom 1 to that number
(inclusive).Stop the loop early if a multiple of 5 is encountered.

Hint:

use a while loop and check for i%3==0.If i%5==0,use break to exit.

Expected input:
"10"

Expected output:
3

 */
let num=Number(prompt("Enter a number:"));
let i=1;
while( i <= num){
        if(i % 5 == 0) {
            break;
        }
        if( i%3 == 0){
           console.log( i );
        }
        
    i++;
}




















