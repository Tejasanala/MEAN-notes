class Car {
  constructor(name, engine, doors, wheels) {
    //this.name -> member variable,instance variable
    this.name = name;
    this.engine = engine;
    this.doors = doors;
    this.wheels = wheels;
  }
  //(member function / instance method)

  sound() {
    return "Boomm Boommmmmm";
  }
}
//Blueprint of the object
const ferrari = new Car("Ferrari", "V8", 2, 4); //This is an object ,here this is pointing to ferrariand that is the job of 'this'
const BMW = new Car("BMW", "V7", 4, 4);
const Audi = new Car("Audi", "V6", 4, 4);
const Nissan = new Car("Nissan", "V5", 4, 4);

console.log(ferrari);
console.log(BMW);
console.log(Audi);
console.log(Nissan);

console.log(typeof Car); //Function : js people mostly supports the function . so, the outer rep is class but the whole inner functionality

console.log(ferrari.sound());

class Bank {
  transactions = [];
  static intrestrate = 0.03;
  static count = 0;
  #balance;
  constructor(name, accNo, IFSCCode, balance) {
    //this.name -> member variable,instance variable
    this.name = name;
    this.accNo = accNo;
    this.IFSCCode = IFSCCode;
    this.#balance = balance;
    Bank.count++;
  }
  displayBalance() {
    return (
      `Hello ${this.name} your balance is :` +
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(this.balance)
    );
  }
  withdraw(money) {
    if (money <= 0) {
      return "Invalid amount";
    }

    if (this.balance >= money) {
      this.balance -= money;
      this.transactions.push({
        id: this.transactions.length + 1,
        date: new Date(),
        type: "Withdrawal",
        money,
      });
    }
    return this.balance;
  }

  deposit(money) {
    if (money <= 0) {
      return " Invalid Amount";
    }
    this.balance += money;
    this.transactions.push({
      id: this.transactions.length + 1,
      date: Date.now(), //It gives in an ISO format
      type: "Deposit",
      money,
    });
  }

  Transaction() {
    return this.transactions;
  }

  applyIntrest() {
    return (this.balance =
      this.balance + this.balance * (Bank.intrestrate * 12));
  }

  static getaccounts() {
    return Bank.count;
  }
}

const teja = new Bank("Tejaswini", "1146011230502", "HDFC4563", 1_00_00);

const manu = new Bank("Manaswini", "1146011230503", "HDFC4563", 5_00_00);

const Aishwarya = new Bank("Aishwarya", "1146011230504", "HDFC4563", 1_00_000);

const Rishika = new Bank("Rishika", "1146011230505", "HDFC4563", 8_00_000);

//console.log(teja);
//To print the balance
//console.log(teja.balance);

//To display the balance in a format
console.log(teja.displayBalance());

console.log(teja.withdraw(5_00));
console.log(teja.deposit(1_00));

//console.log(manu.displayBalance());

//console.log(manu.withdraw(4_99_99));

console.log(teja.Transaction());

console.log(Bank.intrestrate);

console.log(teja.applyIntrest());

console.log("The total number of accounts in this bank :" + Bank.getaccounts());
//console.log(Aishwarya);
//console.log(Rishika);

//In js the private access specifier is mentioned as #
// By using # we cant read  or write the values outside the class.

//Encapsulation - member variables and methods -> Data + Logic & Access.
/*
class NewBank extends Bank {
constructor(name, accNo, IFSCCode, balance, type)
{
  super(name, accNo, IFSCCode, balance);
  this.type = type;
}

applyIntrest();
{
  return 
}

if (type =="Savings")
   {
    return 
}
}
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return "Some sound";
  }
}
class dog extends Animal {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }
  speak() {
    return "uFFFF!!!";
  }

  run() {
    return `🕷${this.name} Wags the tail 🕷`;
  }

  SpeedBonus() {
    return `Running in ${this.speed * 2} Km\Hr `;
  }
}

const toby = new Animal("toby");
const jimmy = new dog("Jimmy 🐶", 20);

console.log(jimmy.speak());
console.log(toby.speak());
//console.log(toby.run()); error
console.log(jimmy.run());
console.log(jimmy.SpeedBonus());
*/
