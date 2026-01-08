/*********************  Problem -1  *********************************************/

//Create an object called `book` with properties:title,author,year and genre.
//Fill in appropriate values
/*
const book={
    title:"Muna Madan",
    author:"Laxmi Prasad Devkota",
    year:2005,
    genre:"Social",
};
//Add a new property `pages` to the book object and assign a number.
book.pages=205;

//update the value of the year property to a newer year.
book.year=2010;
//delete the genre property from the object.
delete book.genre;
//check if the property 'title' exists in the 'book' object using "in" operator
console.log("title" in book);//true
//use "object.keys()" to list  all properties of the "book" object.
console.log(Object.keys(book));
//use "object.vlaues()" to list  all values of the "book" object.
console.log(Object.values(book));
//use "object.entries()" to list  all key-value pairs of the  object.
console.log(Object.entries(book));
//use "object.defineProperty()" to add a non-enumerable property "summary" with  any string value.
// 🔧 Add a non-enumerable property "summary"
Object.defineProperty(book, "summary", {
  value: "A classic Nepali epic poem.",
  enumerable: false // explicitly non-enumerable
});
//Loop through the object using " for...in" and verify that "summary" doesnot appear in the loop
// 🔁 Loop through properties
for (let key in book) {
  console.log(key); // "summary" will NOT appear here
}

// 🧪 But we can still access it directly
console.log("Summary:", book.summary); // Output: A classic Nepali epic poem.
*/

