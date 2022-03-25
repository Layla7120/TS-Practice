"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// //dosen't compile back to javascript
// interface Human{
//   name:string;
//   age:number;
//   gender:string;
// }
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 54, "female");
const person = {
    name: "jenny",
    age: 24,
    gender: "female"
};
// const sayHi = (name:string, age:number, gender?:string):string => {
//   return `hello ${name}, ${age}, you are a ${gender}`
// }
const sayHi = (person) => {
    return `hello ${person.name}, ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=theory.js.map