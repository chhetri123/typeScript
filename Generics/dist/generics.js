"use strict";
const names = ["Manish"];
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done ");
    }, 200);
});
promise.then((data) => {
    data.split(" ");
});
function merge(obA, obB) {
    return Object.assign(obA, obB);
}
const mergeObj = merge({ name: "manish", hobbies: "Cricket" }, { age: 25 });
function merges(obA, obB) {
    return Object.assign(obA, obB);
}
const mergeObjs = merge({ name: "manish", hobbies: "Cricket" }, { age: 25 });
function countAndPrin(element) {
    let description = "Got no value";
    if (element.length === 1) {
        description = "Got 1 element";
    }
    else if (element.length > 0) {
        description = "Got " + element.length + " elements";
    }
    return [element, description];
}
function extractAndConvert(ob, key) {
    return ob[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const tetStorage = new DataStorage();
tetStorage.addItem("hello");
tetStorage.addItem("Chhetri");
tetStorage.getItems();
tetStorage.removeItem("hello");
console.log(tetStorage);
const ObjStorage = new DataStorage();
ObjStorage.addItem({ name: "CHhhetri" });
ObjStorage.addItem({ job: "Coding" });
ObjStorage.removeItem({ name: "CHhhetri" });
console.log(ObjStorage.getItems());
console.log(ObjStorage);
