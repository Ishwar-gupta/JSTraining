/*
set a secret number(eg.7) .Ask the user to guess it using prompt until they get it right.After a
correct guess,alert"correct".

Hint:
use a do-while loop to keep prompting until the guess equals the secret number.Convert input to a
number for comparison.

Expected Input:
"5","10","7"
Expected Output:
correct!!(via alert)
 */
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