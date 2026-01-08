/*
let btn = document.getElementById("Submit");
let p=document.getElementById("result");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
btn.addEventListener("click",()=>{
    //converting the number before adding
    let sum = Number(num1.value) + Number(num2.value);
    result.innerText="Result:"+sum;
});
*/
let title=document.getElementById("title");
let image=document.getElementById("image");
image.addEventListener('mouseover',()=>{
    // console.log(image);    
    image.style.scale="2";
    image.style.transition="0.95s"
    title.style.backgroundColor="aqua";
    title.style.display="block"
    title.style.fontSize="30px";
    // image.style.height="500px";
});
image.addEventListener('mouseout',()=>{
    image.style.scale="1";
    title.style.display="none";
});
image.addEventListener("click",()=>{
    image.style.scale="3";
});
image.addEventListener("dblclick",()=>{
    image.style.scale="3";
});