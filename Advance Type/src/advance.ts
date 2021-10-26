// Intersect Type

type Admin = {
  name: string;
  privilage: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEMployee extends Employee, Admin{

// }
type ElevatedEMployee = Admin & Employee;

const e1: ElevatedEMployee = {
  name: "chhetri",
  privilage: ["Created-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = string | boolean;

type Universal = Combinable & Numeric;

// console.log(e1);

// Type guard
function add(n: Combinable, m: Combinable) {
  if (typeof n === "string" || typeof m === "string") {
    return n.toString() + m.toString();
  }
  return n + m;
}

type UnknownEmployee = Employee | Admin;

function printEmployee(employee: UnknownEmployee) {
  console.log("Name:" + employee.name);
  if ("privilage" in employee) {
    console.log("Privilage:" + employee.privilage);
  }
  if ("startDate" in employee) {
    console.log("Start Date:" + employee.startDate);
  }
}
// printEmployee({ name: "chhetri", startDate: new Date() });

class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving... truck");
  }

  loading(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loading" in vehicle) {
    vehicle.loading(45);
  }

  // or
  if (vehicle instanceof Truck) {
    vehicle.loading(50);
  }
}

// Discriminated Type
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function MoveAnimal(animal: Animal) {
  // type Guard
  //   if ("flyingSpeed" in animal) {
  //     console.log("The flying speed:" + animal.flyingSpeed);
  //   }
  //   "runningSpeed" in animal
  //     ? console.log(animal.runningSpeed)
  //     : "";
  let speed: number;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
}

MoveAnimal({ type: "bird", flyingSpeed: 120 });

// type castings

// 1st type
const userInputBox = <HTMLInputElement>(
  document.getElementById("user-input")!
);

// 2nd type
const userInput1 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInput1.value = "HI there";

// or we can write
const userInputs = document.getElementById("user-input");

if (userInputs) {
  (userInputs as HTMLInputElement).value = "Hi There";
}

// Index properties
interface ErrorContainer {
  //{email: "not a valid email",username:"must start with capital letter"}
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  id: "123",
  userName: "Must start with capital letter",
};

// function Overloads
// function add(a: number): number;
function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum(a: number, b: string): string;
function sum(a: string, b: number): number;
function sum(n: Combinable, m: Combinable) {
  if (typeof n === "string" || typeof m === "string") {
    return n.toString() + m.toString();
  }
  return n + m;
}
const result0 = sum(5, 5);
const result1 = sum("MAx", " hi");
console.log(result0);
console.log(result1);

// optional chaining

const fetchedData = {
  id: "ui",
  name: "Chhetri",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedData?.job?.title);

// Nullish Coalescing
const userInput = "";
const storedData = userInput ?? "Default";
console.log(storedData);
