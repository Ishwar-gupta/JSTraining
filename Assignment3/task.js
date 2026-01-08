
///////////////////////task1 to find prime or composite number:////////////////////////////////////////
/*
let num = parseInt(prompt("Enter number:"));

if (isNaN(num)) {
    alert("It is not a number.");
} else {
    if (num === 1) {
        alert(`${num} is neither prime nor composite.`);
    } else if (num < 1) {
        alert(`${num} is not a prime.`);
    } else {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            alert(`${num} is a prime number.`);
        } else {
            alert(`${num} is not a prime number.`);
        }
    }
}
*/

/////////////////task2:generate fibonacci series/////////////////////////////////////////////////////////////////////////////
/*
let num =parseInt(prompt("Enter number upto fibonacci required:"));
let a=0;
console.log(a);
let b=1;
//console.log(a+b);
if(isNaN(num)){
    console.log("this is not a number:");
}
if(num>1){
    let c;
    for(let i=1;i<=num;i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
}*/

/////////////generate armstrong number////////////////////////////////////////////////////////////////////////////////////////
/*
let num=parseInt(prompt("Enter number to check armstrong or not:"));
let rem;
let sum=0;
let z;
z=num;
while(num !=0){
    rem=num%10;
    sum=sum+(rem*rem*rem);
    num=parseInt(num/10);
    
}
if(z===sum){
    alert(`${sum} is Armstrong:`);
}else{
    alert(`${sum} isnot Armstrong:`);
}
    */

//////////leap year checker////////////////////////////////////////////////////
/*
problem:
ask user to enter a year.check if the year is leap or not:
-->divisible by 4 but not by 100 OR divisible by 400----> leap year
show result in alert
 */
/*
let year=parseInt(prompt("Enter years in digits:"));
//if((year % 4 ==0 && year % 100 !==0) || year % 400 ==0){
 if(year % 4 == 0){
    alert(`${year} is leap year`);
}else{
    alert(`${year} isnot leap year:`);
}*/

// Electricity Bill Calculator
/*
prompt the user to enter the number of electricity units consumed.
calculate the total electricity bill acc. to  these slabs.
-first 50 units:Rs.5/unit
-Next 100 units(51-150):Rs.7/unit
-Next 150 units(151-300):Rs.10/unit
-Above 300 units:Rs.15/unit
-display the total bill using console.log or alert.
validate the input to ensure it is non-negative number.

expected input =270
expected output =2150.
*/
/*
let units=parseInt(prompt("Enter your wasted units on meter:"));
//var unit1,unit2,unit3,unit4;
let totalBill
if(units < 0){
    console.log("Wrong input");
}else{
    if( units <= 50){
        totalBill=units*5;
        console.log(`Rs.${totalBill} is your bill amount. `);
    }
     if( units >50 && units <= 150){
         totalBill=(units-100)*7 +50*5;
        console.log(`Rs. ${totalBill} is your bill amount. `);
    }
     if(units > 150 && units <=300){
         totalBill=(units-150)*10+ 50*5 + 100*7;
        console.log(`Rs. ${totalBill} is your bill amount.`);
    }
    if(units > 300){
         totalBill= (units-300)*15+ (150)*10+ 50*5 + 100*7;
        console.log(`Rs.${totalBill} is your bill amount..`);
    }

}
*/
//Number properties checker////////////////////////////////////////////////////////////////////////////////////

/*
-prompt the user to enter a number.
-determine and console.log whether the number is positive or negative;
--determine and console.log whether the number is odd or even;
-count the number of digits manually (without built-in functions) and console.log:
-"single digit number" if digits =1
-"double digit number " if digits =2;
-"number with more than two digits  " if digits >2
-validate the input to ensure it is a valid number.
 */
let num=parseInt(prompt("Enter number:"));
if(num > 0){
    console.log(`${num} is postive number.`);
}else {
    console.log(` ${num} is negative number.`);
}

 if(num % 2 == 0){
    console.log(`${num} is even number.`);
}else {
    console.log(`${num} is odd number.`);
}
let count=0;
let rem;
while (num !=0){
    rem = rem % 10 ;
    count++;
    num =parseInt(num/10);
}
if(count == 1){
    console.log(` ${count} is single digit number.`);
}else if (
    count ==2){
    console.log(` ${count} is double digit number.`);
}else{
    console.log(`${count} is more than 2 digit number.`);
}






