 const tinderUser = new Object() // sigalton user

console.log(tinderUser);

const regulerUser = {
  email:"somone@gmail.com",
  fullName: {
    userFullName:{
      firstName:"someOne",
      lastName:"dontKnow"
    }
  }
}

const obj1 = {1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}

const obj3 = Object.assign(obj1,obj2);

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(regulerUser.fullName.userFullName.firstName);


const user = [
  {
    Id:"1",
    email:"jateen@google.com"
  },
  {
    Id:"2",
    email:"jateen@email.com"
  },
  {

  },
  {

  }
]

console.log(user[1].Id);

// destructring 

const course = {
  courseName: "js in hindi",
  price: "999",
  conrseInstructor:"jateen"
}

const {conrseInstructor} = course

console.log(conrseInstructor);

