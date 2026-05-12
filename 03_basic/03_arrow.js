const user = {
  username:'jateen',
  price:697,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
  }
}

// user.welcomeMessage()
user.username = 'sam'
user.welcomeMessage()

console.log(this);

// in node envirement this refere to empty peranthisis { }

// in broweser goble object is window object 

function chai(){
  // console.log(this);
  let username = 'jateen'
  console.log(this.username);
  // inside the function you can not use this keyword as you use inside object 
}
chai()

const chai1 = ()=>{
    let username  = 'jateen'
    console.log(this.username);
}
chai1()
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,4));

const myArr = [2,3,4,5,6,7]

// myArr.forEach(() => {})