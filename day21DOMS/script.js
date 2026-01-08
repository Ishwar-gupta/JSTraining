/*

Tasks to Perform in script.js

🔹 Task 1: getElementById

Change the text of the element with id "main-title" to:
"DOM Assignment – ID Access";
-*/

let id=document.getElementById("main-title");
id.innerText="DOM Assignment – ID Access";

/*
Task 2: getElementsByClassName

Change the color of the first element with class "fruit" to red.
(You'll add class "fruit" to one <li> in HTML if it's not there.)

*/
let clsList=document.querySelector("li");
clsList.setAttribute("class","fruit");
clsList.style.color="red";

/*
🔹 Task 3: getElementsByTagName

Change the innerText of the first <li> tag to:
"Changed by Tag Access"

*/
let tag1=document.querySelector("li");
tag1.innerText="Changed by Tag Access";

/*
🔹 Task 4: querySelector

Use querySelector("p") to select the first <p> and make its text color blue.

*/
let para=document.querySelector("p");
para.style.color="blue";

/*
🔹 Task 5: querySelectorAll

Use querySelectorAll("li") to select all <li> elements.
Change the text of the second one to:
"Second Item Updated"

*/
let listItem=document.querySelectorAll("li");
listItem[1].innerText="Second Item Updated";

/*
🔹 Task 6: innerHTML

Use innerHTML to replace the content of the element with id "box" with:
<i>This box was updated using innerHTML</i>


---
 */