// primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol,
// bigInt

const score = 100 
const scoreValue = 100.3

const isLoggIn = false;
const outsideTemp = null 

const id = Symbol('123')
const anotherId = Symbol('123') // this is not same as id 


// Reference (Non primitive)

// array , Object , function 

const heros = ["ironman", "spiderman" , "hulk"]

let myObj = {
  name:"jateen",
  age:22
}

const myFunction = function(){
  console.log("hello world");
}

// function =>objectFunction 
// array => object 
// string => string 
// symbol => symbol
// object => object 
//null => object
// undefined => undefined
// number => number
// boolean => boolean


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(premitive) , heap(Non - primitive)
// stack give you copy of variable 
// heap give to direct reference to variable 

let myName = "jateen"

let anotherName = myName;
anotherName = "jeel"

console.log(anotherName);
console.log(myName);

let userOne = {
  email:"jateen@google.com"
}

let userTwo = userOne;

userTwo.email = "jeel@google.com"

console.log(userOne.email);
console.log(userTwo.email);



