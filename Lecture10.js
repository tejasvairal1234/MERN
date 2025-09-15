// prime Number
// time complexity - O(2)
console.log("Check The Prime or Not");
let n = 4;
let sqrt = Math.pow(n, 0.5); // Math.sqrt(n); 
let isPrime = true;
for(let i = 2; i <= Math.floor(sqrt); i++) // for(let i = 2; i * i <= Math.floor(n / 2); i++)
{
	if(n % i == 0) isPrime = false;
}
console.log((isPrime && n != 1)? "Prime" : "Non Prime" , n); 

//or
let isprime = true;
for(let i = 2; i * i <= n; i++)
{
	if(n % i == 0) isprime = false;
}
console.log((isprime && n != 1)? "Prime" : "Non Prime" , n);

// SCOPE
//scope - where a variable is accessible
//global scope - accessible everywhere
//local scope - accessible only inside a function
// let and const are block scoped
// var is function scoped
// global variable declared out of any function and 

console.log("-------------------------------");
let letVariable; // global scope
dfg = 12; // globle variable -> not a good practice
console.log(dfg);
{
	var emptyBlock ='abcd'; // var is not block scoped, but function scoped
	console.log(emptyBlock);
}
console.log(emptyBlock);

{
	const emptyBlock = 'abd';
	{
		const emptyBlockChild = 'xyz';
		console.log(emptyBlockChild);
	}
}

console.log(varVariable); // undefined
var varVariable = 10; 

console.log("-------------------------------");
//Homework
// *****
//  ****
//   ***
//    **
//     *
console.log("Homework Pattern");
let n1 = 5;
for(let i = 0; i < n1; i++)
{
	let s = '';
	for(let j = 0; j < i; j++)
	{
		s += ' ';
	}
	for(let k = n1; k > i; k--)
	{
		s += '*';
	}
	console.log(s);
}

// for(let i = 0; i < n1; i++)
	// console.log(' '.repeat(i)+'*'.repeat(n1-i));