//example 1 - factorial of a number
// O(n) - time complexity n=5 O(5)
console.log("Factorial of a number");
const n = 5;
let fact = 1;
for(let i = 0; i < n; i++)
{
	fact *= i + 1;
}
console.log({fact});

//example 2 - number is prime or not
// O(n) - time complexity n=15 O(15)
console.log("-------------------------------------");
console.log("number is prime or not");
const n1 = 15;
let c = true;
for(let i = 2; i < n1; i++)
{
	if(n1 % i == 0) 
	{
		c = false;
		break;
	}
}
console.log(n1 == 1? "Prime" : c ? "Prime" : "Not Prime");

// or
let divisorsCount = 0;
for(let i = 1; i <= n1; i++)
{
	if(n1 % i == 0) divisorsCount++;
}

let message = divisorsCount > 2 ? "Not Prime" : "Prime";
console.log(n1 + " is " + message);

//break and continue
// use break when you want to exit from the loop
// use continue when you want to skip the current iteration and continue with next iteration
//continue -  skip the further statements and direct jumps into updation part of loop

//example 3 - if number is divisible by 17 in 100 to 200 range print that number and exit
//O(100) - time complexity
console.log("------------------Break-------------------");
console.log("if number is divisible by 17 in 100 to 200 range print that number and exit");
for(let i = 100; i < 200; i++)
{
	if(i % 17 == 0) break;
	console.log(i);
}

//example 4 - skip the squares of numbwer divisible by 17 in 1 to 100 range
//O(100) - time complexity
console.log("------------------Continue-------------------");
console.log("skip the squares of numbwer divisible by 17 in 1 to 100 range");
for(let i = 1; i < 100; i++)
{
	if(i % 17 == 0) continue;
	console.log(i + " = " + i * i);
}

//example 5 - print the all odd numbers between 1 to 200 that are divsible by 5
//O(100) - time complexity
console.log("-------------------------------------");
console.log("print the all odd numbers between 1 to 200 that are divsible by 5");
for(let i = 1; i <= 200; i += 2)
{
	if(i % 5 != 0) continue;
	console.log(i);
}
	
//example 6 - print the first 10 odd numbers from 1 to 200 that are divisible by 5  
//O(200) - time complexity
console.log("-------------------------------------");
console.log("print the first 10 odd numbers from 1 to 200 that are divisible by 5 ");
let c1 = 0;
for(let i = 1; i <= 200; i++)
{
	if(i % 2 == 0 || i % 5 != 0) continue;
    c1++;
    console.log(i);
    if(c1 == 10) break;
}

//Nested Loops
//Loop inside a loop

//example 7 - print the 10 lines of * in 10 columns
//O(100) - time complexity
console.log("-------------------------------------");
console.log("print the 10 lines of * in 10 columns");   
for(let i = 0; i < 10; i++)
{
	let s = "";
	for(let j = 0; j < 10; j++)
	{
		s += "*";
	}
	console.log(s);
}

//example 8 - print the below pattern
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
//O(36) - time complexity
console.log("-------------------------------------");
console.log("print the below pattern");
for(let i = 1; i<= 6; i++)
{   
    let s1 ="";
	for(let j = 1; j <= 6; j++)
	{
		s1 += j + " ";
	}
	console.log(s1)
}
	

console.log("----------------Do While---------------------");
// do while
//it is similar to while loop
//not checking condition at first
//at least one time statment will be executed
//then checking condition
//if condition is true then again statment will be executed
//if condition is false then control will come out of loop
// first execute the statment  inside do block, then check the condition while, if this condition is true, the do block will be executed again, else it'll stop there.
// Note: even though the condition if false, the statments under do block, will execute once.
//syntax
// do
// {
    //statment
// }while(condition);
// example 9 
//O(1) - time complexity
console.log("print 'Hello' once even though the condition is false");
do {
    console.log("Hello, I'm do while loop");
}while(false);

//example 10 
console.log("-------------------------------------");
let response;
let responseCount = 0;
do {
    response = prompt("Do you want to continue? Count: " + responseCount);
    console.log({response});
    responseCount++;
}while(response == "yes" || response == "y" || response == "Y" || response == "YES");

//H.W - try to print the below pattern
// A. 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

console.log("------------------H.W-------------------");
console.log("A");
for(let i = 0; i < 6; i++)
{
	let s = '';
	for(let j = 1; j <= i+1; j++)
	{
		s += j + " ";
	}
	console.log(s);
}

// B.
//*****
//****
//***
//**
//*   
console.log("-------------------------------------");
console.log("B");
for(let i = 5; i > 0; i--)
{
	let s = '';
	for(let j = i; j > 0; j--)
	{
		s += "*";
	}
	console.log(s);
}