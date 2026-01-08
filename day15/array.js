
// array methods

/*
push()->adds one or more elements to the end of an array
pop()->removes elements from last of an array and return pop element as output
shift()->//it adds as a first element of an array
unshift()->it removes  from given element of array
splice(index,no of elements)-> it removes from between  of array and it has two parameter

*/
/*
let arr1=[1,2,"abc"];

arr1.push(true);// it adds given element at the end of an array
console.log(arr1);
let removed=arr1.pop();//it shows removed element
console.log(removed);
console.log(arr1);
arr1.unshift(20);//it adds 20 as a first element of an array
console.log(arr1);
arr1.shift();//it removes 20 from given element of array
console.log(arr1);
arr1.splice(1,2);
console.log(arr1);
*/

/*
//Searching

indexOf();
lastIndexOf();
includes();
find(); it requires condition to find num generally arrow function is 
used in this method and it must condition true and return first matching element
findIndex();
 */
/*

let numArr=[1,9,3,4,2,6,5,33,12,21,57,8,8,8,98];
console.log(numArr.indexOf(4));//it returns index of element of array of first occurence
console.log(numArr.lastIndexOf(12));//it returns lastIndex of element of array of first occurence
console.log(numArr.includes(100,4));//it always check first parameter and neglect remains
console.log(numArr.find((num)=> num > 20));// it return first matching element when conditoin is true
console.log((numArr.findIndex((num)=> num > 20)));//7
*/

/*
WAP to implement find and findIndex matching condition number=9
*/

let numArr=[2,4,56,7,8,9,3,4,65,7,8,9,9,9,9];
let  search =numArr.find((num)=> num == 9);
console.log(search);//return 9

let condition=function(num){
    return num==9;
}
console.log(numArr.find(condition));//return 9
console.log(numArr.findIndex(condition));//return 5

let findSearch=numArr.findIndex((num)=> num == 9);//return 5
console.log(findSearch);
 numArr.splice(2,0,"IronMan","SuperMan");//it insert from index 2 and delete 0 element
console.log(numArr);


/*********************   Class Task    *************************************************/
/*
arr=[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10]
1.)find the first even number and its index in an array.
2.)find first multiple of three and its index.
["apple","banana","cauliflower","education","fish"];
3.)find the first long word in the given array.
4.)find the first word starting with consonant.
*/
/*********************   problem-1    *************************************************/

//1.)find the first even number and its index in an array.
/*
let arr=[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10];
let condition=function(num){
    return (num % 2== 0);
}
console.log(arr.find(condition));
console.log(arr.findIndex(condition));
*/
/*********************   problem-2    *************************************************/
//2.)find first multiple of three and its index.
/*
let arr=[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10];
let condition=function(num){
    return (num % 3== 0);
}
console.log(arr.find(condition));
console.log(arr.findIndex(condition));
*/
/*********************   problem-3    *************************************************/
/*
["apple","banana","cauliflower","education","fish"];
3.)find the first long word in the given array.
*/
/*
function longWord(wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > 8) {
            return wordArray[i]; // Return the long word itself
        }
    }
    return "No long word found";
}

let words = ["apple", "banana", "cauliflower", "education", "fish"];
console.log(longWord(words));
*/
/*********************   problem-3    *************************************************/
/*
function consonantWord(wordArr) {
    for (let i = 0; i < wordArr.length; i++) {
        let firstChar = wordArr[i][0].toLowerCase();
        if (
            firstChar !== 'a' &&
            firstChar !== 'e' &&
            firstChar !== 'i' &&
            firstChar !== 'o' &&
            firstChar !== 'u'
        ) {
            return wordArr[i]; // First word starting with a consonant
        }
    }
    return "Not found";
}

let words = ["apple", "banana", "cauliflower", "education", "fish"];
console.log(consonantWord(words));
*/






