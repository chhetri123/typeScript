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
function combine(n, m, resultConversion) {
    var result;
    if (typeof n === "number" && typeof m === "number") {
        result = n + m;
    }
    else {
        result = n.toString() + m.toString();
    }
    if (resultConversion === "as-name") {
        return result.toString();
    }
    else {
        return +result;
    }
}
var number2 = "manis";
var combineAges = combine(5, 6, "as-name");
console.log(combineAges);
var combineName = combine("6", "5", "as-book");
console.log(combineName);
