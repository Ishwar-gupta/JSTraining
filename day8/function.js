/*
write a function named greet that takes username as parameter
 and logs "Hello,[name]"to the console
 */
// function greet(username){
//     console.log("Hello " + username);
// }
// greet("Raju");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
create a function named square that makes a number as parameter
and returns the square of that number.
*/

/*
function square(number){
    return number*number;
}
console.log("the square of number is : " + square(5));
*/

////////////////////////////////////////////////////////////////////////////////////
/*
write a function printNumbers that
 prints number upon calling from 1 to 10 using a for loop.
*/
/*
function printNumber(){
    for(let i =1 ; i <= 10 ; i++){
        console.log(i);
    }
}
printNumber();
*/

//////////////////////////////////////////////////////////////////////////////////
/*
create a function multiplyOrDefault that takes two parameters , a and b.
If b isnot provided, it should default to 1.
 the function should return the product of a and b.
*/
/*
function multiplyOrDefault(a ,b=1){
    return a*b;

}
let result=multiplyOrDefault(8);// it return value 8 because a is provided and b is provided by default as 1
console.log("product = " + result);
*/

/////////////////////////////////////////////////////////////////////////////////
/*
write a function maxOfThree that takes three numbers as parameters and 
returns the maximum of the three numbers.
*/

/*
function maxOfThree(a , b ,c){
    if(a>b){
        if(a>c){
            return a;
        }else{
            return c;
        }
    }else{
        if(b>c){
            return b;
        }else{
            return c;
        }
    }
}
let max = maxOfThree(10,5,15);
console.log("the max of three is : " + max);
*/
///////////////////////////////////////////////////////////////////////////////////////////
/*
write a function named printMulTable that takes a number as a parameter
and prints the multiplication table for that number  from 1 to  10.
Use prompt  to get that number from the user and pass it to function.
 */

/*
function printMulTable( num){
    for(let i=1;i<=10;i++){
        console.log(num + " * " + i + " = " + num*i);
    }
}

let num=parseInt(prompt("Enter any number:"));
printMulTable(num);

*/

///////////////////////////////////////////////////////////////////////////////////
/*
write a function named reverseNumber that takes a number as parameter and 
return  the reverse of that particular number.
*/

/*

function reverseNumber(num){
    let rev=0;
    while(num != 0){
        let rem =num%10;
         rev =rev*10 +rem;
         num=Math.floor(num/10);

    }
    return rev;
}
let num=parseInt(prompt("Enter any digit number:"));
let reverse=reverseNumber(num);
console.log("the reverse of the given num is : " + reverse);

*/
////////////////////////////////////////////////////////////////////////////////////
/*
Q.N.1 ) write a function named countDigits that takes a number as parameter and returns
the counts of digits in that number.For testing take number from user using prompt
and pass it to function.

//if num<9 return 1;
*/

/*
 function countDigits(num){
    let count = 0 ;
    while(num != 0){
        let rem = num % 10;
        count++;
        num = Math.floor(num/10);
    }

    if(count < 9)
    {
        return 1 ;
    }
    else{
    return count;
    }

  }

let num=Number(prompt("Enter any digit number:"));
let result=countDigits(num);
console.log("The count of the digit is : " + result);
*/
//////////////////////////////////////////////////////////////////////////////////
/*

Q.N.2 ) write four functions that takes two number and perform addition,
subtraction ,multiplication and division respectively. and write fifth function
that takes  two numbers and a function as a parameter and returns the result of
the operation performed by the function on the two numbers.
*/

function add(a , b){
    return a+b;
}

function sub(a , b){
    return a-b;
}

function mul(a , b){
    return a*b;
}

function div(a , b){
    return a/b;
}
<<<<<<< HEAD
function higherFunction( a , b , helper){
    return helper(a,b);
}
let helper = prompt("Enter your function name:");

 let res = higherFunction(10,5,helper);
=======
function higherFunction( a , b , sub){
    return sub(a,b);
}
let helper = prompt("Enter your function name:");

 let res = higherFunction(10,5,sub);
>>>>>>> Sid
 console.log(res);
