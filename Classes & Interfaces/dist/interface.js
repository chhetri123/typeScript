"use strict";
let user1 = {
    name: "John",
    age: 34,
    greet(n, m) {
        return n + m;
    },
};
const getgreet = user1.greet("Hello ", user1.name);
console.log(getgreet);
console.log(user1.age);
class Man {
    constructor(n) {
        this.age = 30;
        this.gender = "female";
        this.name = n;
    }
    greet(n, m) {
        return n + m;
    }
}
let add;
add = (a, b) => a + b;
console.log(add(5, 2.5));
let addS;
addS = (a, b) => a + b;
console.log(addS("p", 2.5));
class Animal {
    constructor(n) {
        if (n) {
            this.animalType = n;
        }
        else {
            console.log("Its domestic");
        }
    }
}
const an = new Animal();
console.log(an);
//# sourceMappingURL=interface.js.map