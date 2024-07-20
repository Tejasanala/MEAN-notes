const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]

const abc = transactions
  .filter((tran) => {
    return (
      tran.amount >= 5000 &&
      tran.category == "Business" &&
      tran.date.startsWith("2023")
    );
  })
  .map((transaction) => {
    return `Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date}`;
  });

console.log(abc);

const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

const cost = departments.map((department) => {
  const totalSalary = department.employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );
  return { [department.name]: totalSalary };
});
console.log(cost);

const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];

weatherData.sort((a, b) => b.temperature - a.temperature);

// Restructure the data into an object with dates as keys and temperatures as values
const weatherObject = weatherData.reduce((acc, current) => {
  acc[current.date] = current.temperature;
  return acc;
}, {});
//when we need to create an object from the aray of objects then we will use reduce.
console.log(weatherObject);

const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];

const filt = products.filter(
  (product) =>
    product.category === "Electronics" &&
    product.reviews > 50 &&
    product.rating >= 4.0
);
const averagePrice =
  filt.reduce((sum, product) => sum + product.price, 0) / filt.length;

console.log(averagePrice);

const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];

const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];

const mergedData = users.map((user) => {
  const userOrder = orders.find((order) => order.userId === user.userId);
  return {
    name: user.name,
    orderDetails: userOrder ? userOrder.orderDetails : "No Order Details",
  };
});

console.log(mergedData);

//Assessment 2

//TASK 1: CONSOLIDATING EVENT ATTENDEES
//Description: Given arrays of attendees for different events, create a single
//array of unique attendees (no duplicates) sorted alphabetically by name.
//Data:
const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

const alleventattendees = [
  ...event1Attendees,
  ...event2Attendees,
  ...event3Attendees,
];

function removeDuplicates(alleventattendees) {
  let unique = alleventattendees.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(alleventattendees));

//Task 3
const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

const v = books
  .filter((book) => book.year > 2000)
  .map((book) => `${book.title} by ${book.author}`);

console.log(v);

//Given an array of products, each with a list of stores and their
//inventory, find products that are available in all stores. A product is available
//in a store if its inventory is more than 0.
const product = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];

const s = product
  .filter((kinu) => kinu.stores.every((val) => val.inventory > 0))
  .map((a) => a.name);

console.log(s);

function curryMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const curryMultiply = (a) => (b) => (c) => a * b * c;

//imp part of currying we r returning a function inside a functioned.
// Using the curried function
console.log(curryMultiply(2)(3)(4)); // Output: 24

// Or using it step by step
const step1 = curryMultiply(2); // step1 is a function that expects 'b'
const step2 = step1(3); // step2 is a function that expects 'c'
const result = step2(4); // result will be 24

console.log(result); // O
