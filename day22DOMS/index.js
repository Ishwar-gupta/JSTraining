/*
✅ 1️⃣ append()
What?
👉 Adds stuff to the end of an element.
👉 You can add many things (elements or text).

Example:

let p = document.createElement("p");
p.textContent = "Hi!";
document.body.append(p, " Some text too!");



✅ 2️⃣ appendChild()
What?
👉 Adds ONE element to the end of a parent.
👉 Can’t add text directly.

Example:

let p = document.createElement("p");
p.textContent = "Hello!";
document.body.appendChild(p);



✅ 3️⃣ remove()
What?
👉 Removes itself from the page.

Example:
let p = document.createElement("p");
p.textContent = "Bye!";
document.body.appendChild(p);
p.remove(); // Removes the <p>



✅ 4️⃣ removeChild()
What?
👉 Parent removes one of its children.

Example:
let li = document.createElement("li");
li.textContent = "Item";
let ul = document.createElement("ul");
ul.appendChild(li);
document.body.appendChild(ul);



✅ What is replaceChild()?
👉 replaceChild() replaces an old child element with a new one inside a parent.

✅ Syntax

parent.replaceChild(newChild, oldChild);
newChild: The new element you want to put in.

oldChild: The old element you want to replace.




ul.removeChild(li); // ul removes the li
📌 Key points:
append()         appendChild()     remove()   removeChild()
Adds or removes?    Adds     Adds   Removes    Removes
Needs parent?     ✅ Yes     ✅Yes    ❌ No      ✅ Yes
Can add text?     ✅ Yes     ❌ No    ❌          ❌
Can add many?     ✅ Yes     ❌ No    ❌          ❌


*/

// This is to create a p tag with add some text inside parent

let parentselector = document.querySelector(".child1");
let newElement = document.createElement("p");
newElement.innerText = "This is content of new created element";
parentselector.appendChild(newElement); // this add inside parent

Elementmax = document.createElement("b"); // tp replace <p> with <b>
Elementmax.innerText = "text updated"; // to add text inside <b>
parentselector.replaceChild(Elementmax, newElement); // replace <b> with <p>

let childSelect = document.querySelector(".child1");
childSelect.style.height = "50vh"
childSelect.style.width = "50vh"
childSelect.style.backgroundColor = "blue";
childSelect.style.display = "flex";



Elementmax.style.background = "red" ; // to make bg red 
Elementmax.style.fontStyle = "italic";
Elementmax.style.padding = "20px";
childSelect.style.height = "20vh"
childSelect.style.width = "20vh"
Elementmax.style.borderRadius = "50%"
Elementmax.style.margin = "40px";
