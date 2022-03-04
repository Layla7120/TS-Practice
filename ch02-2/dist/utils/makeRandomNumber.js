"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = void 0;
let MAX_AGE = 100;
function makeRandomNumber(max = MAX_AGE) {
    return Math.ceil((Math.random() * max));
}
exports.makeRandomNumber = makeRandomNumber;
//# sourceMappingURL=makeRandomNumber.js.map