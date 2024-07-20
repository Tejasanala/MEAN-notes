console.log("Hello Guys..");
// js is a interpreted language - compilation + execution
//line by line execution

//Hoisting
console.log(a); //not defined - error | undefined -value & datatype
var a = 10;

//the similar representation of above hoisting is shown as-floating ❌(This is myth)
var a;
console.log(a); //not defined - error | undefined -value & datatype
a = 10;
console.log(a);

//the execution process(just in time compilation)

//1.Phase - compilation(it only confirms the declarations)
// any stmt other than declaration is skipped.
console.log(a); //skipped
var a = 10; //declared
console.log(a); //skipped

//2. phase -Execution happens

//exection context remembers all the variables
console.log(a); //value undefined
a = 10; // value is stored
console.log(a); // returns 10

var price = 200; //coz var has function level scope

function getprice() {
  console.log(price);
  var price = 400;
  console.log(price);
}

getprice();

function getprice() {
  let price = 400;
  console.log(price);
}

getprice();

//TDZ - The let and const variables exist in the TDZ from the start of their enclosing scope until they are declare.
//the area where we cant access the let and const variables is called TDZ zone.

console.log(b);
let b = 10; //declared
console.log(b);

//Local declaration has more priority then the outside variable.

function func() {
  var a = "Geeks";
  if (true) {
    var a = "GeeksforGeeks"; // New value assigned
    console.log(a);
  }
  console.log(a);
}
func(); //gfg gfg
//the above logic has shadowing and scope.

function func() {
  var a = "Geeks";
  if (true) {
    let = "GeeksforGeeks"; // New value assigned
    console.log(a);
  }
  console.log(a);
}
func(); //gfg geeks

function sayhello() {
  return " teja";
}

console.log(typeof sayhello);

function sayhello() {
  return " teja";
}

console.log(typeof sayhello());

function sayhello() {
  return function () //anonymous function
  {
    console.log("Hello");
  };
}
var e = sayhello();
e();
sayhello()(); //without using any variable

// let a='er'

// function sp(){
//     let q='tgf'
//     function cod()
//     {
//         let r='hulk'
//         console.log(q)
//     }
// }
