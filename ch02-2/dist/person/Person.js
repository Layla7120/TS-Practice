"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
const makeRandomNumber_1 = require("../utils/makeRandomNumber");
class Person {
    constructor(name, age = (0, makeRandomNumber_1.makeRandomNumber)()) {
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
const makePerson = (name, age = (0, makeRandomNumber_1.makeRandomNumber)()) => ({ name, age });
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map