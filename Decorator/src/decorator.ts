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
  return function <
    T extends { new (...args: any[]): { name: string } }
  >(originalConst: T) {
    // console.log("Rendering");
    // const element = document.getElementById(hookId);
    // const p = new originalConst();
    // if (element) {
    //   element.innerHTML = template;
    //   element.querySelector("h1")!.textContent = p.name;
    // }

    console.log("Teplate");

    // Returning (and changing ) aclss in a class
    return class extends originalConst {
      constructor(..._: any[]) {
        super();
        console.log("Rendering");
        const element = document.getElementById(hookId);
        if (element) {
          element.innerHTML = template;
          element.querySelector("h1")!.textContent =
            this.name;
        }
      }
    };
  };
}
// @Login("Chhetri")
@WithTemplate("<h1>My person Object</h1>", "app")
class Name {
  name: string = "Manish";
  constructor() {
    console.log("Creating account");
  }
}

const person = new Name();
console.log(person);
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

// AutoBind decorator
function AutoBind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "this works";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const bottom = document.querySelector("button")!;

bottom.addEventListener("click", p.showMessage);

// Validation with decorator

interface ValidatorConfig {
  [property: string]: {
    [validatbleProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function Positive(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig =
    registeredValidators[obj.constructor.name];
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
  @Required
  title: string;
  @Positive
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}
const courceForm = document.querySelector("form")!;
courceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById(
    "title"
  ) as HTMLInputElement;
  const priceEl = document.getElementById(
    "price"
  ) as HTMLInputElement;

  const title = titleEl.value;
  const price = priceEl.value;

  const createdCource = new Course(title, +price);
  if (!validate(createdCource)) {
    alert("Invalid Input");
    return;
  }

  console.log(createdCource);
});
