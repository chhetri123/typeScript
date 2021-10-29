"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(hello) {
    console.log("Logging...");
    console.log(hello);
}
class Person {
    constructor() {
        this.name = "manish";
        console.log("creating person obj...");
    }
}
function Login(username) {
    return function (constructor) {
        console.log("Login... to " + username);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConst) {
        console.log("Teplate");
        return class extends originalConst {
            constructor(..._) {
                super();
                console.log("Rendering");
                const element = document.getElementById(hookId);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector("h1").textContent =
                        this.name;
                }
            }
        };
    };
}
let Name = class Name {
    constructor() {
        this.name = "Manish";
        console.log("Creating account");
    }
};
Name = __decorate([
    WithTemplate("<h1>My person Object</h1>", "app")
], Name);
const person = new Name();
console.log(person);
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("accessor ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, postion) {
    console.log("Parameter ");
    console.log(target);
    console.log(name);
    console.log(postion);
}
class Product {
    constructor(t, _price) {
        this._price = _price;
        this.title = t;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Invalid price ");
        }
    }
    getPricewithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPricewithTax", null);
const p1 = new Product("Book", 19);
const p2 = new Product("copy", 20);
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFun = originalMethod.bind(this);
            return boundFun;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "this works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const bottom = document.querySelector("button");
bottom.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["required"],
    };
}
function Positive(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["positive"],
    };
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    console.log(objValidatorConfig);
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const courceForm = document.querySelector("form");
courceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = priceEl.value;
    const createdCource = new Course(title, +price);
    if (!validate(createdCource)) {
        alert("Invalid Input");
        return;
    }
    console.log(createdCource);
});
