// ///////////////////////////////////Assignment - 1////////////////////////////////////////// 
/*
function digitSum(num)
{
  let sum = 0 , rem  ;
 while(num != 0)
 {
     rem = num % 10 ;
  sum = sum + rem ;
  num = Math.floor(num / 10) ;
 }
 return sum ;

}

let num = parseInt(prompt("Enter the number : "));
let helper ;
if(num > 0)
{
    helper = digitSum(num);
}
console.log("The sum of the digits is "+(helper));
*/

//-------------------------------------------------------------------------------------------

// ///////////////////////////////////Assignment - 2////////////////////////////////////////// 
/*
function evenCount(firstnum , lastnum)
{
    let count = 0 ;
for(let i = firstnum ; i <= lastnum ; i++)
{
    if(i % 2 == 0)
    {
        count++ ;
    }
}
return count ;
}

let firstnum = parseInt(prompt("enter the first number : "));
let lastnum = parseInt(prompt("enter the last number : "));
let res = evenCount(firstnum , lastnum);
console.log("The total count of even number between given two numbers is "+(res));

*/

//-------------------------------------------------------------------------------------------


// ///////////////////////////////////Assignment - 3////////////////////////////////////////// 

/*
function perfectSquare(num)
{
   for(let i = 0 ; i * i <= num ; i++)
   {
    if(i * i == num)
    {
        return 1 ;
    }
   }
}


let num = parseInt(prompt("Enter the number : "));
if(perfectSquare(num))
{
    console.log("given number is perfect square .");
}else{
    console.log("given number is not perfect square .");
}
*/

//-------------------------------------------------------------------------------------------


// ///////////////////////////////////Assignment - 4////////////////////////////////////////// 

/*
function owner(basic_salary , OT)
{
    return ((OT * 50) + basic_salary );
}

let basic_salary = parseInt(prompt("Enter the basic salary : "));
let OT = parseInt(prompt("Enter the extra hour you have worked for over time : "));
let total_salary = owner(basic_salary , OT);
console.log("Your total salary is "+(total_salary));
*/

//-------------------------------------------------------------------------------------------
// ///////////////////////////////////Assignment - 5////////////////////////////////////////// 

// Predict and explain the output of the following code:
/*
let a = 10;
function test() {
    let a = 5;
    if (true) {
        let a = 20;
        console.log("the value of a : " + a);  // output = 20 
    }
    console.log("the value of A : " + a);     // output = 5
}
test();
console.log("the value is : " + a);         // output = 10
*/
/*
Reason :  output = 20 since function is called and inside function there is a = 5 and
          we know if runs for (true) so consoles 20 and after exiting loop the value of a will be 5 
         since outside the loop is a = 5 and at last there it had already assigned a = 10 so after 
         completing the test() function calling it will print that value of a that had been already
          assigned before calling function test();
*/


