//string object in js
//object has methods and properties
//method is built-in functin and it has braces() whereas properties has no braces

// property

// let userName=" Siddhu Gupta"  ;
// console.log(userName.length);//6
// console.log(userName[4]);//h
// let reversedString=userName.split("").reverse().join("");
// console.log(reversedString);

//Methods
/*
//character access methods

charAt(index)-->returns the character at the given index of string

charCodeAt(index)-->//it gives ASCII value from a to z( 97 - 122)
codePointAt(index)-->//assignment

// */

// console.log(userName.charAt(0));//S
// console.log(userName.charAt(1));//i
// console.log(userName.charCodeAt(0));//83

/*
💡 When to use:
Use charCodeAt() for basic Latin/ASCII characters.

Use codePointAt() when dealing with Unicode-heavy strings, especially if there's a chance of emojis or non-English scripts.
*/
let userName=" Siddhu Gupta ";
console.log(userName.charAt(5));//h
console.log(userName.charCodeAt(4));//100
console.log(userName.codePointAt(4));


//Case conversion methods
/*
toLowerCase();
toUpperCase();
// */
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());


//Splitting and Trimming methods
/*
split(separator)--> separate character based on separator provided
trim()--> removes white space from both ends
trimStart()-->
trimEnd()-->
*/

// console.log(userName.split(""));//it separate each letter
// console.log(userName.split(" "));//it aslo takes white space as array

// console.log(userName.trimStart());//it only remove white space from starting
// console.log(userName.trimEnd());//it only remove white space from end

// console.log(userName.trim());//it removes  first and last whitespace

// let nameValue="D,i,n,e,s,h";
// console.log(nameValue.split(""));
// console.log(nameValue.split(","));
// let  splittedString =nameValue.split(",");
// console.log(splittedString[0]);//D
// console.log(typeof splittedString);//object

//String Manipulation methods
/**
 concat(string) concatinates string with another.
 slice(start,end)
 subString(start,end)
 subStr(start,length)--> no more in use
 repeat(count)
 padStart(targetLength,padString)
 padEnd(targetLength,padString)
 */

//  let str1="Nepathya ";
//  let str2=" College";
//  console.log(str1.concat(str2));//it concates both string
//  console.log(str1.slice(2,5));//it takes from index 2 to 4 only i.e pat
//  console.log(str1.substring(2,5));//it is same as slice()
//  console.log(str1.substring(2,6));//path
// console.log(str1.substr(2,5));//no more use
// console.log(str1.repeat(5));//it repeats to that time as we pass as parameter


//Search and Match
/*
indexOf(subString);
lastIndexOf(subString);
includes(subString);
startsWith(subString);
endsWith(subString);
replace(searchValue,replaceValue);
replaceAll(searchValue,replaceValue);

// */
// let district="Palpa";
// console.log(district.indexOf("p"));//3 //it takes only first occurence in array
// console.log(district.indexOf("a"));//1 //it takes only first occurence in array
// console.log(district.lastIndexOf("a"));//4 //it takes only last index occurence in an array
// console.log(district.includes("P"));//true//it check the value whether it is present or not in array
// console.log(district.startsWith("l"));//false//it check whether it is start with given letter or not
// console.log(district.startsWith("P"));//true
// console.log(district.endsWith("a"));//true
// console.log(district.endsWith("p"));//false becoz it doesn't end with p
// console.log(district.replace("P","R"));//it replace the desired letter  ACQ it is Ralpa
// console.log(district.replaceAll("P","M"));


/*******************Problem-1******************************************************* */
/*
1.)WAP to replace all the white spaces with the hypens.
let message="Hello Everyone! I am from Tansen Palpa"
// */
// let message="Hello Everyone! I am from Tansen Palpa";
// let white=message.replaceAll(" ","-")
// console.log(white);




/*******************Problem-2******************************************************* */

/*

2.) WAP to ask the country name from user and check whether it starts with "A/a" and 
    ends with "a/A"
    let country=" Argentina ";

3.) WAP to check the occurence of character in an string
    let string="Anaconda" check the occurence of "A/a"

*/





 
 
 









