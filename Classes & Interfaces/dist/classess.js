"use strict";
function divide(n, m) {
    if (m === 0) {
        return "Division not possible";
    }
    return Math.round(n / m);
}
const getDivision = divide(5, 6);
const errorDivision = divide(5, 0);
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employes = [];
        console.log(Department.fiscalyear);
    }
    static createEmployee(name) {
        return { name };
    }
    describe() {
        console.log(this.name + " is my department");
    }
    addEmployee(employes) {
        this.employes.push(employes);
    }
    printEmployee() {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}
Department.fiscalyear = 2020;
class Itdepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accoutant");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new Accounting("1", ["ChhetriRocks"]);
    }
    set mostRecentReport(value) {
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
const account = Accounting.getInstance();
account.addEmployee("manish chhetri");
account.addEmployee("rockey ");
account.addEmployee("manish");
account.mostRecentReport = "what the hell?";
console.log(account);
console.log(account.mostRecentReport);
//# sourceMappingURL=classess.js.map