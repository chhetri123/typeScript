interface Person {
  readonly name: string;
  age: number;
  greet(n: string, m: string): string;
}

// inheritance interface
interface girl extends Person {
  gender: string;
}

//
let user1: Person = {
  name: "John",
  age: 34,
  greet(n: string, m: string) {
    return n + m;
  },
};
const getgreet = user1.greet("Hello ", user1.name);
console.log(getgreet);
console.log(user1.age);

class Man implements girl, Person {
  name: string;
  age = 30;
  gender = "female";
  constructor(n: string) {
    this.name = n;
  }
  greet(n: string, m: string) {
    return n + m;
  }
}

// ?]interface as function
// *through type
type Addfn = (a: number, b: number) => number;
let add: Addfn;
add = (a: number, b: number) => a + b;
console.log(add(5, 2.5));

// *through Interface

interface Addfun {
  (a: string, b: number): string;
}

let addS: Addfun;
addS = (a: string, b: number) => a + b;
console.log(addS("p", 2.5));

// Interface as object

interface Obj {
  readonly animal?: string;
  animalType?: string;
}

class Animal implements Obj {
  animal?: string;
  animalType?: string;
  constructor(n?: string) {
    if (n) {
      this.animalType = n;
    } else {
      console.log("Its domestic");
    }
  }
}

const an = new Animal();
console.log(an);
