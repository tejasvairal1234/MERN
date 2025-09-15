// Example 1 average of three number
// time complexity O(1)
console.log("Avarage of three number");
function avgOfThree(a = 0, b = 0, c = 0)
{
	return (a + b + c) / 3;
}

console.log(avgOfThree(2, 5, 7));

// Example 2 factorial of a number
// time complexity O(n)
console.log("-------------------------------");
console.log("Factorial of a number");
function fact(n = 0)
{
	let multi = 1;
	for(let i = 1; i <= n; i++)
	{
		multi *= n - i + 1;
	}
	return multi;
}

console.log(fact(5));

// Example 3 nCr
// time complexity O(n)
console.log("-------------------------------");
console.log("nCr");
function facto(n = 0)
{
	let multi = 1;
	for(let i = 1; i <= n; i++)
	{
		multi *= n - i + 1;
	}
	return multi;
}

function nCrFunc(n1 = 0, r = 0)
{
	return facto(n1) / (facto(n1 - r) * facto(r));
}
let nCr = nCrFunc(3, 2);
console.log({nCr});

// Example 4 Vote eligibility
// time complexity O(1)
console.log("-------------------------------");
console.log("Vote eligibility");
function canVote(userAge, userName)
{
	if(userAge >= 18) console.log(userName + "is allow  to vote");
    else console.log(userName + "is not allow to vote");	
}

canVote(18, 'Ram');

console.log("-----------------------------------");
console.log("---------------ARRAY---------------");
console.log("-----------------------------------");
console
// ARRAY
// collection of similar data type
// in JS array can store multiple data type
// in js array is considered as object
// in js array is dynamic in size
// in js array can store object also
// index - position of element in array
// index always start from 0
// length - size of array
// Theory of Arrays in JavaScript (concise reference + examples)

console.log("---------------Theroy---------------");
// 1. What is an Array?
// - Ordered collection of elements accessible by numeric indices starting at 0.
// - In JS, arrays are objects with special behavior and array-specific methods.
// - Elements can be any type (numbers, strings, objects, functions, other arrays).

// 2. Creation
const a1 = [];                   // literal (recommended)
const a2 = new Array(3);         // creates length 3 with empty slots
const a3 = Array.of(1, 2, 3);    // creates array from arguments
const a4 = Array.from('abc');    // creates ['a','b','c'] from iterable

console.log({a1, a2, a3, a4});

// 3. Access & length
const arr = [10, 20, 30];
console.log(arr[0]);     // 10
console.log(arr.length); // 3

// 4. Common mutating operations (change the array)
arr.length       // find the length of array
arr.push(40);    // add at end (amortized O(1))
arr.pop();       // remove from end (O(1))
arr.unshift(5);  // add at front (O(n))
arr.shift();     // remove from front (O(n))
arr.splice(1, 1, 99); // remove/insert around index (O(n))
console.log(arr);

// 5. Non-mutating operations (return new array or value)
const slice = arr.slice(0, 2);      // shallow copy of a portion
const concat = arr.concat([7, 8]);  // join arrays
const joined = arr.join(',');       // '10,20,30'
console.log({slice, concat, joined});

// 6. Searching & testing
arr.indexOf(20);    // first index or -1
arr.includes(20);   // true/false
arr.find(x => x > 15);      // first element satisfying predicate
arr.findIndex(x => x > 15); // index of that element

// 7. Iteration
for (let i = 0; i < arr.length; i++) { /* index-based */ }
for (const v of arr) { /* value-based, ignores empty slots */ }
arr.forEach((v, i) => { /* callback for each element */ });

// 8. Functional transformations (non-mutating)
const doubled = arr.map(x => x * 2);        // transform each element
const evens = arr.filter(x => x % 2 === 0); // keep matching elements
const sum = arr.reduce((acc, x) => acc + x, 0); // aggregate to a value
console.log({doubled, evens, sum});

// 9. Sorting & reversing
const s = [3, 1, 20, 4];
s.sort((a, b) => a - b); // in-place numeric sort
s.reverse();             // in-place reverse

// 10. Multidimensional arrays
const matrix = [
	[1, 2],
	[3, 4]
];
console.log(matrix[1][0]); // 3

// 11. Shallow copy vs reference
const original = [{ id: 1 }];
const copyShallow = original.slice(); // or [...original], Array.from(original)
// copyShallow is a new array but items are same object references
copyShallow[0].id = 99;
console.log(original[0].id); // 99 (same object)

// 12. Useful utilities
Array.isArray([]);           // true
[1,2,3].flat(1);             // flatten 1 level
[1,2,3].flatMap(x => [x, x*2]); // map then flatten one level
const cloned = [...arr];     // shallow clone

// 13. Complexity notes (common cases)
// - Access by index: O(1)
// - Push/Pop at end: O(1) amortized
// - Insert/Delete at front or middle: O(n)
// - Map/Filter/Reduce over n items: O(n)

// 14. Best practices
// - Use literals [] for creation.
// - Prefer non-mutating methods (map/filter/concat) when avoiding side effects.
// - Use Array.isArray to detect arrays (typeof returns 'object').
// - Be aware arrays are objects, and elements are references for objects.
console.log("---------------END---------------");

// A collection of similar types of data that can be managed acessed using one variable only
// index ->  1  2  3  4  5  6
//     a = [ 1, 2, 3, 4, 7, 9];


// Example 5 simple array creation and accessing elements
// time complexity O(5)
let name = ['name1', 'name2', 'name3', 'name4', 'name5'];

let l = name.length;
for(let i = 0; i < l; i++)
{
	console.log(name[i]);
}

// Example 6 sum of array elements
// time complexity O(9)
console.log("-------------------------------");
console.log("Sum of array elements");
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum1 = sumOfArray(arr1)
console.log(sum1);

function sumOfArray(arr1)
{
	let l2 = arr.length;
	let sum2 = 0;
	for(let i = 0; i < l2; i++)
		sum2 += arr[i];
	return sum2;
}

// Example 7  absulute of sum of odd and even numbers in array
// time complexity O(9)
console.log("-------------------------------");
console.log("absulute of sum of odd and even numbers in array");
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumOfEvenAndOddAbs(arr2);

function sumOfEvenAndOddAbs(arr2)
{
	let l3 = arr2.length;
	let sumOfEven = 0;
	let sumOfOdd = 0;
	for(let i = 0; i < l3; i++)
	{
		if(arr2[i] % 2 == 0) sumOfEven += arr2[i];
		else sumOfOdd += arr2[i];
	}
	console.log(Math.abs(sumOfOdd - sumOfEven));
}

console.log("-------------------------------");
// Example 8
// You're gives an array write a function whic print in below manner 
// - if there's a multiple of 3, print Fizz
// - if there's a multiple of 5, print Buzz
// - if ther's a multiple of 3 & 5, print FizzBuzz

let arr3 = [5, 3, 15, 10, 9, 25, 30];

check(arr3);

function check(arr3)
{
	let l4 = arr3.length;
	for(let i = 0; i < l4; i++)
	{
		if(arr3[i] % 3 == 0 && arr3[i] % 5 == 0) console.log('FizzBuzz');
		else if(arr3[i] % 5 == 0) console.log('Buzz');
		else if(arr3[i] % 3 == 0) console.log('Fizz');
	}
}

console.log("-------------------------------");
console.log("Use the Array function & Method");
let arr4 = ['Ram', 'Rahul', 'Rajat', 'Rahu'];
console.log(arr4);

arr4[0] = 'Laximan';
console.log('Add Laximan at 0 index:',arr4);


console.log('insert at last position:', arr4.push('Mahesh'));
console.log(arr4);

console.log("Insert at first position", arr4.unshift('Abhi'));
console.log(arr4);

console.log("Delete last element:", arr4.pop());
console.log(arr4);

console.log("delete the first element",arr4.shift());
console.log(arr4);

console.log("'Rajat' is presernt in array:", arr4.includes('Rajat'));
console.log("give the Index of element 'Rajat':",arr4.indexOf('Rajat'));
