const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]

const abc = transactions
  .filter((transaction) => {
    return (
      transaction.amount >= 5000 &&
      transaction.category == "Business" &&
      transaction.date.startsWith("2023")
    );
  })
  .map((transaction) => {
    return `Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date}`;
  });

console.log(abc);

// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

// This should output: "Eva, Bob, Charlie"

const result = students
  .sort((a, b) => b.score - a.score)
  .map((student) => student.name)
  .slice(0, 3)
  .join(", ");
console.log(result);

//   Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments,
// each with an array of employees.
// Data:
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];
// Expected Output:
[{ Engineering: 170000 }, { Marketing: 125000 }];

//const res=departments.map((department)=>department.salary)

// Grade is 80 or more - promote

const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

console.log(employees);
const r = employees.filter((employee) => employee.grade >= 80);
console.log(r.map((employee) => ({ ...employee, status: "promoted" })));

const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];

//Output
//'David, Eva','bob'

const v = players
  .filter((player) =>
    requiredSkills.every((skill) => player.skills.includes(skill))
  )
  .map((player) => player.name);
console.log(v);

//concept of optional chaining and nullish

const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  place: {
    //   city: "Chennai",
  },
};

// defensive code
if (person1.place && person1.place.city) {
  console.log(person1.place.city);
} else {
  console.log("unknown");
}

// to slove above -- optional chaining

console.log(person1?.place?.city); // not defensive code

console.log(person1?.place?.city || "unknown"); //  checks all the falsy values , ut if we don't want to consider all those
console.log(person1?.place?.city ?? "unknown"); // nullish coaliation consoders only null/undefined

// Object short hand
// if the key name and var names are tren only the key can be shortend

// Ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

// defensive code
if (person1.place && person1.place.city) {
  console.log(person1.place.city);
} else {
  console.log("unknown");
}

// to solve above -- optional chaining

console.log(person1?.place?.city); // not defensive code

console.log(person1?.place?.city ?? "unknown"); //  checks all the falsy values ,but if we don't want to consider all those
console.log(person1?.place?.city ?? "unknown"); // nullish coaliation consoders only null/undefined

// Object short hand
// if the key name and var names are tren only the key can be shortend

// Ex1

var persons = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

// function getPersonInfo(person1) {
//   const {
//     name: { first: firstName, last: lastName },
//     age: personAge,
//     favoriteColors: [primaryColor, secondaryColor],
//   } = person1;
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }

// console.log(getPersonInfo(person1));
// // more
// function getPersonInfo({
//   name: { first: firstName, last: lastName },
//   age: personAge,
//   favoriteColors: [primaryColor, secondaryColor],
// }) {
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }
// adding arroe function  (n) => n + 1
//sol:
const person2 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo(p) {
  const {
    age: personAge,
    name: { first: firstName, last: lastName },
  } = p;

  const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person2));

//2
function getPersonInfo1(p) {
  const {
    age: personAge,
    name: { first: firstName, last: lastName },
    favoriteColors: [primaryColor, secondaryColor],
  } = p;

  //const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo1(person2));

//3
function getPersonInfo2({
  age: personAge,
  name: { first: firstName, last: lastName },
  favoriteColors: [primaryColor, secondaryColor],
}) {
  //const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}
console.log(getPersonInfo2(person2));

//4
const getPersonInfo3 = ({
  age: personAge,
  name: { first: firstName, last: lastName },
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;

console.log(getPersonInfo3(person2));

//task-2

function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getSummary: function () {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);

//1
function createBook1(title, author, year) {
  return {
    title,
    author,
    year,
    getSummary() {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book1 = createBook1("1984", "George Orwell", 1949);
console.log(book1.getSummary(), book1);
//2
const createBook2 = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book2 = createBook2("1984", "George Orwell", 1949);
console.log(book2.getSummary(), book2);
//3
const createBook3 = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book3 = createBook2("1984", "George Orwell", 1949);
console.log(book3.getSummary(), book3);
/////////////////
//task=3
// Ex3:
const users = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user?.profile?.age ?? "unknown";
  const city = user?.profile?.address?.city ?? "unknown";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

displayUserProfile(1); // Should work
displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// Ex 4
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 4.1: Determine if all books in the library have been borrowed.
const q = library.every((lib) => lib.borrowed == true);
if (q) {
  console.log("Yes, all books are borrowed");
} else {
  console.log("not all books are borrowed");
}

// console.log(library?.borrowed ||"Yes, all books are borrowed")

// Output
// "Yes, all books are borrowed"

// Task 4.2: Determine if there are books in the library written by multiple authors

console.log(library?.authors || "No, there are no multiple authors");
// Output
// "No, there are no multiple authors"

//to have the highest value using reduce.
const arr5 = [1, 7, 3, 10, 5];
const max1 = arr5.reduce((acc, curr) => {
  //return acc > curr ? acc : curr;
  return Math.max(acc, curr);
});
console.log(max1);

const arr6 = [1, 7, 3, 10, 5];
const max2 = arr5.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(max2);

//   how many times map,filter can be done.
//   how long i can continue the pattern
//   because
//   they both always returns an array, this is called chaining.
//   join doesnot return array, it returns string, so it stops chaining.
//   it should always return array
