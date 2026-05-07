// Array 
const myHeros = ["ironman",'spiderman','batman']
const myNum = new Array(1,2,4,3,5)
const myArray = [1,2,3,4,5]
// js array are resizeable
// you can not access using arbitray strings as index

// console.log(myArray[0]);
// not like console.log(myArray["one"])

// shallow copy copy share same reference means change in copy also change in original object
// deep copy means diffrent reference

// methods 

// myArray.push(6) // add value in array
// myArray.push(7)
// myArray.pop() // remove last value inside array

 // myArray.unshift(9) // add element to start not recomend to use when array consite large number of element
 //myArray.shift() // remove last element from array
// console.log( typeof myArray);
// const newArr = myArray.join() // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(typeof newArr);
// console.log(myArray.indexOf(3));

// slice , splice 

console.log("A" , myArray);

const myArr1 = myArray.slice(1,3);
console.log("B",myArray);
console.log(myArr1);

const myArr2 = myArray.splice(1,3);
console.log("c" , myArray);
console.log(myArr2);





