/*
let i;
for(i=0;i<100;i++){
    console.log("Siddheshwar Gupta" +i);
}*/
/*
let num =Number(prompt("Enter any number for multiples of it"));
for(let i=1;i<=10;i++){
    console.log(num + "*" + i + "=" + num * i);
}*/
/*
for(let i=1;i<=100;i++){
    if(i % 2 !=0){
        console.log(i + " is odd number");
    }
    else{
        console.log(i + " is even number");
    }
}*/
//write a program to print sum  of first n whole numbers using for loop using userinput
/*
let num =Number(prompt("enter upto number:"));
let sum=0;
for(let i=0;i<=num;i++){
    sum =sum+i;
}
console.log("the sum of first n whole number is:"  +sum);

*/

let num = Number(prompt("enter number:"));
let prod=1;
for(let i=0;i<num;i++){
    //i++;
    //prod= prod*i; 
    prod=prod * (i+1)   ;
}
console.log(prod);



