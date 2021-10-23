// const person: {
//   name: string;
//   age: number;
//   nickname: string;
// } = {
//   name: "Chhetri",
//   age: 25,
//   nickname: "chhetrirocks",
// };
// console.log(person.name);

// arrays types
// const person: {
//   name: string;
//   age: number;
//   nickname: string;
// }
// const man: {
//   name: string;
//   age: number;
//   hobbies: any[];
// } = {
//   name: "Chhetri",
//   age: 25,
//   hobbies: ["football", 1],
// };
// console.log(man.hobbies);
//  tuple

// const person: [number, string] = [2, "chhetri"];

// // person.push("manish");
// // person = [10, "class"];
// console.log(person);

// enum

// enum Roles {
//   ADMIN = "Red",
//   USER = 0,
//   AUTHOR,
// }
// const books = {
//   name: "justice",
//   price: 56,
//   author: ["manish", "chhetri"],
//   role: Roles.ADMIN,
// };
// if (books.role === Roles.ADMIN) {
//   console.log(books);
// }

// union

// function combine(
//   n: number | string,
//   m: number | string,
//   resultConversion: string
// ) {
//   let result: number | string;
//   if (typeof n === "number" && typeof m === "number") {
//     result = n + m;
//   } else {
//     result = n.toString() + m.toString();
//   }
//   if (resultConversion === "as-name") {
//     return result.toString();
//   } else {
//     return +result;
//   }
// }
// const number2 = "manis";
// const combineAges = combine(5, 6, "as-name");
// console.log(combineAges);
// const combineName = combine("6", "5", "as-book");
// console.log(combineName);

// type aliases

// type Combinable = number | string; // resusable type
//  function return type& void

function add(n: number, m: number): number | string {
  const result = n + m;
  return result;
}

let combineValue: (a: number, b: number) => number | string;
combineValue = add;

console.log(combineValue(5, 6));
function additems(
  n1: number,
  n2: number,
  cb: (num: number) => void
) {
  const result = n1 + n2;
  cb(result);
}

additems(20, 30, (result) => {
  console.log(result);
});

let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "manish";
// userName = userInput;
