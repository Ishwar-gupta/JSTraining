//accessing button using js

// function changeBackgroundColor(){
//     document.body.style.backgroundColor="red";
// }
const button=document.getElementById("changeBackground");
button.addEventListener("click",()=>{
document.body.style.backgroundColor="red";
})
button.addEventListener("keypress",(event)=>{
    if(event=="Enter"){
        document.body.style.backgroundColor="blue";
    }
})

button.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="green";
});

button.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor="yellow";
});


