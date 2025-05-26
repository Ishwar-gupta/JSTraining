/*  // take user input of rows and columns  for printing pattern
let row = Number(prompt("Enter the no of rows"));
let column =Number(prompt("Enter the no of column"));
for(let i=1;i<=row;i++){
    let star ="";
    for(let j=1;j<=column;j++){
        star =star + "* ";
    }
    console.log(star);
    console.log("\n");
}
*/
//write a program to find the occurence of 3 from 1 to 500
/*
 let count =0;
for(let i=1;i<=500;i++){
    let temp=i;
    while (temp > 0){        
        temp =temp/10;
       if(temp ==3){
        count++;
       }
    }
    temp = parseInt(temp/10);
}
console.log(count);
*/

//WAP to generate all possible three digits combination  using 1,2 & 3; eg. 111,112,......333
/*
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        for(let k=1;k<=3;k++){
            console.log((i * 100 ) + (j * 10 ) + k);
        }
    }
}
*/

//WAP to generate all possible three digits combination  using 1,2,3 & 4; but skip any repeated numbers

/*
for(let i=1;i<=4;i++){
    for(let j=1;j<=4;j++){
        for(let k=1;k<=4;k++){
            if(i == j || j==k || k==i )
                {
                continue;
                }
            let num = i*100 +j*10 +k;
            console.log(num);
            
        }
    }
}*/

/* WAP to print all the numbers from 1 to 500 whose product of digit equals to 6
eg.:123 --> 1*2*3=6
*/
for(let i=1;i<=500;i++){
  let temp=i;
    let prod =1;
    //let rem;
    while(temp!=0){
        rem=temp%10;
        prod=prod*rem;
        temp =parseInt(temp/10);
    }
     if(prod ==6){
            console.log(i);
        }
}


    