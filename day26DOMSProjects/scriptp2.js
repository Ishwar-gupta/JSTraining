let userContainer=document.querySelector(".userContainer");
let searchInput=document.querySelector("#searchInput");
const arr=[
    {
        profileUrl:'https://imgs.search.brave.com/02p4n0PabszHTeQfwl14wv2-E0gdARkGjz_108SivDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvZmVh/dHVyZXMvYXVkaW8v/ZmluZC1zdG9jay1t/dXNpYy1tYWluLndl/YnA',
        name:'Munna Tripathi',
        email:'tripathimunna@gmail.com',
    },
    {
        profileUrl:'https://imgs.search.brave.com/Y0HaBclEl3kWGqow4xiwrLE-GNuAfOhdDShEWD0yYBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvZmVh/dHVyZXMvYXVkaW8v/aW50cm8tb3V0cm9z/LW1haW4ud2VicA',
        name:'Guddu Tripathi',
        email:'tripathiguddu@gmail.com',
    },
    {
        profileUrl:'https://imgs.search.brave.com/7oVRTpd8EPDAdo_P5YKvc_o3yIEXDfHiQFByiNLWY6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvZmVh/dHVyZXMvdmlkZW9z/L2FkZC1zZngtdmlk/ZW8tbWFpbi53ZWJw',
        name:'Guddu Tripathi',
        email:'tripathiguddu@gmail.com',
    }
]

arr.map(function (obj){
    let { profileUrl,name,email}=obj;
    let divElem=document.createElement("div");
    divElem.className='userItem';
    divElem.innerHTML=`
    <div  class="image">
        <img src=${profileUrl} alt="Error loading image">
    </div>
    <div class="userDetails">
        <h3>${name}</h3>
        <p>${email}</p>
    </div>   `

    userContainer.append(divElem);
})
function handleSearch(e){
    console.log(e.target.value);    
}

searchInput.addEventListener("input",handleSearch);