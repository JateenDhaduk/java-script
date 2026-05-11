// this how to define function 
function sayMyName(){

}

sayMyName() // -> this how to excute the function 

sayMyName // -> this is function reference 

// function addTwoNum(num1,num2){
//    console.log(num1 + num2);
// }
function addTwoNum(num1,num2){
  let result  = num1 + num2
  return result // after return statemate nothing is going to excute inside function 
}
// when you create the function defination the value that are given to function are called parameter
addTwoNum(3,4) // value that are given to function during calling are called argument 

const value  = addTwoNum(3,6)
console.log(value);

function loginUserMessage(username){
  return `${username} just logged in`
}

console.log(loginUserMessage("")) // in function if no value is given tha function result will undefined

// you can define the default value to function 

/*
function loginUserMessage(username = jeel){
      return `${username} just logged in`
} 

if username is not given function will use the default value if username is given function will override the default value and use the given value
*/


// function calculateCartPrice(num1){
//   return num1
// }

// console.log(calculateCartPrice(2));


/* 
 let say you want to take multiple value inside the function given multiple parameter is not nest 
 like let say inside cart user can give you mulitple value but you dont know the frequency 
 use ... rest operater to take multiple value 
*/

function calculateCartPrice(...num1){
  return num1;
} // this will give array of multiple arument 

console.log(calculateCartPrice(2,4,5,3,6))
// output [ 2, 4, 5, 3, 6 ]

const user = {
  username: "jateen",
  price:199
}

function takeObject(anyObject){
  return `username is ${anyObject.username} and price is ${anyObject.price}`
}

//console.log(takeObject(user));

// you can give direct object to function 
console.log(takeObject({
  username: "jateen",
  price:199
}));

// you can do same for array also 

function handleArray(anyArray){
  return anyArray[1]
}

const arr = [1,2,3,4,5]

//console.log(handleArray(arr));

console.log(handleArray([1,2,3,4,5]));

