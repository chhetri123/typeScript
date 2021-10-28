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
    return function (constructor) {
        console.log("Rendering");
    };
}
class Name {
    constructor() {
        this.name = "Manish";
        console.log("Creating account");
    }
}
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
