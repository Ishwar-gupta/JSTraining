/*
let randomBtn=document.querySelector(".randomBtn");
let colorInput=document.querySelector("#colorInput");
let applyBtn=document.querySelector(".applyBtn");
let currentColorValue=document.querySelector(".currentColorValue");
let container=document.querySelector(".container");
// console.log(randomBtn,colorInput,applyBtn,currentColorValue);

const colorArray=['red','blue','green','white','black','aqua'
    ,'aquamarine','yellow','lightgreen','lightseagreen','cyan',
    'tomato','lightcoral','gold','maroon','whitesmoke','navy','dodgerblue',
    'lime','deeppink','brown','burlywood'];

const generateRandomColor=()=>{
    const randomNumber=Math.floor(Math.random()*colorArray.length);
   return  colorArray[randomNumber];
}
generateRandomColor();

const changeColor = (color) => {
    container.style.backgroundColor=color;
    currentColorValue.innerText=color;
}

const handleRandomBtnClick=()=>{
    let color=generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick=()=>{
    const color=colorInput.value;
    changeColor(color);    
}
randomBtn.addEventListener("click",handleRandomBtnClick);
applyBtn.addEventListener("click",handleApplyBtnClick);
*/

let randomBtn=document.querySelector(".randomBtn");
let colorInput=document.querySelector("#colorInput");
let applyBtn=document.querySelector(".applyBtn");
let currentColorValue=document.querySelector(".currentColorValue");
let container=document.querySelector(".container");
// console.log(randomBtn,colorInput,applyBtn);
const colorArray=['aqua','aquamarine','aliceblue','red','brown','green',
    'yellow','white','black','maroon','deeppink','pink','gray','lightcoral',
    'tomato','lime','gold','lightseagreen','burlywood','cyan',
    'lightgreen','dodgerblue','navy','blue'];
const generateRandomColor=()=>{
    const randomNumber=Math.floor(Math.random()*colorArray.length);
    return colorArray[randomNumber]    ;
}
// generateRandomColor();
const changeColor=(color)=>{
    container.style.backgroundColor=color;
    currentColorValue.innerText=color;

}

const handleRandomBtnClick=()=>{
    const color=generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick=()=>{
    const color=colorInput.value;
    changeColor(color);
}
randomBtn.addEventListener("click",handleRandomBtnClick);
applyBtn.addEventListener("click",handleApplyBtnClick);
