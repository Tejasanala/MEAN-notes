/*let codeWord = "Hulk";
 
function spaceShip(){
    let question = "Please provide the code word"
 
    function codeWordCheck(){
        let password = "Hulk";
        console.log(question)
        if(password === codeWord){
            console.log("Welcome," + password + " the strongest avenger")
        }else{
            console.log("Access denied")
        }
    }
    codeWordCheck();
}
spaceShip();



//map reduce filter (mrf)

Push ()

const arj=[1,2,3,4,5]
arj.push(9)
console.log(arj)//[1,2,3,4,5,9]

mangoes[0]=8 //no error ✅

mangoes=[6,9]//It raises error❌ coz it changes the address

reverse () //it modifies the orginal list

//this type of modification is called mutates or mutability
//immutability guarantees the value.


//copy by value and copy by reference

var y=[1,6,7,3,4,9]
console.log(y)
var x=[...y]
x.reverse()
console.log(x)//copy by value where y doesnt effect . 
//to avoid mutability we need to use a concept of copy by value or we need to use the methods which defaultly creats a copy.

var t=y
t.reverse()
console.log(t)//copy by reference where the orginal array will be modified
console.log(y)// The orginal array is also modified

//create a table with a list of mutable and immutable methods

mutable -

immutable - slice ,

join,slice,split,map,reverse
//join
arr=[1,2,3,4,5,6]

console.log(arr.join('-'))//1-2-3-4-5-6


//when we split a string it will return a string.
'3-4-5-6-7'.split('-')//it is a string method o/p:[ '3', '4', '5', '6', '7' ]


//maps
const c=[5,6,7,8,9]

for ( var e=1;e<c.length;e++)
{
    console.log(c.map(c => c*e))
}

console.log(c)

[5,6,9,10].map((chiku)=>chiku*2)
//The function goes to the item and applies the argument
 var w = [2, 4, 6, 8, 10];
const chikuu = (chiku) => chiku * 2;
let n = [2, 4, 6, 8, 10].map(chikuu);

console.log(w);
console.log(n);
//easy syntax for understanding


let arr = [5, 6, 9, 10];
var arr2 = [];

function Ownmap(fn, arr) {
  for (let i of arr) {
    arr2.push(fn(i));
  }
  console.log(arr2);
  console.log(arr);
}

Ownmap((chiku) => chiku * 2, arr);


let v = [5, 6, 9, 10].map((x, i) => x * 2 + i); //0,1,2,3

console.log(v);

var v = [5, 6, 9, 10];
function Ownmap(fn, arr) {
  var arr2 = [];
  for (let i in arr) {
    arr2.push(fn(arr[i], +i)); //this (+i) is for integer convertion
  }
  return arr2;
}
console.log(Ownmap((x, i) => x * 2 + i, v));

const avengers = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];

console.log(avengers.map((chiku) => chiku.length));

const avengers = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];
const w = avengers.filter((chiku) => chiku.length >= 10);
console.log(w);



const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Rating 4.7 or more

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]

console.log(
  books.filter((chiku) => chiku.rating >= 4.7).map((chikuu) => chikuu.title)
);
//var q = books.filter((rating) => rating >= 4.7);
//console.log(q);
*/
