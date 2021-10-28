// A first class decorator

function Logger(hello: Function) {
  console.log("Logging...");

  //   console.log(constructor);
  console.log(hello);
}

// @Logger
class Person {
  name = "manish";

  constructor() {
    console.log("creating person obj...");
  }
}
// const per = new Person();

// console.log(per);

// Working with decorator Factories
// Building More useFul Decorator
function Login(username: string) {
  return function (constructor: Function) {
    console.log("Login... to " + username);

    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering");
    // const element = document.getElementById(hookId);
    // const p = new constructor();
    // if (element) {
    //   element.innerHTML = template;
    //   element.querySelector("h1")!.textContent = p.name;
    // }
  };
}
// @Login("Chhetri")
// @WithTemplate("<h1>My person Object</h1>", "app")
// @Login("Chhetri")
class Name {
  name: string = "Manish";
  constructor() {
    console.log("Creating account");
  }
}

//
// Diving ino Property Decorator

function Log(target: any, propertyName: string | Symbol) {
  console.log("property decorator");
  console.log(target, propertyName);
}

function Log2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("accessor ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(
  target: string,
  name: string | Symbol,
  postion: number
) {
  console.log("Parameter ");
  console.log(target);
  console.log(name);
  console.log(postion);
}

// Accessor & Parameter Decorator
class Product {
  @Log
  title: string;
  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price ");
    }
  }
  constructor(t: string, private _price: number) {
    this.title = t;
  }
  @Log3
  getPricewithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//

const p1 = new Product("Book", 19);
const p2 = new Product("copy", 20);
