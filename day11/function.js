////////////////////////////  Q.N.1    ///////////////////////////////////////////////////////////////
/*
1. 🟢 Area of Circle Calculator
Problem:
Create a function that prompts the user for the radius of a circle,
 validates the input as a finite positive number, then calculates and 
 returns the area of the circle rounded to 2 decimal places.

Formula:
[ \text{Area} = \pi \times r^2 ]

Hint:
Use Number(), isFinite(), Math.PI, Math.pow(), and toFixed().

Sample Input:
7

Sample Output:
Area of circle with radius 7 is 153.94
The area is calculated using π × 7², where π ≈ 3.1416, rounded to 2 decimals.

What to Use:
Number(), isFinite(), Math.PI, Math.pow(), toFixed()
*/

/*
function Area(radius){
    if(isFinite(radius)){
    let area = Math.PI * (Math.pow(radius,2));
    
    return area.toFixed(2);
    }
}
let radius=Number(prompt("Enter the radius of circle:"));
let res=Area(radius);
console.log("Area of circle with radius " + radius + " is " + res);


*/

///////////////////////////  Q.N.2    /////////////////////////////////////////////////////////////////
/*
2. 🔐 OTP Generator (6-digit, No Leading Zeros)
Problem:
Create a function that generates a 6-digit OTP as a number, ensuring no leading zeros.

Formula:
Generate a random integer ( n ) where ( 100000 and 999999 ).

Hint:
Use Math.random() scaled between 100000 and 999999, then Math.floor().

Sample Output:
Generated OTP is 567834
6-digit OTP without leading zeros for secure verification.

What to Use:
Math.random(), Math.floor()

*/

/*
function otpGenerator(){
    let num =Math.floor(Math.random()*1000000);
    console.log("Your Github Otp code : " + num );
}
otpGenerator();
*/

///////////////////////////////  Q.N.3     /////////////////////////////////////////////////////////////

/*
3. 🎲 Dice Roll Simulator
Problem:
Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

Hint:
Use Math.random(), scaled and rounded appropriately.

Sample Output:
Dice roll result: 4
Simulates fair dice roll generating number between 1 and 6.

What to Use:
Math.random(), Math.ceil()
*/

/*
function diceRoll(){
    let roll=Math.floor(Math.random()*6);
   
    if(roll == 0){
        diceRoll();
    }else{

        console.log(roll);
    }
    
}
diceRoll();

*/

///////////////////////////////  Q.N.4     /////////////////////////////////////////////////////////////
/*
4. ⛽ Fuel Consumption Calculator
Problem:
Calculate fuel consumption in km/l given distance traveled and fuel used.

Hint:
Validate inputs as finite numbers.

Sample Input:
Distance: 450, Fuel: 35.5

Sample Output:
Fuel consumption is 12.68 km/l
Vehicle runs 12.68 km per liter of fuel.

What to Use:
Number(), isFinite(), toFixed()
 */
/*
function fuelConsume(distance,fuel){
    if(isFinite(distance) && isFinite(fuel) && fuel != 0){
        let totalFuleConsume =distance/fuel;
        console.log("Fuel Consumption is " + totalFuleConsume.toFixed(2) + " km/l");
        console.log("Vehicle runs " + totalFuleConsume.toFixed(2) + " km per liter of fuel." );

    }else{
        alert("please enter valid numeric inputs and make sure fuel is not zero!.....!!!");
    }
}
let distance =Number(prompt("Enter total distance covered in km:"));
let fuel =parseFloat(prompt("Enter total fule consumed in liter:"));
fuelConsume(distance,fuel);
*/
///////////////////////////////  Q.N.5     /////////////////////////////////////////////////////////////
/*
5. 💰 Loan EMI Calculator
Problem:
Calculate monthly EMI based on principal, annual interest rate, and tenure (years).

Hint:
Use parseFloat(), Math.pow(), and Math.round().

Sample Input:
Principal: 500000, Rate: 8.5%, Tenure: 20 years

Sample Output:
Monthly EMI is 2056023.06
Monthly payment calculated from compound interest formula.

What to Use:
parseFloat(), Math.pow(), Math.round()
*/

/*
function EMI(principal,rate,time){
    let inner = (1+rate/100);
    let amt=Math.pow(inner,time);
    let CI=(principal*amt)-principal;
    console.log("Mothly EMI is "+ CI.toFixed(2));

}
let principal=parseFloat(prompt("Enter Principal:"));
let rate=parseFloat(prompt("Enter annual interest rate:"));
let time=parseFloat(prompt("Enter tenure(time):"));
EMI(principal,rate,time);


*/


///////////////////////////////  Q.N.6     /////////////////////////////////////////////////////////////
/*
6. 🌡️ Temperature Converter with Validation
Problem:
Convert Celsius temperature to Fahrenheit with input validation.

Hint:
Use Number(), isFinite(), toFixed() and return false on invalid input.

Sample Input:
37.5

Sample Output:
37.5°C equals 99.5°F
Valid Celsius converted accurately.

Invalid Input:
"abc"

Sample Output:
false

What to Use:
Number(), isFinite(), toFixed()


*/

/*
function celsiusToFahrenheit(Celsius){
    if(isNaN(Celsius)){
        console.log("False");
    }else{
        if((isFinite(Celsius))){
        let fah =1.8*Celsius+32;
        console.log(Celsius + " is equals " + fah.toFixed(2) );
        }
    }

}
let Celsius= Number(prompt("Enter valid degree celsius"));
celsiusToFahrenheit(Celsius);

*/


///////////////////////////////  Q.N.7     /////////////////////////////////////////////////////////////
/*
7. 🎫 Random Coupon Code Generator (6-digit)
Problem:
Generate a random 6-digit coupon code number without leading zeros.

Sample Output:
Coupon code generated: 345678

What to Use:
Math.random(), Math.floor()

*/
/*
function otpGenerator(){
    let num=Math.floor(Math.random()*1000000);
    console.log("Your  Coupon Code : " + num);
}
otpGenerator();
*/

///////////////////////////////  Q.N.8     /////////////////////////////////////////////////////////////
/*
8. 💡 Electricity Bill Calculator
Problem:
Calculate bill based on slab rates:

Units Consumed	Rate per Unit
0 - 100	-->5
101 - 200	-->7
 > 200	-->10
Sample Input:
150

Sample Output:
Electricity bill for 150 units is 850
Charges: (100×5) + (50×7) = 500 + 350 = 850

What to Use:
parseInt(), isNaN(), Math.round()

*/
/*
function billCalculator(units){
    if(isNaN(units)){
            alert("Please enter valid numeric units");
    }else{
            if(units>0 && units <= 100){
               let  bill= units*5;
                console.log("Electricity bill for " + units + "units is " + bill);
            }else if(units <=200 ){
                let bill = 100*5 + (units-100)*7;
                console.log("Electricity bill for " + units + "units is " + bill);
            }else{
                let bill = 100*5 + 100*7 +(units-200)*10;
                console.log("Electricity bill for " + units + "units is " + bill);
            }
            
    }
}
let units=parseInt(prompt("Enter your  consumed units of Electricity:"));
billCalculator(units);

*/
///////////////////////////////  Q.N.9     /////////////////////////////////////////////////////////////
/*
9. 🎲 Dice Game with Re-roll
Problem:
Roll a dice once; if 1, roll again and return second result; else return first.

Sample Output:
First roll: 4
or
First roll: 1, re-roll: 5

What to Use:
Math.random(), Math.ceil()
*/

/*
function diceRoll(){
    let roll=Math.floor(Math.random()*6)+1;//it gives result from 1 to 6 but retry if roll=1

    if(roll==1 ){
        return diceRoll();// Retry if roll is 1

    }else{
        console.log(roll);
        return roll;
    }
}
diceRoll();
*/

///////////////////////////////  Q.N.10     /////////////////////////////////////////////////////////////
/*
10. 🏅 Grade Calculator
Problem:
Return grade (A-F) based on score 0-100; false for invalid.

Grade Mapping:

80–100: A
60–79: B
40–59: C
20–39: D
0–19: F
Sample Input:
85

Sample Output:
Score 85 corresponds to grade A

Invalid Input:
120

Sample Output:
false

What to Use:
isFinite(), Boolean primitive


*/
/*
function gradeComparison(marks){
    if(isFinite(marks)){
        if(marks>100){
            console.log("Invalid Input....!!");
        }
        else if(marks>=80 && marks <=100){
            console.log("Score " + marks + " corresponds to grade A.");
        }else if(marks>=60){
            console.log("Score " + marks + " corresponds to grade B.");
        }else if(marks>=40){
            console.log("Score " + marks + " corresponds to grade C.");
        }else if(marks>=20){
            console.log("Score " + marks + " corresponds to grade D.");
        }else if(marks>0)
           console.log("Score " + marks + " corresponds to grade F."); 
    }

}
let marks=Number(prompt("Enter your marks for grade comparison:"));
gradeComparison(marks);
*/

///////////////////////////////  Q.N.11     /////////////////////////////////////////////////////////////
/*
11. 📈 Bank Interest Calculator
Problem:
Calculate compound interest final amount.

Sample Input:
P=10000, r=5, n=3

Sample Output:
Final amount after 3 years at 5% is 11576.25

What to Use:
parseFloat(), Math.pow(), toFixed()
*/
/*
function calculateCompoundInterest(P, r, n) {

    //using  Compound interest formula
    let A = P * Math.pow((1 + r / 100), n);

    // Formatting  to 2 decimal places using exp.toFixed(parameter);
    A = A.toFixed(2);

    console.log(`Final amount after ${n} years at ${r}% is ${A}`);
    return A;
}
let P=parseFloat(prompt("Enter Principal:"));
let r=parseFloat(prompt("Enter interest rate:"));
let n=parseFloat(prompt("Enter tenure(time):"));
calculateCompoundInterest(P,r,n);  
*/

///////////////////////////////  Q.N.12     /////////////////////////////////////////////////////////////


/*
12. ⚖️ BMI Calculator with Validation
Problem:
Calculate BMI from weight (kg) and height (m).

Sample Input:
Weight = 70, Height = 1.75

Sample Output:
BMI calculated as 22.9

Invalid Input:
weight = "abc"

Sample Output:
false

What to Use:
Number(), isFinite(), toFixed()
*/

/*
function bmiCalculation(height,weight){

    //ensuring the value of height and weight is finite
    if(isFinite(height) && isFinite(weight)){
        //using BMI formula to calculate
        let BMI=weight/Math.pow(height,2);
        //sample output
        console.log("BMI calculated as " + BMI.toFixed(1)); 
    } else{
        alert("False input");
    }  
}
//taking input from user
let weight=Number(prompt("Enter your wight:"));
let height=Number(prompt("Enter your height:"));
bmiCalculation(height,weight);//function calling 
*/

///////////////////////////////  Q.N.13     /////////////////////////////////////////////////////////////
/*
13. 💳 Maximum Transaction Finder
Problem:
Input 3 transaction amounts, find max ignoring invalid.

Sample Input:
1000, "abc", 1200.50

Sample Output:
Maximum valid transaction amount is 1200.5

What to Use:
Math.max(), isNaN()
*/

///////////////////////////////  Q.N.14     /////////////////////////////////////////////////////////////
/*
Problem:
Return square root if input non-negative, else false.

Sample Input:
16

Sample Output:
Square root of 16 is 4

Invalid Input:
-9

Sample Output:
false

What to Use:
Math.sqrt(), Boolean primitive
*/

/*
function squareRootChecker(num){
    if(isNaN(num) || num < 0)  return false;
    const number=Math.sqrt(num);//check square root 
    return number;

}
const num=Number(prompt("Enter valid number to check squareRoot:"));
console.log("The square root of " + num +" number is " + squareRootChecker(num));
*/
///////////////////////////////  Q.N.15     /////////////////////////////////////////////////////////////
/*
15. ↔️ Absolute Temperature Difference
Problem:
Return absolute difference of two temps.

Sample Input:
25.4, 30.9

Sample Output:
Temperature difference is 5.5

What to Use:
Math.abs(), toFixed()
*/

/*
function absoluteTemp(temp1,temp2){
    if(!isFinite(temp1) || !isFinite(temp2))  return false

    const diff =Math.abs(temp1-temp2);
    return diff.toFixed(1);
}
let temp1=parseFloat(prompt("Enter first temperature"));
let temp2=parseFloat(prompt("Enter second temperature"));
console.log("The absolute temperatue difference is : " + absoluteTemp(temp1,temp2) )

*/
///////////////////////////////  Q.N.16     /////////////////////////////////////////////////////////////
/*
16. 🔢 Random Password Length Generator
Problem:
Generate random integer between 8 and 16 inclusive.

Sample Output:
Generated password length is 12

What to Use:
Math.random(), Math.floor()
*/
/*
function passwordLengthGenerator(){
    //const length=Math.floor(8+Math.random()*9);
    const length=Math.floor(8+Math.random()*10)-1;
    return "Generated password length is " + length;
}
console.log(passwordLengthGenerator());
*/
///////////////////////////////  Q.N.17     /////////////////////////////////////////////////////////////
/*
17. 👶 Age Validator
Problem:
Validate age between 0 and 120 inclusive.

Sample Input:
25

Sample Output:
true

Invalid Input:
150

Sample Output:
false

What to Use:
isFinite(), Boolean primitive
*/
/*
function ageValidation(age){
    let validAge=isFinite(age);
    if(validAge>0 && validAge <=120 && !isNaN(validAge))
       return validAge;
    else 
        return false;
}
let age=Number(prompt("Enter age for validation:"));
console.log(ageValidation(age));
*/

///////////////////////////////  Q.N.18     /////////////////////////////////////////////////////////////

/*
18. 💱 Currency Converter
Problem:
Convert USD to EUR at fixed rate (e.g., 0.915).

Sample Input:
100

Sample Output:
100 USD equals 91.50 EUR

What to Use:
Number(), toFixed()
*/

/*
function usdToEur(curr){
    let rate=0.915;
    let euro=curr*rate;
    return euro.toFixed(2);
}
let curr=Number(prompt("Enter US currency to convert into euro:"));
console.log(curr+ " USD equals " + usdToEur(curr));

*/
///////////////////////////////  Q.N.19     /////////////////////////////////////////////////////////////

/*
19. 🎨 Random Hex Color Generator
Problem:
Generate random 6-digit hex color code string with #.

Sample Output:
Generated color code: #3a5fcd

What to Use:
Math.random(), toString(16)
*/

/*
function hexColor(){
    let  color=Math.ceil(Math.random()*16777125).toString(16).padStart(6,'0');
    /*.padStart(6,'0):->yasle 6 ota vanda kam vayo vane 6 samma banunxa and if
       badhi vayo vane kam garayera 6 matra banaunxa 
       and 0 rakhnu ko karad  if hamle generate garda FF matra ayo vane teslai
       6 digit banune gari 0 thapdinxa eg. #0000FF
       
    *.
    return "Generated Color code : #"+color;
}
console.log(hexColor());


///////////////////////////////  Q.N.20     /////////////////////////////////////////////////////////////
/*
20. 💼 Loan Eligibility Checker
Problem:
Check if income > 3×expenses.

Sample Input:
Income = 9000, Expenses = 2500

Sample Output:
Loan eligibility: true

What to Use:
Number(), Boolean primitive


*/

function loanChecker(income,expenses){
    let incomeNum=Number(income);
    let expensesNum=Number(expenses);
    if(!isFinite(incomeNum)|| !isFinite(expensesNum) || incomeNum <0 || expensesNum <0)
        return false;
    else
        return incomeNum > (3*expensesNum);
}
console.log(loanChecker(9000,2500));

















///////////////////////////////////////////////////////////////////////////////////////////