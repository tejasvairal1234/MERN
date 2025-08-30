//Loop
// loop is a programming construct that repeats a block of code while a specified condition is true.
// loop is used to execute a block of code repeatedly until a certain condition is met.
// loop is used to iterate over a block of code a specified number of times or until a certain condition is met.
// loop is used to perform a task multiple times without having to write the same code multiple times
// loop is used to automate repetitive tasks and reduce the amount of code needed to perform a task
// Types of loop
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop
// 6. foreach loop
// 7. nested loop

//write the "Hi" multiple time
console.log("Hi!");
console.log("Hi!");
console.log("Hi!");
console.log("Hi!");
console.log("Hi!");

/* Issues in repeating code
 - too much for developer
 - chances of error
 - unable to count the number of repetition
 - too much work to update "Hi" to "Hii"
*/

//WHILE LOOP
// The while loop is used to repeat a block of code as long as a specified condition is true.
//syntax
// while(condition)
// {
    //statment 
// }

//example 1 -  print "HI" upto 10 times
//O(10) - time complexity
console.log("----------------While Loop------------------");
console.log("print 'HI' upto 10 times");
let count = 10;
while(count > 0)
{
	console.log("HI!");
	count--;
}

//example 2 - print  1 to 10
//O(10) - time complexity
console.log("-------------------------------------");
console.log("print  1 to 10");
let count1 = 1;
while(count1 <= 10)
{
	console.log(count1);
	count1++;
}

//example 3 - even number
console.log("-------------------------------------");
console.log("even number up to 25");
 let count2 = 0;
//O(25) - time complexity
//  while(count2 < 25)
//  {
	//  if(count2 % 2 == 0)
	//  {
		//  console.log(count2);
	//  }
	//  count2++;
//  }
// or
//O(13) - time complexity
while(count2 <= 25)
{
    console.log(count2);
    count2 += 2;
}

//example 4 - print 10 to 1
//O(10) - time complexity
console.log("-------------------------------------");
console.log("print 10 to 1");
let count3 = 10;
while(count3 != 0)
{
	console.log(count3);
	count3--;
}

console.log("--------------for loop------------------");
// FOR LOOP
// The for loop is used to repeat a block of code a specified number of times.
//syntax
// for(initialization; condition; increment/decrement)
// {
    //statment
// }
// No require to declare the in for loop variable outside the for loop.
// The declared variable in for loop is local to the for loop only.
// 1> Initializes the value of variable
// 2> Check the consition is true
// 3> Execute the lines of code inside this for loop
// 4> Increments the value then go to 2nd step
//example 5 - print "Hi" 10 times
//O(10) - time complexity
console.log("print 'Hi' 10 times");
for(let i = 0; i < 10; i++)
{
	console.log("Hi!");
}

//example 6 - print 1 to 10
//O(10) - time complexity
console.log("-------------------------------------");
console.log("print 1 to 10");
for(let i = 0; i <= 10; i++)
{
	console.log(i);
}

//example 7 - multiple of 3 up to 50
//O(16) - time complexity
console.log("-------------------------------------");
console.log("multiple of 3 up to 50");
for(let i = 3; i < 50; i += 3)
	console.log(i);             // No curly braces {} are required to execute single statments

//example 8 - print the squares of each number up from 25 to 35
//O(16) - time complexity = [(start + end) - start]
console.log("-------------------------------------");
console.log("print the squares of each number up from 25 to 35");
let n = 35;
for(let i = 20; i <= n; i++) 
	console.log(i+" ** 2 = "+i ** 2); //or console.log(i+" ** 2 = "+Math.pow(i,2)); or console.log(i+" ** 2 = "+(i*i));

//example 9 - print the 5 table
//O(10) - time complexity
console.log("-------------------------------------");
console.log("print the 5 table");
let num = 5;
for(let i = 1; i <= 10; i++)
	console.log(num+ " * " +i +" = " +(num*i));

//example 10 - print the sum of first 100natural number
//O(101) - time complexity
console.log("-------------------------------------");
console.log("print the sum of first 100 natural number");
let sum = 0;
for(let i = 0; i <= 100; i++)
	sum += i;
console.log(sum);

//condition related extra things
console.log("-------------------------------------");
console.log("condition related extra things");
// && (AND) operator
// && - if first false value not check the next value store the false value
// && - if first true value check the next value store the next value
// || (OR) operator
// || - if first true value not check the next value store the true value
// || - if first false value check the next value store the next value
const c1 = false && 5; //c1 = false because false && anything = false
const c2 = c1 === false && 34; //c2 = true because c1 is false
const c3 = c2 && 65; //c3 = 65 because true && anything = anything
console.log({c1, c2, c3}); // print - { c1: false, c2: true, c3: 65 } : object shorthand notation