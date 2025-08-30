console.log("Hello World");

//variable - wrong ways of declaring a variable
/* - Multiline Comments
person1 = "Harsh";
person1Age = 20;

person2 = "Riya";
person2Age = 21;

//printing something on console
console.log(person1);
console.log("Sum of ages of both the Persons:", person1Age + person2Age);
*/

//correct ways od declaring a variable4
//using let & const
let person1; //declaration of variable
person1 = "Harsh"; //Intialization or Definition of a variable

//console.log(age); //variable that's decared after this console.log
//console.log(number); //variable that's never declared

let person1Age = 20; //declaration and definition of variable
let age; // unintialized variable

console.log("Value of undefined Variable 'age':", age);

let person2 = "Riya";
let person2Age = 21;

console.log(person1);
console.log("Sum of age of both the Person:", person1Age + person2Age);

//let variabes can change their values in future also
person1 = "Harsh Singh";
console.log(person1);

//const variables
const studentName = "Rahul"; //this value cannot be changes
// studentName = "Puneet"; give error (Assignment to constant variable.)
// const emptyConstVariable; cannot create uninitialized const variables 

// types of data we can store in const
// store NamedNodeMap
const employeeName = "Rahul Kumar";

// store age
let employeeAge = 30;

//store Date of birth(dob)
const dob = "23 - Jan - 2003";

console.log("Sudent Name: " + studentName); // add two strings

// data type -> type of value a variable holds
console.log("Checking type of value of DOB variable: ", typeof dob);
console.log("Checking type of employeeAge variable: ",  typeof employeeAge);

// various data types is Javascript
// boolean
const isStudent = true;
console.log("Cheaking type of isStudent variable: ", typeof isStudent);

// string -> refer above dob example

// number -> refer above employeeAge example

// JS is dynamically typed language
let x = "Hi How are you"; //x is of type string
x = 20; // x is now of type number
x = false; // x is now of type boolean

// ===Arithemetic Operators ===
let a = 10,
    b = 20;
	
// sum
let c = a + b;
console.log("sum of a and b:", c);

//subtract
c = b - a;
console.log("b - a = " + c);

//multiplication
c = a * b;
console.log("a * b = " + c);

//division
c = b / a;
console.log("b / a =", c);
c = -4 / 0; 
console.log("-4 / 0 =", c); 
c = 4 / Infinity;
console.log("4 / Infinity =", c);

// Remainder - %
c = a % b;
console.log("a % b =" + c);

// Power -> **
c = 2 ** 4;
console.log("2 raised to power 4: " + c);
console.log("Srcond Way using Math.pow() : " + Math.pow(2, 5));


/* Some more arithmetic operators */
let r = 5;
r = r + 5; // RHS is calculated first, then it is assigned to LHS
r += 5; //shorthand
console.log(r); 

r *= 5;
console.log(r);

r = "34";
r += 26;
r *= 2;
console.log(r);

//minutes to seconds
const minutes=24;
console.log("24 Minutes in Seconds: ",24*60);

// last digit of number
const number=234;
const result1=number%10;
console.log("Last digit of number : ",result1);

//print 2nd last digit
let last2nd=number
last2nd=Math.floor(last2nd/10);
console.log(last2nd%10);

// last 3rd number print
last3rd=Math.floor(last2nd/10);
console.log("Last 3rd digit : ",last3rd);


// js mai ek deatzone hota hai jisme let and const mai declaration hota hai pan wait karata hai tab tak to Intialization nahi hote
//               let                                      |          const                                               |         var   
//--------------------------------------------------------+--------------------------------------------------------------+----------------------------------------------
// Temporal Dead Zone (TDZ)                               | Temporal Dead Zone (TDZ)                                     | No Temporal Dead Zone (TDZ)                                         
// can be  Initialization/ uninitialized                  | cannot be uninitialized                                      | can be  Initialization/ uninitialized
// let a; //declaration                                   | const n; //error                                             | var v; //declaration
// a =10; //Intialization                                 | n =20;                                                       | v =10; //Intialization
// can be reassigned                                      | cannot be reassigned                                         | can be reassigned
// a = 20; //reassigned                                   |  n = 30; //error                                             | v = 20; //reassigned
// cannot be redeclared                                   | cannot be redeclared                                         | can be redeclared
// let a = 30; //error                                    | const n = 40; //error                                        | var v = 30; //no error
// function scoped variable                               | function scoped variable                                     | function scoped variable
// block scoped variable                                  | block scoped variable                                        | not a block scoped variable
// cannot be accessed before declaration & intialization  | cannot be accessed before declaration & intialization        | can be accessed before declaration (undefined)
// cannot be used in global object                        | cannot be used in global  object                             | can be used in global object (window object in browsers)
// cannot be used in for loop                             | cannot be used in for loop                                   | can be used in for loop
//                                                        |                                                              | (but not recommended)