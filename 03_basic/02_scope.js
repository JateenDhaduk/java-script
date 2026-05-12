var c = 300
let a = 100;
if(true){
  // this what called scope
  let a = 10
  const b = 20
  var c = 30
  console.log("inner", a);
  // outside this scope is called goble scope
}
// scope you check on browser and scope in node are diffrent 
console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = 'jateen'

    function two(){
      const website = 'youtube'
      console.log(username);
    }
    // console.log(website);
    two()
}
//one()

if(true){
  const username ='jateen'
  if(username == 'jateen'){
    const website = ' youtube'
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num){
  return num + 1 
}
console.log(addTwo(5));

const addTwo = function(num){
  return num + 2 
}