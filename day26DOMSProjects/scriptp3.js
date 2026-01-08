let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

let list = [];

function renderList() {
    listContainer.innerHTML='';
  list.map((obj) => {
    let divElm = document.createElement("div");
    divElm.classList.add("list");
    divElm.innerHTML = `
        <p>${obj.text}</p>
            `
        let  buttonElm=document.createElement('button');
        buttonElm.innerText='❌';
        divElm.appendChild(buttonElm);
        divElm.onclick=()=>{
            handleRemoveList(obj.id);
        }

        listContainer.append(divElm);
  });
}
renderList(list);

function handleAddList(){
    let obj={
        id:Date.now(),
        text:addInput.value
    }
    list.push(obj);
    //list.unshift(obj);//it add the object from the starting of the array
    renderList(list)  ;
    addInput.value='';
}

function handleRemoveList(id){
    let list=list.filter(obj=>{
         return obj.id !== id;
    })
    renderList(list);
}
addBtn.addEventListener("click",handleAddList)
