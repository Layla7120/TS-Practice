"use strict";
exports.__esModule = true;
exports.dump = exports.numbers = void 0;
var R = require("ramda");
var sum_1 = require("./sum");
console.log(R.range(1, (9 + 1)));
exports.numbers = R.range(1, 9 + 1);
R.tap(function (n) { return console.log(n); })(exports.numbers);
var array = R.range(1, 10);
R.pipe(R.tap(function (n) { return console.log(n); }))(array);
//람다는 타입스크립트를 고려해 만든 라이브러리가 아니기 때문에 일반화살표 함수로 바꿔버리면 오류가 발생함
// -> 이 오류를 해결하는 방법은 타입 단언을 이용하는 것 
// -> 하지만 그냥 dump처럼 포인트가 없는 함수를 만드는 것이 불필요한 타입스크립트 오류를 만나지 않은 방안
exports.dump = R.pipe(R.tap(function (n) { return console.log(n); }));
(0, exports.dump)(R.range(1, 10));
//R.curryN 함수는 N개의 매개변수를 가진 1차 함수를 N개의 커리 매개변수를 가지는 N차 고차함수로 만들어줌
var curriedSum = R.curryN(4, sum_1.sum);
console.log(curriedSum(), curriedSum(1), curriedSum(1)(2), curriedSum(1)(2)(3), curriedSum(1)(2)(3)(4));
//순수함수
var originalArray = [1, 2, 3];
var resultArray = R.pipe(R.map(R.add(1)))(originalArray);
console.log(originalArray, resultArray);
