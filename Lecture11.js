// Function
// function  is a block of code designed to perform a particular task
// A function is executed when "something" invokes it (calls it)
// function is reusable
// function can take parameters and return a value
// Syntax
/* 
function declaration
function name(parameter1, parameter2, parameter3) {
   code to be executed
   return value
} 
fuction call or Invoking a function
name(argument1, argument2, argument3);
*/
// DRY - Don't Repeat Yourself
// It is created when we want to use some lines of code multiple times in our project and we don't when and where exactly we need to have this block of code
// in simple terns, function are a block of code that perforn specific tasks.
// Same rues of variable name and function name
//function parameters are defined but not passed arguments by default pass NaN

// Example 1
// time complexity O(1)
console.log("------------Function----------");
function greetUser() {
	console.log("Hello World!");
}

greetUser();

// Example 2 fuction with parameters and arguent
// time complexity O(1)
// parameters is a variable in a function definition
// argument is the actual value of this variable that gets passed to function
console.log("-------------------------------");
function greetSpecificUser(name) 
{
	console.log("Hello " + name);
}

greetSpecificUser("Deep");

// Example 3 function with multiple parameters
// time complexity O(1)
console.log("-------------------------------");
function showCheckInTime(name, time)
{
	console.log(`Hello ${name} you checked in at: ${time}`);
}

showCheckInTime("Mayalk", "10am");

// Example 4 
// time complexity O(1)
console.log("-------------------------------");
function welcome(name, place)
{
	console.log("Hello " + name + ", Welcome to our " + place);
}

welcome("Riua", "App");

// Example 5  Sum of two number
//time complexity O(1)
console.log("-------------------------------");
function sum(a, b)
{
	const c = a + b;
	return c;
}

const sum1 = sum(1, 4);
console.log(sum1)

// Example 6 greatest two number
// time complexity O(1)
console.log("-------------------------------");
function greatest(a, b)
{
	return a > b ? a : b;  // return Math.max(a, b);
	// if(a > b) return a;
	// return b;
}

console.log(greatest(9, 3));

// Example 7 Minimum number
// time complexity O(1)
console.log("-------------------------------");
function samllest(a, b)
{
	return a > b ? b : a; // Math.min(a, b);
	// if(a > b) return b;
	// return a;
}

console.log(samllest(9, 3));

// Example 8 default parameter value
// time complexity O(1)
console.log("-------------------------------");
function sum2(a = 0, b = 0)
{
	return a + b;
}

console.log(sum2());
console.log(sum2(2, 3));

// Example 9 sum of three number
// time complexity O(1)
console.log("-------------------------------");
function sumOfThree(a = 0, b = 0, c = 0)
{
	return a + b + c;
}

console.log(sumOfThree(2,3));
console.log(sumOfThree(2,3,5));

// Example 10 Book submitting in Library
// time complexity O(1)
console.log("-------------------------------");
function library(issuedDate = 0)
{
	const daysOfIssuance = calculateDays(issuedDate);
    if (daysOfIssuance <= 10) return 0;
	return (daysOfIssuance - 10) * 3;
}
function calculateDays(issuedDate)
{
	return 25 - issuedDate;
}

console.log("Total Fine: " + library(22));

// Example 11 Handal the multiple parameters
// rest operator - combines all the values inside it and makes an array
// always comes at position in function params
// time complexity O(n)
console.log("-------------------------------");
function sumN(a, b, ...c) // rest operator
{
	console.log(a,b,c);
}
sumN(1, 2, 3, 4);