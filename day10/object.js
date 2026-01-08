/*

function addNum(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum +=numbers[i];
    }
    return sum;
}
console.log(addNum(1,2,3,4,5,6,7,8,9,10));//55

*/
//////////////////////////////////////////////////////////////////////////////////////////

/*
//primitive boolean
let a = true;
console.log(a);//true

//boolean object
let bool =new Boolean();//bool is object and Boolean is class  by  default it gives false
let trueBool=new Boolean(true);
console.log(typeof bool);//object

//tostring() is built-in function
console.log(a.toString())// true i.e string

//valueOf()
console.log(bool.valueOf());// It gives value of object
console.log(trueBool.valueOf());

//Number Object
let num1=123;
let num2=Number("123");

*/

/////////////////////////////////////////////////////////////////////////////////////////
//properties and methods.
/*
MAX_VALUE
MIN_VALUE
POSITIVE_INFINITY
NEGATIVE_INFINITY
NaN
EPSILON

All the above are properties i.e properties has no parenthesis but method has parenthesis
e.g.-> console.log(trueBool.valueOf());

*/

/*
console.log(Number.MAX_VALUE);//1.797693134....e+308
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.POSITIVE_INFINITY);//infinity
console.log(Number.NEGATIVE_INFINITY);//infinity
console.log(Number.NaN);//NaN
console.log(Number.EPSILON);//2.220446049.....3e-16
*/

////////////////////////////////////////////////////////////////////////////////////////////

//Methods
/*
isNaN();//check number or not
isFinite();//checks if value is finite
isInteger();//checks it value is integer(no decimal point)
parseInt();//converts data into Integer
parseFloat();//converts data into Floats.
*/
/*
console.log(isNaN("SID"));//True
console.log(isFinite(Infinity));//False
console.log(parseInt("42px"));// it takes front  integer only 
console.log(parseInt("ab234"));//NaN because starting is string that's why it give NaN
console.log(parseFloat(5/2));//2.5

*/

////////////////////////////////////////////////////////////////////////////////////////////

//Math Objects
/*
abs();//it
random();//random number generate
trunc();//only give  integer number i.e non-decimal
sign();//
*/
/*
console.log(Math.PI);//3.1415.......
console.log(Math.E);
console.log(Math.ceil(-5.6));//-5
console.log(Math.ceil(5));//5
console.log(Math.ceil(9.6));//10
console.log(Math.floor(3.5));//3
console.log(Math.floor(-5.4));//-6
console.log(Math.floor(-5));//-5
console.log(Math.max(3,4,5));//5
console.log(Math.min(3,4,5));//3
console.log(Math.trunc(5.3445678));// it gives only integer and ignores decimal point

console.log(Math.abs(-2.5));
console.log(Math.sqrt(81));//9
console.log(Math.pow(2,3));
console.log(Math.sign())
console.log(Math.random()*10);
let number =123.4567789;
console.log(number.toFixed(2));// it will fixed the decimal value to the specified digit and round off also
*/


////////////////////////////////////////////////////////////////////////////////////////////
/*
write a program to calculate the area of circle taking radius from user and fix the result
to 2 decimal places using Math and number
object's method and properties
*/
/*
let radius=Number(prompt("Enter the value of radius:"));
let area = Math.PI*radius*radius;
console.log("The area of circle is : " +area.toFixed(2));
*/

////////////////////////////////////////////////////////////////////////////////////////////
/*
create a function otpGenerator() that generate six digit otp using Math and number object's
method and properties
*/
/*
function otpGenerator(){
    let num = Math.floor(Math.random()*1000000);
    console.log("Your OTP number is : ",num);
}
otpGenerator();
*/
////////////////////////////////////////////////////////////////////////////////////////////

/*
create a 6 sided dice roll that returns a random number from 1 to 6
*/
