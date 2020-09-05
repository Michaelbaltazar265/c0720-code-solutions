/* eslint-disable no-console */


const threeBooks = 
[
    { title: "Learn Coding Basics in Hours with JavaScript", 
      author: "The Tech Academy, Jack C. Stanley", 
      isbn: "54635"},
      {title: "Coding All-in-One For Dummies", 
      author: "Nikhil Abraham", 
      isbn: "53645"},
      {title: "Web Design with HTML, CSS, JavaScript and jQuery Set 1st Edition", 
      author: "Jon Duckett", 
      isbn: "19740"},
];


console.log("result of threeBooks is ", JSON.stringify( typeof threeBooks));

const student = '{"name": "Michael", "numberId": "00324"}';
const obj1 = JSON.parse( student)

console.log( "result of student" , typeof obj1)
