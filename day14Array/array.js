
/****************     NOTE     *************************** */
//Jagged array=>this type of array in which column of the array are different
/*
e.g--->
  | 1  2  3  6 |
  | 1  3  5    |
  | 2          |
  | 1  5  6    |
*/


/*
let arr1=[1,"hari",true,10.6,'Name'];// heterogeneous linear array
console.log(arr1[5]);//undefined
*/

 //Constructor
// let arr=new Array(1,2,3,4,5);
// console.log(arr[5]);//it will also gives undefined

//Multidimensional array
// let multArr=[
//     [1,2,4],
//     [4,3,1],
//     [5,3,1]
// ]
// console.log(multArr);


//jaggedArray
// let jaggedArray=[
//     [2,3 ,5 ],
//     [2,1,5,3,2],
//     [3,4],
//     [1,3,6,6]
// ]
// console.log(jaggedArray);

/*
//Properties of an Array
let numbers=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<=numbers.length;i++){

    console.log(numbers[i]);//9
}
*/
/**********************   Problem -1************************************************** */
//WAP to print the sum of elements of given array
//[10,20,2,5,7,9,8,31,42,99,30,17]

// let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
// let arrSum=0
// for(let i=0 ; i<arr.length;i++){
//     arrSum += arr[i];
// }
// console.log(arrSum);

/**********************   Problem -2************************************************** */
//WAP to print all the even numbers and their sum
// let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
//  let arrSum=0;
// for(let i=0 ; i<arr.length;i++){
//     if(arr[i] % 2 != 0){
//         arrSum += arr[i];
//         console.log(arr[i]);       
//     }   
// }
// console.log("The sum of all even number in a given array is " + arrSum);

/**********************   Problem -3************************************************** */
//WAP to print all the odd numbers and their sum
//  let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
//  let arrSum=0;
// for(let i=0 ; i<arr.length;i++){
//     if(arr[i] % 2 !=0){
//         arrSum += arr[i];
//         console.log(arr[i]);       
//     }   
// }
// console.log("The sum of all odd number in a given array is " + arrSum);

/**********************   Problem -4************************************************** */
//WAP to check if the number provided by user exits in array or not
// let userArr=Number(prompt("Enter the element of an array to check"));
//   let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
//   if(arr.includes(userArr)){
//     console.log("The number provided by user of an array is present");    
//   }else{
//         console.log("The number provided by user of an array isnot present");    

//   }
            //using function to check it
// function arrayCheck(userArr){
//     let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
//         if(arr.includes(userArr)){
//             console.log("The number provided by user of an array is present");    
//         }else{
//             console.log("The number provided by user of an array isnot present");   
//         }
// }
// let userArr=Number(prompt("Enter the element of an array to check:"));
// arrayCheck(userArr);

//without using methods
// function arrayCheck(userArr){
//     let arr=[10,20,2,5,7,9,8,31,42,99,30,17];
//     for(i=0;i<arr.length;i++){
//         if( userArr == arr[i]){
//             return 1;
//         }
//     }
// return 0;
// }
// let userArr=Number(prompt("Enter the element of an array to check:"));
// if(arrayCheck(userArr)){
//      console.log("The number provided by user of an array is present");    
// }else{
//      console.log("The number provided by user of an array isnot present");    
// }

/**********************   Problem -5   ************************************************** */
/*
1.) to check whether first and last element are same and print their sum
  arr=[3,2,1,4,16 ,20,7,22,44,7,3,2,3]

2.)print elements in reverse without reversing array
3.)count how many times 3 appears in array
4.)find maximum and minimum element in array & their difference
*/

/*
//1.) to check whether first and last element are same and print their sum
  //arr=[3,2,1,4,16 ,20,7,22,44,7,3,2,3]
  let arr=[3,2,1,4,16 ,20,7,22,44,7,3,2,3];
  let arrSum;
  if(arr[0] == arr[arr.length-1]){
    arrSum=arr[0]+arr[arr.length-1];
  }
console.log(` The sum of first and last element (if equals) is ${arrSum}`);
*/
  /*
  //2.)print elements in reverse without reversing array
let arr = [3, 2, 1, 4, 16, 20, 7, 22, 44, 7, 3, 2, 3];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

*/
//4.)find maximum and minimum element in array & their difference
// let arr = [3, 2, 1, 4, 16, 20, 7, 22, 44, 7, 3, 2, 3];
/*
function maxMinArr(arr){
  let maxArr=arr[0];
  let minArr=arr[0];
  // if(maxArr>arr)
  for(let i=0;i<arr.length;i++){
    if(arr[i] > maxArr)
    {
      maxArr=arr[i];
    }
     if(arr[i] < minArr){
      minArr=arr[i];
    }
    
  }
  console.log("maxArr is :" + maxArr);
  console.log("minArr is :" + minArr);
  console.log("differnce is : " + (maxArr - minArr))
}
let arr = [3, 2, 1, 4, 16, 20, 7, 22, 44, 7, 3, 2, 3];
maxMinArr(arr);
*/
// 3.)count how many times 3 appears in array
/*
let arr = [3, 2, 1, 4, 16, 20, 7, 22, 44, 7, 3, 2, 3];
let counter=0;

for (let i=0;i<arr.length;i++){
  if(arr[i]==3){
    counter++
  }
}
console.log(counter)
*/






















