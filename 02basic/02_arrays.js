const marvel_heros = ['thor','spiderman','hulk']
const dc_heros = ['superman','batman','flash']

marvel_heros.push(dc_heros)
console.log(marvel_heros);
output [ 'thor', 'spiderman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// concat retuern new array 
// push method push value inside the array

const all_New_Hero = [...marvel_heros, ...dc_heros]
console.log(all_New_Hero);

const newArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = newArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("jateen"))
console.log(Array.from("jateen"))
console.log(Array.from({name:"jateen"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




