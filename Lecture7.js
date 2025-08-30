const dslr = 4 + "34" * " " / 5; // if empty space then consider as 0
// 4 + 0 / 5  
// 4
console.log(dslr);

let n1 = "suresh";
let n2 = "Ramesh";
let m1 = 40;
let m2 = 50;
// let n , m;
console.log(m1 > m2 ? n1: n2," has scored hight", m1 > m2 ? m1 : m2 ); 
// if(m1 > m2)
// {
	// n = n1;
	// m = m1;
// }
// else{
	// n = n2;
	// m = m2;
// }
// console.log(n,"has scored hight", m);

// n = n1;
// m = m1;
// if(m2 > m1)
// {
	// n = n2;
	// m = m2;
// }
// console.log(n,"has scored hight",m);

// ===Ternary operator===
//syntax
// variable = (condition)? value1:value2 -> return value1 if condition is true otherwise value2
// console.log(condition? statment1:statment2);
// condition is true print statment1 otherwise print statment2
//example 1 even or odd
// let num1 = 101;
//method 2
//n % 2 == 0? console.log("Even"): console.log("Odd");
//method 2
// let a = n % 2? "Even" : "Odd";
// console.log(num1,"is", a);
//method 3
//console.log(n % 2 == 0? "Even": "Odd");

//example 3  positive or NEGATIVE_INFINITY
let num2 = -33;
console.log(num2,num2 > 0 ? "is Positive" : "is Negative");

//nested ternary operator same as if else if else
//example 4 check number is +ve , -ve or zero   
let num3 = 0;
console.log(num3 > 0 ? "Positive" : num3 < 0 ? "Negative" : "Zero");

//homework try all yesterday's question with ternary operator
//explor hoe to  write 

//example 5 greatst among the three numbers  
let num4 = 8, num5 = 5, num6 = 9;
//nested ternary operator
//console.log(num4 > num5? (num4 > num6? "num4 "+num4 : "num6 "+num6): (num5 > num6? "num5 "+num5 : "num6 "+num6));
let maxNum = (num4 <= num5 && num6 <= num5)? num5 : (num4 <= num6)?  num6:num4;
console.log(maxNum);

//example 6 week day
let num7 = "3";
// console.log(num7 == 1 ? "Monday" : num7 == 2 ? "Tuesday" : num7 == 3 ? "Wedesday" : num7 == 4 ? "Thuesday" : num7 == 5 ? "Friday" : num7 == 6? "Saturday" : num7 == 7 ? "Sundat" : "Not the invalid number");

//swich case:
//The switch statement executes a block of code depending on different cases.
//The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// The switch statement is a control statement that is used to perform different actions based on different conditions.
// The switch statement is used to select one of many code blocks to be executed.
// The switch statement is used to perform different actions based on different conditions.
// The switch statement is used to select one of many code blocks to be executed.
//syntax
/* switch(expression)
{
    case x:
        statment
        break;
    case y:
        statment
        break;
    ...
    default:
        statment
}
*/
//swich case same as if else if else
// switch(num7)
// {
    // case 1:
        // console.log("Monday");
        // break;
    // case 2:
        // console.log("Tuesday");
        // break;
    // case 3:
        // console.log("Wedesday");
        // break;
    // case 4:
        // console.log("Thuesday");
        // break;
    // case 5:
        // console.log("Friday");
        // break;
    // case 6:
        // console.log("Saturday");
        // break;
    // case 7:
        // console.log("Sunday");
        // break;
    // default:
        // console.log("Not the invalid number");
// }

//example 7 grading system
// let marks = 85;
//why give true in switch because switch check only value not the condition
// so give true in switch and check condition in case
// switch(true)
// {
    // case marks >= 90 && marks <= 100:
        // console.log("A+");
        // break;
    // case marks >= 80 && marks < 90:
        // console.log("A");
        // break;
    // case marks >= 70 && marks < 80:
        // console.log("B+");
        // break;
    // case marks >= 60 && marks < 70:
        // console.log("B");
        // break;
    // case marks >= 50 && marks < 60:
        // console.log("C");
        // break;
    // case marks >= 40 && marks < 50:
        // console.log("D");
        // break;
    // case marks >= 0 && marks < 40:
        // console.log("F");
        // break;
    // default:
        // console.log("Invalid Marks");
// }

//Homework
//example 1 even odd
let num8 = 2;
console.log(((num8 % 2) == 0? "Even" : "Odd"), num8);

//example 2 Vote or not
let age = 18;
console.log(age >= 18? "Vote" : "Not"); 

//example 3 half number is even or odd
console.log((num8 / 2) % 2 == 0? "Even" : "Odd"); 

//example 4 Lacky number
let lackyNo = 11;
console.log((lackyNo == 11 || lackyNo == 111)? "Winner" : "Loser");

//example 5 Login and subribstion
let user = false;
let prime = false;
console.log((user && prime)? "Prime User" : user ? "Update Prime" : "Sign Up");

//example 6 good and bad number
let num9 = 18;
console.log(num9 != 17? "Good" : "Bad");

//example 7 palindrom or not for three number
let num10 = 122;
console.log(((Math.floor(num10 / 100)) == (num10 % 10))? "Palindrom" : "Not");

//example 8 decimal or integer
let num11 = 1.5;
console.log((Math.floor(num11) == num11)? "Integer" : "Decimal");
console.log((num11 % 1 == 0)? "Integer" : "Decimal");

//example 9 big or small
let num12 = 14, num13 = 13;
console.log(num12 > num13? num12 : num13);