"use strict";
const e1 = {
    name: "chhetri",
    privilage: ["Created-server"],
    startDate: new Date(),
};
function add(n, m) {
    if (typeof n === "string" || typeof m === "string") {
        return n.toString() + m.toString();
    }
    return n + m;
}
function printEmployee(employee) {
    console.log("Name:" + employee.name);
    if ("privilage" in employee) {
        console.log("Privilage:" + employee.privilage);
    }
    if ("startDate" in employee) {
        console.log("Start Date:" + employee.startDate);
    }
}
class Car {
    drive() {
        console.log("driving...");
    }
}
class Truck {
    drive() {
        console.log("driving... truck");
    }
    loading(amount) {
        console.log("Loading cargo..." + amount);
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loading" in vehicle) {
        vehicle.loading(45);
    }
    if (vehicle instanceof Truck) {
        vehicle.loading(50);
    }
}
function MoveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
MoveAnimal({ type: "bird", flyingSpeed: 120 });
const userInputBox = (document.getElementById("user-input"));
const userInput1 = document.getElementById("user-input");
userInput1.value = "HI there";
const userInputs = document.getElementById("user-input");
if (userInputs) {
    userInputs.value = "Hi There";
}
const errorBag = {
    email: "Not a valid email",
    id: "123",
    userName: "Must start with capital letter",
};
function sum(n, m) {
    if (typeof n === "string" || typeof m === "string") {
        return n.toString() + m.toString();
    }
    return n + m;
}
const result0 = sum(5, 5);
const result1 = sum("MAx", " hi");
console.log(result0);
console.log(result1);
const fetchedData = {
    id: "ui",
    name: "Chhetri",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
console.log(fetchedData?.job?.title);
const userInput = "";
const storedData = userInput ?? "Default";
console.log(storedData);
