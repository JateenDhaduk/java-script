// sigleton  

// object literals 

// Object.create

const sym = Symbol("key1")


const jsUser = {
  name:"jateen",
  fullName:"Dhaduk Jateen",
  [sym]:"myKey1",
  age:22,
  location:"surat",
  email:"jateen@google.com",
  isLoggedIn:false,
  lastLoginDays:["Monday" , "friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(typeof jsUser[sym]);

jsUser['email'] = "jateen@email.com"
// Object.freeze(jsUser)
jsUser['email'] = "jateen@hotmail.com"
console.log(jsUser);

jsUser.greeting = function(){
  console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting)
console.log(jsUser.greeting());



