import * as R from 'ramda'

const array = [1, 2, 3]

R.pipe(
  R.chain(n => [n, n]),
  R.tap(n => console.log(n))
)(array)

R.pipe(
  R.chain(R.append, R.head),
  R.tap(n => console.log(n))
)(array)

const flatMap = (f) => R.pipe(
  R.map(f),
  R.flatten
)

R.pipe(
  flatMap(n => [n, n]),
  R.tap(n => console.log(n))
)(array)

const chainTwoFunc = (firstFn, secondFn) => (x) => firstFn(secondFn(x), x)

R.pipe(
  chainTwoFunc(R.append, R.head),
  R.tap(n => console.log(n))
)(array)

//R.flip - 2차 고차 함수의 매개변수 순서를 서로 바꿔주는 역할
const flip = cb => a => b => cb(b)(a)

const reverseSubtract = flip(R.subtract)

const newArray = R.pipe(
  R.map(reverseSubtract(10)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

//R.identity
const unnest = flatMap(R.identity)
const array2 = [[1], [2], [3]]
R.pipe(
  unnest,
  R.tap(n => console.log(n))
)(array2)

//R.always - 두개의 고차 매개변수 중 첫번째 것을 반환함

const always = a => b => a
const flip2 = cb => a => b => cb(a)(b)

const first = <T>(a: T) => (b: T): T => always(a)(b)
const second = <T>(a: T) => (b: T): T => flip(always)(a)(b)

console.log(
  first(1)(2),
  second(1)(2)
)

//R.applyTo 첫번째를 매개변수로, 이 값을 입력으로 하는 콜백함수를 두 번째 매개변수로 받음
const applyTo = value => cb => cb(value)

const T = value => R.pipe(
  R.applyTo(value),
  R.tap(value => console.log(value))
)

const value100 = T(100)
const sameValue = value100(R.identity)
const add1Value = value100(R.add(1))

//R.ap 콜백 함수들의 배열을 첫번째 매개변수로, 배열을 두 번째 매개변수로 입력 받음
// const ap = ([콜백함수]) => 배열 => [콜백 함수](배열)

//콜백함수가 하나일때는 map처럼 실행됨
const callAndAppend = R.pipe(
  R.ap([R.multiply(2)]),
  R.tap(a => console.log(a))
)

const input = [1, 2, 3]
const result = callAndAppend(input)

//콜백 함수가 두개일 때는 두 콜백함수를 적용한 각각의 배열을 만든 다음, 연산이 끝나면 통합해 하나로 만들어줌
const callAndAppend2 = R.pipe(
  R.ap([R.multiply(2), R.add(10)]),
  R.tap(a => console.log(a))
)

const result2 = callAndAppend2(input)

//3번 복제하고 통합한 배열
const repeat = (N, cb) => R.range(1, N + 1).map(n => cb)

const callAndAppend3 = R.pipe(
  R.ap(repeat(3, R.identity)),
  R.tap(a => console.log(a))  
)

const result3 = callAndAppend3(input)
