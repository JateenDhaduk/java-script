// Immedialety Invoked Function Expressions

// function chai(){
//   console.log('DB_connected');
// } 
// chai()

(function chai(){
  // named IIFE
  console.log('DB_connected');
})();

// to reduce goble pollution variable 

( () => {
  console.log('Db connected');
})();

( (name) => {
  console.log(`welcome ${name}`)
})('jateen')