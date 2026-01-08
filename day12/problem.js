/*******************Problem-1******************************************************* */
/*
1.)WAP to replace all the white spaces with the hypens.
//let message="Hello Everyone! I am from Tansen Palpa"
*/

/*

let message="Hello Everyone! I am from Tansen Palpa";
console.log(message.replaceAll(" ","-"));

*/


/*******************Problem-2******************************************************* */
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
*/

/*
const input="JavaScript is fun!";
console.log(input.length);//18
*/
/*******************Problem-3******************************************************* */
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
/*******************Problem-4******************************************************* */
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
/*******************Problem-5******************************************************* */
/*
4. Convert a Word to Lowercase
Problem: Convert a word in uppercase to all lowercase letters.

Hint: Use .toLowerCase().

Sample Input: "HELLO"

Sample Output: "hello"
*/
/*
let str="HELLO WORLD";
console.log(str.toLowerCase());
*/
/*******************Problem-6******************************************************* */
/*
5. Remove Extra Spaces Around Text
Problem: Remove leading and trailing spaces from a string.

Hint: Use .trim().

Sample Input: "   Welcome to coding!   "

Sample Output: "Welcome to coding!"
*/
/*
//removes spaces from both end and start
let str= "    Welcome to coding ko duniya!     ";
console.log(str.trim());
*/
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
Problem: Hide all characters in the email username except the first character.

Hint: Use .charAt(), .slice(), .repeat().

Sample Input: "john@example.com"

Sample Output: "j***@example.com"
*/