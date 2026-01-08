
///////////////////to find factorial of given number/////////////////////////////////////////////////////////////
/*
let num =parseInt(prompt("Enter a number:"));
let fact =1;
if (isNaN(num)){
    alert("given input is not a number");
}else{
    if(num>0){
        
        for(let i=1;i<=num;i++){
         fact =fact * i;
       }
    }
    alert("the factorial of " + num + " is " + fact);
}
    */

//////////to sum first n odd numbers/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let num=Number(prompt("Enter number:"));
let sum = 0;
let odd = 1;
for(let i = 1 ; i <= num ;i++){
    sum = sum + odd;
    odd = odd + 2;
}
    
alert("The sum of first " + num + " odd number is : " + sum);
*/
//////////sum of even Nmbers/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let num = Number(prompt("Enter any number:"));
let even =2;
let sum=0;
for(let i = 1 ; i <= num ; i++){
    sum = sum + even;
    even =even+2;
}
alert("Sum of first" + num + "number is" + sum);
*/
/////////// Perfect square sum////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let num = Number(prompt("Enter a  number:"));
let sum=0;
for (let i = 1 ; i <= num ; i++){
    sum = sum + i*i;
}
alert("the sum of perfect square number is :" + sum);
*/