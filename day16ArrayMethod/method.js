/*************************   forEach()   ******************************************************* */
//forEach()
//Implementation of forEach() method:
/*
const  fruits=["appple","banana","cherry"];
fruits.forEach((fruit,index)=>{
    console.log(`${index+1}.${fruit}`);
});
*/
/*************************   map()   ****************************************************** */

//map()->
/*
creates a new array with the results of calling a provided function on every 
element in the calling array
//syntax:
array.map(function(currentValue,index,arr)=>{
    //code to be executed
    })
*/
//Implementation of map:First Method
// let prices=[100,200,300,400,500];
// const doubledPrices=prices.map((price => price*2));
// console.log(doubledPrices);//[200,400,600,800,1000]

/* Another method:
 function double(price){
    return price*2;
 }
 let prices=[100,200,300,400,500];
const doubledPrices=prices.map(double);
console.log(doubledPrices);//[200,400,600,800,1000]
*/

/*************************   filter()   ****************************************************** */
/*
//filter():
creates a new array with all elements that pass the test condition implemented by 
the provided function
//syntax:
array.filter(function(currentValue,index,arr)=>{
    //code to be executed
})
*/

/*
//implemtation of filter() method:
const ages=[12,17,22,25];
const adults=ages.filter(age => age>= 18);
console.log(adults);//[22.25]
console.log(adults[0]);//22
*/
/*
let items = ["apple", "banana", "cherry", "date"];

let everySecondItem = items.filter((value, index) => index % 2 === 0);
console.log(everySecondItem); // ["apple", "cherry"]
*/

/*************************   reduce()   ****************************************************** */
//reduce():
/*
executes a reducer function on each element of the array,
resulting in a single output value
-> it applies from (left-to-right)
//syntax:
array.reduce(function(accumulator,currentValue,index,arr)){
//code to be executed
}
*/
//reduce:
/*
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((add,val)=> add + val ,0);//1+2+3+4+5
console.log(sum);//15
*/


/*************************   reduceRight()   ****************************************************** */
/*
applies a function against an accumulator and each element in the array(from-right-to-left)
to reduce it to a single value
//syntax:
array.reduceRight(function(accumulator,currentValue,index,arr)){
//code to be executed
}
*/
/*************************   every()   ****************************************************** */
/*
test whether all elements in  the array pass the test(condition) implemented by
the provided function
//it gives true output when all elements are truly satisfied the condition
//syntax:
array.every(function(currentValue,index,arr)=>{
    //code to be executed
    })
*/
//every
const scores=[80,85,90];
const allPassed=scores.every(score => score >=50);
console.log(allPassed);
if(allPassed){
    console.log("All students are passed");    
}else{
    console.log("Not all students are passed.");    
}


/*************************   some()   ****************************************************** */
/*
tests whether at least one element in the array passes the
test implemented by the provided function
//syntax:
*/
const taskStatus=[true,false];//true=done,false=pending
const anyPending=taskStatus.some(Status=> Status===false);
console.log(anyPending);


