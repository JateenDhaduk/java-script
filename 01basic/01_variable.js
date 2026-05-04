const accountId = 1234567890;
let email = "jateendhaduk@example.com";
var accountPassword = "mySecurePassword123";
accountCity = "surat";// not to be used without declaration, it will create a global variable which is not recommended
// accountId = 12344; this is not allowed because accountId is a constant variable
let accoutState; // output will be undefined because it is declared but not initialized
email ="jateendhaduk2@example.com";
accountPassword = "myNewSecurePassword456";
accountCity = "mumbai";
console.table([accountId, email, accountPassword, accountCity, accoutState]);

/*
In JavaScript, there are three ways to declare variables: using `var`, `let`, and `const`.
perfer not to use `var` because it has function scope and can lead to unexpected behavior.
*/