let display=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");//getting nodeList of all buttons
let buttonArray=Array.from(buttons);//making array of all buttons 
let string='';
buttonArray.forEach( btn => {
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="DEL"){//for deleting number from back one by one
            string=string.substring(0,string.length-1);
            display.value=string;
        }else if(e.target.innerHTML=="AC"){//deleting all number at once
            string='';
            display.value=string;
        }else if(e.target.innerHTML=="="){//performing arithmetic operation
            string=eval(string);
            display.value=string;
        }else{
            string +=e.target.innerHTML;//concating the number one by one
            display.value=string;
        }
    })
});