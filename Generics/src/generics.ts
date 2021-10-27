// Built-in generics

const names: Array<string> = ["Manish"];
names[0].split(" ");

const promise: Promise<string> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve("this is done ");
    }, 200);
  }
);

promise.then((data) => {
  data.split(" ");
});

// creating a Generic function

function merge<T, U>(obA: T, obB: U) {
  return Object.assign(obA, obB);
}

// console.log(merge({ name: "manish" }, { age: 25 }));
const mergeObj = merge(
  { name: "manish", hobbies: "Cricket" },
  { age: 25 }
);

// console.log(mergeObj.name);
// console.log(mergeObj);

// working with constraints
function merges<T extends Object, U extends object>(
  obA: T,
  obB: U
) {
  return Object.assign(obA, obB);
}

// console.log(merge({ name: "manish" }, { age: 25 }));
const mergeObjs = merge(
  { name: "manish", hobbies: "Cricket" },
  { age: 25 }
);

//  Another eneric function
interface Lengthy {
  length: number;
}
// type Lengthy = string | string[];
function countAndPrin<T extends Lengthy>(
  element: T
): [T, string] {
  let description = "Got no value";

  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 0) {
    description = "Got " + element.length + " elements";
  }
  return [element, description];
}
// console.log(countAndPrin("manish"));
// console.log(countAndPrin(["manish", "chhetri"]));

// The keyof constraint

function extractAndConvert<
  T extends object,
  U extends keyof T
>(ob: T, key: U) {
  return ob[key];
}
// console.log(extractAndConvert({ name: "Max" }, "name"));

// Generic Classes

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const tetStorage = new DataStorage<string>();
tetStorage.addItem("hello");
tetStorage.addItem("Chhetri");
tetStorage.getItems();
tetStorage.removeItem("hello");
console.log(tetStorage);

const ObjStorage = new DataStorage<object>();
ObjStorage.addItem({ name: "CHhhetri" });
ObjStorage.addItem({ job: "Coding" });
ObjStorage.removeItem({ name: "CHhhetri" });
console.log(ObjStorage.getItems());
console.log(ObjStorage);
