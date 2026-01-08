/*******************Problem-1******************************************************* */
/*
1.)WAP to replace all the white spaces with the hypens.
//let message="Hello Everyone! I am from Tansen Palpa"
*//*
let message="Hello Everyone! I am from Tansen Palpa";
console.log(message.replaceAll(/ /g,"-"));
*/
/*******************Problem-1******************************************************* */
/*
Focus: Understanding .length, charAt(), slice(), substring(), concat(), 
repeat(), trim(), toLowerCase(), toUpperCase(), and replace().
*/
/*
1. Count Total Characters in a String
Problem: Write a function that returns the total number of characters 
in a given string, including spaces and punctuation.

Hint: Use the .length property.

Sample Input: "JavaScript is fun!"

Sample Output: 18
*//*
function countChar(count){
    console.log(count.length);
 }
 countChar("JavaScript is fun!");
 */
/*******************Problem-2******************************************************* */
/*
2. Get the First and Last Character
Problem: Return the first and last character of a string.

Hint: Use charAt(0) and charAt(str.length - 1).

Sample Input: "coding"

Sample Output: ["c", "g"]
*/
/*
const input="coding";
console.log(input.charAt(0));
console.log(input.charAt(input.length -1));
*/
/*******************Problem-3******************************************************* */
/*
3. Convert a Word to Uppercase
Problem: Return a word in all uppercase letters.

Hint: Use .toUpperCase().

Sample Input: "javascript"

Sample Output: "JAVASCRIPT"
*/
/*
let str="javaScript";
console.log(str.toUpperCase());
*/
/*******************Problem-4******************************************************* */
/*
4. Convert a Word to Lowercase
Problem: Convert a word in uppercase to all lowercase letters.

Hint: Use .toLowerCase().

Sample Input: "HELLO"

Sample Output: "hello"
*/

// let str="HELLO WORLD";
// console.log(str.toLowerCase());

/*******************Problem-5******************************************************* */
/*
5. Remove Extra Spaces Around Text
Problem: Remove leading and trailing spaces from a string.

Hint: Use .trim().

Sample Input: "   Welcome to coding!   "

Sample Output: "Welcome to coding!"
*/

//removes spaces from both end and start
// let strg= "    Welcome to coding ko duniya!     ";
// console.log(strg.trim());

/*******************Problem-6******************************************************* */
/*
6. Extract Characters from a String Using Slice
Problem: Extract a substring from the 2nd to 5th 
character (not including 5th).

Hint: Use .slice(1, 5).

Sample Input: "developer"

Sample Output: "evel"
*/
/*
let str="developer";
console.log(str.slice(1,5));
*/
/*******************Problem-7******************************************************* */
/*
7. Extract Characters Using Substring
Problem: Extract characters between index 2 and 5.

Hint: Use .substring(2, 5).

Sample Input: "student"

Sample Output: "ude"
*/
/*
let str="student";
console.log(str.substring(2,5));
*/
/*******************Problem-8******************************************************* */
/*
8. Repeat a Word Multiple Times
Problem: Repeat a word 3 times.

Hint: Use .repeat(3).

Sample Input: "Hi"

Sample Output: "HiHiHi"
*/
/*
let str="Hi";
console.log(str.repeat(3));
*/
/*******************Problem-9******************************************************* */
/*
9. Replace a Specific Word in a Sentence
Problem: Replace the word "bad" with "good" in a sentence.

Hint: Use .replace().

Sample Input: "This is a bad day"

Sample Output: "This is a good day"
*/
/*
let str="This is a bad day";
console.log(str.replace("bad","good"));
*/
/*******************Problem-10******************************************************* */

/*
10. Join Two Words Together
Problem: Combine two words into one.

Hint: Use .concat() or + operator.

Sample Input: "Happy", "Day"

Sample Output: "HappyDay"
*/
/*
let str1="Happy";
let str2=" Day";
console.log(str1.concat(str2));
console.log(`${str1}${str2}`);// using interpolation for concatenation
*/
/*******************Problem-11******************************************************* */
/*
🔸 Tricky & Real-Life Simulation Problems (11–20)
Focus: Combining multiple string methods (no arrays or loops).

11. Normalize a User’s Name
Problem: Trim and convert a name to lowercase.

Hint: Use .trim() and .toLowerCase().

Sample Input: "  Alice SMITH  "

Sample Output: "alice smith"
*/
/*
let str= "  Alice SMITH  ";
str=str.trim();
console.log(str.toLowerCase());
*/

/*******************Problem-12******************************************************* */
/*
12. Mask the Username in an Email
Problem: Hide all characters in the email username except the 
first character.

Hint: Use .charAt(), .slice(), .repeat().

Sample Input: "john@example.com  ";

Sample Output: "j***@example.com"
*/
/*
let email="  siddheshwar081@gmail.com  ";
email=email.trim();
let AtIndex=email.indexOf("@");
let firstChar=email.charAt(0);
let hiddenChar="*".repeat(AtIndex-1);
let domain=email.slice(AtIndex);
let hiddenEmail=firstChar + hiddenChar + domain ;
console.log(hiddenEmail);
*/
/*******************Problem-13******************************************************* */
/*
13. Censor a Word in a Sentence
Problem: Replace a given word with *** in a sentence.

Hint: Use .replace().

Sample Input: "He is rude" (censor "rude")

Sample Output: "He is ***"
*/
/*
let str="He is rude";
str=str.trim();
console.log(str.replace("rude","****"));
*/
/*******************Problem-14******************************************************* */
/*
14. Check if a Word Ends with "ing"
Problem: Check if the string ends with "ing".

Hint: Use .endsWith("ing").

Sample Input: "running"

Sample Output: true
*/
/*
let word="running";
if(word.endsWith("ing")){
    console.log(true);    
}else{
    console.log(false);
    
}*/
/*******************Problem-15******************************************************* */

/*
15. Make a Word Excited
Problem: Convert a word to uppercase and repeat it twice, separated by -.

Hint: Use .toUpperCase() and .concat().

Sample Input: "wow"

Sample Output: "WOW-WOW"
*/
/*
let  exp="  wow   ";
exp=exp.trim();
let concatedExp=exp.toUpperCase().concat("-",exp.toUpperCase());
console.log(concatedExp);
*/
/*******************Problem-16******************************************************* */

/*
16. Create a Short Code
Problem: Return the first 3 letters of a word in uppercase.

Hint: Use .slice(0, 3) and .toUpperCase().

Sample Input: "developer"

Sample Output: "DEV"
*/
/*
let str="  developer  ";
str=str.trim();
let shortCode=str.slice(0,3).toUpperCase();
console.log(shortCode);
*/
/*******************Problem-17******************************************************* */
/*
17. Starts with a Specific Letter
Problem: Check if a word starts with the letter "A" or "a".

Hint: Use .toUpperCase() and .startsWith("A").

Sample Input: "Apple"

Sample Output: true
*/
// let letter="Apple";
// let result=letter.toUpperCase().startsWith("A");
// console.log(result);
/*******************Problem-18******************************************************* */

/*
18. Format Greeting Using Name
Problem: Return a greeting in the format: "Hello, NAME!" with name in uppercase.

Hint: Use .toUpperCase() and .concat().

Sample Input: "ravi"

Sample Output: "Hello, RAVI!"
*/
// let userName="Ravi";
// let result="Hello ".concat(userName.toUpperCase());
// console.log(result);
/*******************Problem-19******************************************************* */
/*
19. Emphasize a Word with Symbols
Problem: Surround the word with ** on both sides.

Hint: Use string concatenation.

Sample Input: "cool"

Sample Output: "**cool**"
*/
// let str="cool";
// let result="**".concat(str)+"**";
// console.log(result);
/*******************Problem-20******************************************************* */
/*
20. Convert Spaces to Dashes
Problem: Replace all spaces in a sentence with dashes.

Hint: Use .replaceAll(" ", "-").

Sample Input: "Learn JavaScript Now"

Sample Output: "Learn-JavaScript-Now"
*/
// let sentence="Learn JavaScript Now";
// console.log(sentence.replaceAll(" ","-"));
// let result = sentence.replace(/ /g, "-");

/*******************Problem-21****************************************************** */
//WAP to reverse a String

/*
let str="JavaScript";
let  reversedStr=str.split("").reverse().join("");
console.log(reversedStr);//tpircSavaJ
*/
/*******************Problem-22****************************************************** */
//WAP to count vowels in string
// let str="JavaScript";
// let vowelCount =0;
// for(let i=0;i<str.length;i++){
//     let ch=str.charAt(i).toLowerCase();
//     if(ch ==="a" || ch ==="e" || ch ==="i" || ch ==="o" || ch ==="u"){
//         vowelCount++;
//     }
// }
// console.log(`The no of vowel in ${str} is ${vowelCount}`);

/*******************Problem-23****************************************************** */

//WAP to check  the given  string is palindrome or not

// let str="DaD";//palindrome
// let str="Java";//not palindrome
// let reversedStr=str.split("").reverse().join("");
// if(str===reversedStr){
//     console.log(`${str} is palindrome string`);
// }else{
//     console.log(`${str} isn't palindrome string`);
// }
/*******************Problem-23****************************************************** */
//WAP for character frequency counter


/*******************Problem-24****************************************************** */
//WAP to remove duplicates character in string
// let str="Programming";
// let result="";
// for(let i=0;i<str.length;i++){
//     let char =str[i];
//     if(!result.includes(char)){
//         result += char;
//     }
// }
// console.log(result);

