function divide(n: number, m: number): number | string {
  if (m === 0) {
    return "Division not possible";
  }
  return Math.round(n / m);
}

const getDivision = divide(5, 6);
// console.log(getDivision);
const errorDivision = divide(5, 0);
// console.log(errorDivision);

// classes and interfaces are

class Department {
  // private name: string;
  protected employes: string[] = [];
  static fiscalyear = 2020;
  // shorthand initialization
  constructor(
    private readonly id: string,
    private name: string
  ) {
    console.log(Department.fiscalyear);
    // this.name = name;
    // this.id = id;
  }
  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    //   this.id="kkd"
    console.log(this.name + " is my department");
  }
  addEmployee(employes: string) {
    this.employes.push(employes);
  }
  printEmployee() {
    console.log(this.employes.length);
    console.log(this.employes);
  }
}

class Itdepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  // normal constructor
  //   constructor(id: string, private reports: string[]) {
  //     super(id, "Accoutant");
  //     this.lastReport = reports[0];
  //   }
  //   //   addEmployee(n: string) {
  //   //     this.employes.push(n);
  //   //   }

  // singleton and private constructor
  private constructor(
    id: string,
    private reports: string[]
  ) {
    super(id, "Accoutant");
    this.lastReport = reports[0];
  }

  //

  //   addEmployee(n: string) {
  //     this.employes.push(n);
  //   }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    return new Accounting("1", ["ChhetriRocks"]);
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in avalid value");
    }
    this.reports.push(value);
    this.lastReport = value;
  }
}

const employee1 = Department.createEmployee("chhetri");
console.log(employee1);
const science = new Itdepartment("1", ["manish"]);
science.addEmployee("manish chhetri");
science.addEmployee("rockey ");
// science.employes[2] = "anna";
// console.log(science);

// //
// science.describe();
// science.printEmployee();

// const account = new Accounting("2", []);

// For singleton and private constructor
const account = Accounting.getInstance();
//

account.addEmployee("manish chhetri");
account.addEmployee("rockey ");
account.addEmployee("manish");
account.mostRecentReport = "what the hell?";
// account.employes[2] = "anna";
console.log(account);

//
console.log(account.mostRecentReport);
// account.describe();
// account.printEmployee();
// // const subject = {
//   name: "Physics",
//   describe: science.describe,
// };

// console.log(subject.describe());
