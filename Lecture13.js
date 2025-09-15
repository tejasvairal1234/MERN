console.log("----------- Slice Method ------------------");
//Slice is give the sub array from given array
//syntact: array_name.slice(start_index, end_index(not include))
// if start_index is not given then it is consider as 0
// if end_index is not given then it is consider as array.length
// if both are not given then it return the same array
let arr = [2, 10, 6, 4, 9];
console.log(arr);

console.log(arr.slice(1, 4));
console.log(arr.slice(1));
console.log(arr.slice());

console.log("----------- Splice Method ------------------");
// Splice is used to add or remove elements in an array
// syntact: array_name.splice(start_index, number_of_elements_to_be_removed, element1, element2, ...)
// if number_of_elements_to_be_removed is 0 then it will only add the elements at start_index
// if number_of_elements_to_be_removed is not given then it will remove all elements from start_index to end of array
// if both are not given then it will remove all elements from start_index to end of array
// it will return the removed elements in an array
console.log(arr.splice(1, 3));
console.log(arr);

console.log("----------- Concat Method ------------------");
// concat is used to merge two or more arrays
// syntact: array_name1.concat(array_name2, array_name3, ...)
// it will return a new array which is the merger of all the arrays
let arr1 = [-3, -4, -10, -8];
console.log(arr.concat(arr1));
console.log(arr);

// Loop in Array
console.log("----------- Loop in Array ------------------");
console.log("1>For in Loop");
// for in loop is used to iterate over the indexs of an array
// syntact: for(let index in array_name)
// it will give the index of the array elements
let arr3 = [5, 25, 7, 9, 7, 3];
for(let ind in arr3)
{
    console.log(arr3[ind]);
    // console.log(ind);
}  
    

console.log("2>For of Loop");
// for of loop is used to iterate over the values of an array
// syntact: for(let value of array_name)
// it will give the values of the array elements
for(let value of arr3)
    console.log(value);

// Example 1 function which prints the prefix sum of an array
console.log("-----------------------------");
console.log("Prefix Sum");
function prefixSum(arr3)
{
	// let sum = 0;
	// for(let  i in arr3)
	// {
		// sum += arr3[i];
		// console.log(`Sum of prefix ending of ${i} is ${sum}`);
	// }
	
	let prefixArr = [];
	prefixArr[0] = arr3[0];
	
	for(let i = 1; i < arr3.length; i++)
	{
		prefixArr[i] = prefixArr[i - 1] + arr3[i];
	}
	return prefixArr;
}
console.log(prefixSum(arr3));

// Example 2  Swapping of two numbers
console.log("-----------------------------");
console.log("Swapping of two numbers");
let a = 5; b = 6;
function swap(a,b)
{
	let temp = a;
	a = b;
	b = temp;
	console.log({a,b});
}
console.log({a,b});
swap(a,b);

// Example 3  Swapping two values of an array
console.log("-----------------------------");
console.log("Swapping two values of an array indexs 1, 4");
let arr4 = [1, 2, 3, 4, 5];
function swapElement(arr4, i1, i2)
{
	let temp = arr4[i1];
	arr4[i1] = arr4[i2];
	arr4[i2] = temp;
	return arr4;
}
console.log(swapElement(arr4, 1, 4));

// Example 4  print odd indexed elements of an array
console.log("-----------------------------");
console.log("print odd indexed elements of an array");
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
function oddIndexElement(arr5)
{
	for(let i = 0; i < arr5.length; i++)
	{
		if(i % 2 == 1) console.log(arr5[i]);
	}
}

oddIndexElement(arr5);
		

// Example 5 Swapping alterantive numbers in array
console.log("-----------------------------");
console.log("Swapping alterantive numbers in array");
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];
function alternativeSwap(arr7)
{
	for(let i = 0; i < arr7.length; i += 2)
	{
		let temp = arr7[i];
		arr7[i] = arr7[i+1];
		arr7[i+1] = temp;
	}
	return arr7;
}

console.log('array' + arr7.join(" "));
console.log(alternativeSwap(arr7));

// Heterogeneous array
console.log("-------------- Heterogeneous array ------------------");
// Heterogeneous array is an array which contains different types of data
// like number, string, boolean, object, array, null, undefined etc
// In js we can create heterogeneous array
// accessing object and sub array elements
// array_name[index][subarray_index] -> to access sub array element
// array_name[index].key -> to access object value using key
let arr8 = [1, "hello", 3.5, true, 'c', null, undefined, [1,2,'printme'], {name: "abc", age: 20}];
for(let v of arr8)
	console.log(v);
console.log("sub array element at position 2:", arr8[7][2]);
console.log("object value access key is name:", arr8[8].name);

// Example 6  print sub array
console.log("-----------------------------");
console.log("sub array print");
let arr9 = [1, 2, 3, 4, 5, 6];
function subArray(arr9)
{
	for(let i = 0; i < arr9.length; i++)
	{
		let temp = [];
		temp[0] = arr9[i];
		console.log(temp);
		for(let j = i+1; j < arr9.length; j++)
		{
			temp.push(arr9[j])
			console.log(temp);
		}
	}
}

subArray(arr9);