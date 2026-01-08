//Make a form that takes name , age and address ,get the values of them in js.
let form=document.getElementById("submitForm");
 form.addEventListener("click",function(events){
    events.preventDefault();

    let Name=document.querySelector("#formName").value;
    let Age=document.querySelector("#formAge").value;
    let Address=document.querySelector("#formAddress").value;

    console.log(`Name:${Name}`);
    console.log(`Age:${Age}`);
    console.log(`Address:${Address}`);    

let outputBox=document.getElementById("outputBox");

    outputBox.innerHTML=`
    <p><b>Name: </b> ${Name}</p>
    <p><b>Age: </b> ${Age}</p>
    <p><b>Address: </b> ${Address}</p> `



});


