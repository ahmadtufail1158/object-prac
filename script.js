// //Assignment no 1.

// const book = {
//     title : "Life",
//     author : " Sir Ahmad",
//     pages : 299,
//     read : false
// };

// console.log(book);





 //Assignment no 2.

// const book = {
//     title : "Life",
//     author : " Sir Ahmad",
//     pages : 299,
//     read : "false"
// };
// book.read = true;
// console.log(book.read);


// //Assignment no 3.
//  const book = {
//     title : "Life",
//     author : " Sir Ahmad",
//     pages : 299,
//     read : "false"

//  };
//   book.summary = function(){
//     console.log("this is my summary");
//   }
//  console.log(book.summary());





// //Assignment no 4.
//  var book2 = new Object();
//  book2.author = "Tather",
//   book2.title = "life"






// //Assignment no 5

// // Create a constructor function called Vehicle
// function Vehicle(type) {
//     this.type = type;
//   }

//   Vehicle.prototype.start = function() {
//     console.log(`The ${this.type} is starting.`);
//   };
  
 
//   let car = new Vehicle('car');
//   let truck = new Vehicle('truck');
  
 
//   car.start = function() {
//     console.log('Vroom! The car is starting.');
//   };
  
  
//   car.start();  
//   truck.start();  






// // Assignment no 6

// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages: 281,
//     published: 1960
//   };
  
//   for (let property in book) {
//     console.log(`Property: ${property}, Value: ${book[property]}`);
//   }