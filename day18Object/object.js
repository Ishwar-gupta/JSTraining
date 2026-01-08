// //object Literal Method
// /************************             ****************************************************/
// const person={
//     userName:"person",
//     phone:9815476643,
//     display:function(){
//         console.log("this is function");        
//     }
// };
// // person.age=22;
// // console.log(person.age);
// // delete person.age;
// // console.log(person);
// for(let key in person)
// {
//     // console.log(person[key]);  
//     console.log(key, person[key]);
    
    
// }
// /************************  problem-1           ****************************************************/

/*
let details={
    userName:"Siddhu",
    address:{
        city:"Tansen",
        district:"Palpa"
    }
}
console.log(details.address.city);
details.address.ward=5;
console.log(details);
console.log(details.address.ward);
delete details.address.ward;
console.log(details);
*/

/*
let fruits={
    ft1:"apple",
    ft2:"banana",
};
fruits.ft3="Cherry";
console.log(fruits);
//hasProperty   Object..hasOwn(objectName,"keyName");
console.log(Object.hasOwn(fruits,"ft1"));
console.log(Object.hasOwn(fruits,"ft3"));
*/

/*********************  Problem -2  *********************************************/
/*
//in->

in ->Checks if a property exists in an object (even in the prototype chain).


let car = { brand: "Toyota", model: "Corolla" };
console.log("brand" in car); // true
console.log("color" in car); // false
*/
/*********************  Problem -3  *********************************************/

/*
//hasOwn-->

hasOwn->Checks if an object has the specified property as its own (not inherited).
let car = {
  brand: "Tesla",
  model: "Model S"
};

console.log(car.hasOwnProperty("brand")); // true
console.log(car.hasOwnProperty("toString")); // false (inherited from Object)
*/
/*********************  Problem -4  *********************************************/
//keys->
/*
keys->Returns an array of a given object's own enumerable property names

let person = { name: "Bob", age: 25 };
console.log(Object.keys(person)); // ["name", "age"]
*/
/*********************  Problem -5  *********************************************/
//values-->
//values->Returns an array of the object's own enumerable property values.
/*
values->Returns an array of the object's own enumerable property values.
let fruit = { apple: 2, banana: 5 };
console.log(Object.values(fruit)); // [2, 5]
*/
/*********************  Problem -6  *********************************************/
//entries->
/*
entries->Returns an array of key-value pairs from an object.
*/
/*
let student = { id: 1, name: "Sam" };
console.log(Object.entries(student)); // [["id", 1], ["name", "Sam"]]
*/
/*********************  Problem -7  *********************************************/
//freeze->
/*
freeze ->Freezes an object so its properties can’t be added, removed, or changed.

let config = { version: 1 };
Object.freeze(config);
config.version = 2;//
console.log(config.version); // 1 (no change)
*/
/*********************  Problem -8  *********************************************/
//seal
/*
seal ->properties can’t be added or removed, but existing properties can be changed.

let settings = { theme: "dark" };
Object.seal(settings);
settings.theme = "light";     // allowed
settings.newProp = "test";    // ignored
delete settings.theme;        // fails
console.log(settings); // { theme: "light" }
*/
/*********************  Problem -9  *********************************************/
// getOwnPropertyDescriptors->
/*
// getOwnPropertyDescriptors->Returns all property descriptors (value, writable, enumerable, configurable).
let obj = {
  a: 1,
  get b() { return 2; }
};
console.log(Object.getOwnPropertyDescriptors(obj));
*/
/* Output:
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: {
    get: [Function: get b],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
*/
/*********************  Problem -10  *********************************************/
//.definedProperty




