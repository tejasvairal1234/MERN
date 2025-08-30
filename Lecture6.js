// privority of arithmetic operations
//  () /-> ** (right to left) /-> *, /, % /-> +, - :(left to right)
let a = 3 * 4 + 30 / 6 * 5 ** 2;
// 12 + 5 * 25
// 12 + 125
// 137
console.log(a);
let b = 3 + 3 ** 4 / 3 ** 2 - 3 * 4 / 6;
// 3 + 81 / 9 - 3 * 4 / 6
// 3 + 9 - 12 / 6
// 3 + 9 - 2
// 10
console.log(b);
let c = ("123" + 1) * 2 ** 2 - 21 / 7;
//"1231" * 4 - 3
//4,924  - 3
//4921
console.log(c);

let d = "123" + 5 ** 5 / 25 ** 2 / 5
// "123" + 3,125 / 625 / 5
// "123" + 1
// "1231"
console.log(d);

// consition
// if - else if - else
//syntax
/* if(condition)
{
	statment
}
else if(condition)
{
	statment
}
else
{
	statment
}
*/
//if condition is true then statment will be executed otherwise not and it will check else if condition if it is true then statment will be executed otherwise else statment will be executed



let num = 4;
if( num % 2 == 0)
{
 console.log("Even");
}
else 
{
 console.log("Odd");
}
 
// Comparison operators
// operant is variable or constant
// == -> equal to ex- "123" == 123 (true)
// === -> equal value and equal type (chakes value and type both) ex- "123" === 123 (false)
// != -> not equal
// !== -> not equal value and not equal type (chakes value and type both)
// > -> greater than
// < -> less than
// >= -> greater than or equal to  
// <= -> less than or equal to

//ternary operator 
let age = 27;
console.log(age >= 18 ? "Vote" : "Not vote")

let num1 = 17;
if((num1/2) % 2  == 0)
{
	console.log("Even");
}
else
{
	console.log("odd");
}

let e = 12;
const f = "12";
let g = 12;
if(e == f) 
{
	console.log("cannot be used in for loop ");
}

if(e === f)
{
	console.log("cannot be used in for loop but diffrent type");
}

//logial operators
// && -> and
//    both consition should be true answer will be true
//    one consition is false answer will be false
//    both consition is false answer will be false
//    table
//    |A  | B  | A && B |
//    +---+----+--------+
//    |T  | T  |   T    |
//    |T  | F  |   F    |
//    |F  | T  |   F    |
//    |F  | F  |   F    |
// || -> or
//    both consition should be true answer will be true
//    one consition is true answer will be true
//    both consition is false answer will be false
//    table
//    |A  | B  | A || B |
//    +---+----+--------+
//    |T  | T  |   T    |
//    |T  | F  |   T    |
//    |F  | T  |   T    |
//    |F  | F  |   F    |
// ! -> not
//    true -> false
//    false -> true
//    table
//    | A | !A  |
//    +---+-----+
//    | T |  F  |
//    | F |  T  |

//example 1 check gread
let marks = 80;
if(marks > 80)
{
	console.log("Greade A");
}
else if(marks > 70 && marks <= 80)
{
	console.log("Greade B");
}
else if(marks >= 35 && marks <= 70)
{
    console.log("Greade C");	
}
else
{
	console.log("Fails");
}

//example 2
let age1 = 25;
let gender = "Male";
if(age1 >= 18 && gender === "Male") console.log("Mature Boy");
else if(age1 >= 18 && gender === "Female") console.log("Mature Girl");

//example 3
let lackyNo = 11;
if(lackyNo === 11 || lackyNo === 111)
{
	console.log("Winner");
}
else
{
	console.log("Loser");
}

//example 4  usre is prime or not
let user = true;
let prime = true;
if(user && prime )
{
	console.log("Primiure user");
}
else if(user || prime)
{
	if(user) console.log("Update in prime");
	else console.log("Sign Up");
}

//example 5 number is good or bad
let num2 = 17;
if(num2 != 17) cosole.log("Good Number");
else console.log("Bad Number");

// example 6 3 number is palindrom or not
let num3 = 123; 
// let num4 = num3;
// let num5 = 0;
// while(num3 != 0)
// {
	// num5 = (num5 * 10) + (num3 % 10);
	// num3 = Math.floor(num3 / 10);
// }
// console.log(num5 == num4? "Palindromw" : "Not");
if(Math.floor(num3 / 100) == num3 % 10) console.log("Palindromw");
else console.log("Not");

//exmaple 7 check number is decimal or integer
 let num4 = 11;
// if(Math.floor(num4) == num4) console.log("Int");
// else console.log("Decimal");

if(num4 % 1 == 0) console.log("Int");
else console.log("Decimal");

// exmaple 8 big or small number
let z = 10, y = 20;
// if(z > y) console.log(z);
// else console.log(y);

// let x = Math.max(z, y);
// console.log(x);
// let w = Math.min(z, y);
// console.log(w);

let x = z;
if(y > z)
{
	x = y;
}
console.log(x);