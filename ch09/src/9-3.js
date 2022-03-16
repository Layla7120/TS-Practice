"use strict";
//선언형 프로그래밍에서는 모든 입력 데이터는 데이터보다 '배열'형태로 주로 사용
exports.__esModule = true;
var R = require("ramda");
var _9_1_9_2_1 = require("./9-1,9-2");
var value = 1;
var newValue = R.inc(value);
var newArray = R.pipe(R.map(R.inc))([value]);
var incNumbers1 = R.pipe(R.tap(function (a) { return console.log('before inc:', a); }), R.map(R.inc), R.tap(function (a) { return console.log('after inc:', a); }));
var newNumbers = incNumbers1(_9_1_9_2_1.numbers);
// console.log(newNumbers)
//'포인트가 없는' 함수와 콜백 함수를 익명 함수 형태로만 구현하는 것은 아님
var incNumbers = R.pipe(R.map(R.add(1)), R.tap(function (a) { return console.log('after add(1):', a); }));
var newNumbers2 = incNumbers(R.range(1, 9 + 1));
// R.addIndex 함수 :
//   Array.map과는 달리 R.map는 매개변수를 기본을 제공하지 않음
//   따라서 R.addIndex함수를 사용해 R.map이 index를 제공하는 새로운 함수를 만들어야 함
var indexedMap = R.addIndex(R.map);
indexedMap(function (value, index) { return R.add(value)(index); });
var addIndex = R.pipe(R.addIndex(R.map)(R.add), R.tap(function (a) { return console.log(a); }));
-ignore;
var newNumbers3 = addIndex(R.range(1, 9 + 1));
