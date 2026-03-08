// Palindrome Checker

// function to check palindrome
function isPalindrome(word) {

    // convert word to lowercase for fair comparison
    word = word.toLowerCase();

    // reverse the word
    let reversed = word.split("").reverse().join("");

    // compare original and reversed
    if (word === reversed) {
        return "It is a palindrome!";
    } else {
        return "Not a palindrome.";
    }
}

// test examples
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));