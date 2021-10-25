# Classes & Interfaces

---

# Classes

- ## What are classes?
  Work with the real-life Entites in code

| **Object**                                                        |                          **Classes**                          |
| ----------------------------------------------------------------- | :-----------------------------------------------------------: |
| The thing you work in the Code                                    |       BluePrint for the object (theoritical Defination)       |
| Instance of classes (Based on the class)                          | Define how object look likes (Contains method and properties) |
| Class-based Creations is an alternative to using objects literals | Classes make creation of multiple ,similar object mush easier |

---

## Feature of classes

<h3>
<ul>
 <li> Creation of first class ( in <b>classes.ts</b> file)<li/>
 Compiling  to JS 
 <li>
 Construction function and <i>this</i> keyWord
 <li> Private & Public Access Modifier></li>

```typescript
class Department {
  // private name: string;
  protected employes: string[] = [];
  private static fiscalyear = 2020;
  constructor(){}



```

<li> Shorthand Initilization</li>

```typescript
constructor(
    private readonly id: string,
    private name: string
  ) {
    ...
  }
```

<li> Inheritance </li>
<li>Overriding properties  the protected modifier</li>
<li> Getter  & setter</li>

```typescript
class Accounting extends Department {
  constructor(id: string, private reports: string[]) {}

  get mostRecentReport() {
    return this.report[0];
  }

  set mostRecentReport(value: string) {
    this.report.push(value);
  }
}

const account = new Accounting("2", ["Its working"]);
account.mostRecentReport = "what the hell?"; // calling set function with parameter
account.mostRecentReport; // calling get function get access the private value outside the class
```

<li> Static Methods  properties

  <h4> we can access member function outside the class without the instance of class. i.e no need to use new operator. </p>
  <h3>
  <li> Abstract class </li>
  <h5> Empty method in the base class and force all classes based on that class to add and override that method <h5/>
<h3>
<li> Singleton & Private Constructor 
<h5> Singleton pattern is about ensure that you will always onlu have exactly one instance of certain class and

```typescript
class Accounting {
  private lastReport: string;
  private static instance: Accounting;
  // singleton and private constructor
  private constructor(
    id: string,
    private reports: string[]
  ) {}
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    return new Accounting("1", ["ChhetriRocks"]);
  }
}

// For singleton and private constructor
const account = Accounting.getInstance();
```

---

# Interfaces

- ##### It describe the structure of object
- ##### Describe how an object should look like
- ##### It cannot have initilizer
- ##### It just like classes by the way- There ,we also separate properties via semicolon

##### Watch out the file **interfaces.ts** more details

<h3>
<li>  Using the Interface with classes
<h6>

```typescript
interface Person {
  name: string;
  age: number;
  greet(m: string): string;
}

class Man implements Person {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(m: string) {
    return this.name + m;
  }
}
```

<h4>
<li> Why Interface?
<h6>

- It allows us to write truly powerful and flexiable code where we don't have to know everything about object , classes.
- It help to create multiple type classes

<h4>

<li> Readonly Interface property
<h6>

- we can can add readonly

```typescript
interface Person {
  readonly name: string;
}
```

<h4>
<li> Inheritance Interface property
<h6>

```typescript
interface Girl{

}
interface Boys{

}
interface Person etends Girl,Boys{

}
class Man implements Girls,Boys{

}
```

<h4>
<li> Interface as Function Types 
<h6>

```typescript
interface Addfun {
  (a: string, b: number): string;
}

let addS: Addfun;
addS = (a: string, b: number) => a + b;
console.log(addS("p", 2.5));
```

<h4> 
<li> Interface as Object (Can have  optional param)
<h6>

```typescript
interface Obj {
  readonly animal?: string;
  animalType?: string;
}

class Animal implements Obj {
  animal?: string;
  animalType?: string;
  constructor(n?: string) {
    if (n) {
      this.animalType = n;
    } else {
      console.log("Its domestic");
    }
  }
}

const an = new Animal();
```
