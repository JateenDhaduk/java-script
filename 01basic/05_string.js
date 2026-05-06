const name = 'jateen';// first way to define string 
const repoCount = 50;

// use string intercollison 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
let gameName = new String('jateen') // second way to define string using new keyword 
// string is object not array 

console.log(gameName.length());// give you length of string 
console.log(gameName.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.
console.log(gameName.charAt(4)); // Returns the character at the specified index.
console.log(gameName.indexOf("t")); // Returns the position of the first occurrence of a substring, or -1 if it is not present.

const newString = gameName.substring(0,3);
const anotherString = gameName.slice(-6,4);// allow negative value 

console.log(newString);
console.log(anotherString);

const stringOne = "jateen-ismy name and how are you";
console.log(stringOne);

console.log(stringOne.trim());//Removes the leading and trailing white space and line terminator characters from a string.

console.log(stringOne.split('-'));//Split a string into substrings using the specified separator and return them as an array.

console.log(stringOne.endsWith('are you'));//Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

console.log(stringOne.charCodeAt(2));//Returns the Unicode value of the character at the specified location.

console.log(stringOne.includes('jateen'));//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(stringOne.toWellFormed());//Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character 
console.log(stringOne.isWellFormed()); //Returns true if all leading surrogates and trailing surrogates appear paired and in order.



