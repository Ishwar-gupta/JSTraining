//accessing html elements using  document object

//properties
//InnerHTML
//InnerText

//methods
/*
document.getElementById()
document.getElementsByClass()
document.getElementByTagName()
*/
/*
let num1=document.getElementById("mainId").innerText;
let num2=document.getElementById("mainId");
console.log(num2);
console.log(num1);
*/
let mainId=document.getElementById("mainId").innerText;
console.log(mainId);
let main=document.getElementsByClassName("main");
console.log(main);
console.log(typeof main);
console.log(main.length);
for(let i=0;i<main.length;i++){
    console.log(main[i].textContent);
}
let tagName=document.getElementsByTagName("p");
console.log(tagName);
console.log(typeof tagName);
console.log(tagName.length);
for(let i=0;i<tagName.length;i++){
    console.log(tagName[i].textContent);
}

/*
querySelector()->first element
querySelectorAll()->all elements making HTML collection
*/
let firstClass=document.querySelector("p");
console.log(firstClass.setAttribute("p","para"));
console.log(firstClass);





