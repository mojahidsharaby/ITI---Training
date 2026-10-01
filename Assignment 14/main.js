// ! حل الاسئله الاسئله الاولي مدمجه في ملف الاسئله الاساسي مش بتاع البونص

// # Part 3 - Compelete the following

// ## Q1
/**
const numbers = [1, 2, 3, 4];
numbers.forEach((num)=>{
    console.log(num * 2);
});
*/
//-----------------------------------------
//Q2
/* 
const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
  return num > 20;
});
*/
//---------------------------------------------
//Q3
/*
const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 28 },
  { name: "Omar", age: 30 },
];

const user = users.find((item) => {
  return item.age > 25;
});

// يبقي كده الفايند حتجبلي اول شخص يحقق الشرط اما الفيلتر كل العناصر 

*/
//------------------------------------------------------
//Q4
/*
const names = ["ali", "mona", "ahmed"];

const result = names.map((name) => {
  return name.toUpperCase();
});

console.log(result);
*/

//----------------------------------------------------------
//----------------------------------------------------------

//Part 4
/*

const fruits = ["Apple", "Banana", "Orange"];

///Q1
for (let fruit of fruits) {
  console.log(fruit);
  }
  ///Q2
  for (let index in fruits) {
    console.log(index);
    }
    ///Q3
    fruits.forEach((fruit, index) => {
        console.log(`${index} --->${fruit}`);
        });
        */

//----------------------------------------------------------
//----------------------------------------------------------

//Part 5
/*


///Q 1
//-------------------------------
function sum(a, b) {
      return a + b;
    }
    let sum = (a, b) => a + b;
    
    //-------------------------------
    ///Q2
    
    const user = {
          name: "Mostafa",
          age: 25,
        };
        
        let user = { name: "Mostafa", age: 25 };
let { name, age } = user;

console.log(user);
//-------------------------------

///Q3

console.log("Hello " + name);

console.log(`Hello ${name}`);

//-----------------------------------

Q4

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
*/
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//# Part 6 - Many Q

/* 


const students = [
    { name: "Mojahid", degree: 99 },
    { name: "Ali", degree: 70 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 },
];

///Q1

const nameonly = students.map((student) => student.name);

console.log(nameonly)
//------------------------------------------
///Q2

const passedstudent = students.filter((student) => student.degree >= 60);
console.log(passedstudent);

///Q3

const topstudent = students.filter((student) => student.degree > 90);

console.log(topstudent);

///Q4
students.forEach((student) => console.log(student.name));
*/

