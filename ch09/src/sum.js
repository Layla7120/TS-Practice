"use strict";
exports.__esModule = true;
exports.sum = void 0;
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (result, sum) { return result + sum; }, 0);
};
exports.sum = sum;
