// //server
// const http=require("https");

// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.end('Bye');
// });
// const port=3000;

// server.listen(port,()=>{
//     console.log(`Server is running.`);
// });

/*
//server
const { log } = require("console");
const http=require("http");
const server=http.createServer((req,res)=>{
    res.statusCode=2000;
    res.end('Bye');
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server is running.`);    
});*/
// const userJs={
//     title:"Siddheshwar Gupta",
//     sem:"Second",
//     course:"CSIT"
// };
// // console.log(Object.entries(userJs));
// console.log(userJs["title"]);

let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let submit=document.getElementById("Submit");
let result=document.getElementById("result");

submit.addEventListener("click",()=>{
    let sum=Number(num1.value)+Number(num2.value);
    result.innerText ="Result:"+sum;
});