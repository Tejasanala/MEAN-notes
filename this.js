const student = {
  firstname: "rishika",
  lastname: "sairi",
};

const student1 = {
  firstname: "neha",
  lastname: "reddy",
  fullname: student.fullname,
};

function fullname(value) {
  return `${this.lastname},${this.firstname}  and ${value}`;
}
//call
console.log(fullname.call(student, "sai"));
//apply

//bind will return a new function
//with bind we say this keyword is always pointing to function name (student3)

const student2 = {
  firstname: "rishika",
  lastname: "sairi",
  fullname: () => {
    return `${lastname},${firstname}`;
  },
};
window.firstname = "Teja";
window.lastname = "sanala";

console.log(student2.fullname());
//Arrow functions doesnt have bindings with this,methods.These doesnt give the global object.

//arrow functions doesnt take the context. Without context this cant work.

const fullname3 = () => {
  return `${this.lastname},${this.firstname}`;
};

const student5 = {
  firstnameName: "Manu",
  lastName: "Pothu",
};

console.log(fullname3.call(student5));

console.log(fullname3.apply(student5));

const luffy = {
  name: "Monkey D. Luffy",
  crew: "Straw Hat Pirates",
  actions: {
    gearSecond: function () {
      console.log(`${this.name} activates Gear Second!`);

      function attack() {
        console.log(`${this.name} attacks with Gomu Gomu no Jet Pistol!`); //undefined
      }

      attack(); // undefined coz it doesnt have any context
    },
    gearFourth: function () {
      console.log(`${this.name} activates Gear Fourth!`);
      // arrow function inside a normal function is most preferable because of the below reason.
      //arrow function doesnt care abt context .so if we dont mention here it goes and finds in its lexical scope.
      const attack = () => {
        console.log(`${this.name} attacks with Gomu Gomu no Kong Gun!`);
      };

      attack(); // undefined
    },
    crewShout: () => {
      console.log(`Crew Shout: ${this.crew} cannot be accessed here.`);
    },
  },
};

// What happens? Clue: Change Context
luffy.actions.gearSecond.call(luffy);
luffy.actions.gearFourth.call(luffy);
luffy.actions.crewShout.call(luffy);

//The nested normal functions are the problem.So we use the arrow functions in the nesting.
