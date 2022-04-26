//선언형 프로그래밍에서는 모든 입력 데이터는 데이터보다 '배열'형태로 주로 사용

import * as R from 'ramda'
import { numbers } from './9-1,9-2'

const value = 1
const newValue = R.inc(value)

const newArray = R.pipe(
  R.map(R.inc)
)([value])

const incNumbers1 = R.pipe(
  R.tap(a => console.log('before inc:', a)),
  R.map(R.inc),
  R.tap(a => console.log('after inc:', a))
)

const newNumbers = incNumbers1(numbers)
// console.log(newNumbers)

//'포인트가 없는' 함수와 콜백 함수를 익명 함수 형태로만 구현하는 것은 아님

const incNumbers = R.pipe(
  R.map(R.add(1)),
  R.tap(a => console.log('after add(1):', a))
)

const newNumbers2 = incNumbers(R.range(1, 9 + 1))

// R.addIndex 함수 :
//   Array.map과는 달리 R.map는 매개변수를 기본을 제공하지 않음
//   따라서 R.addIndex함수를 사용해 R.map이 index를 제공하는 새로운 함수를 만들어야 함

const indexedMap = R.addIndex(R.map)
indexedMap((value:number, index:number) => R.add(value)(index))

const addIndex = R.pipe(
  R.addIndex(R.map)(R.add),
  R.tap(a => console.log(a))
)
const newNumbers3 = addIndex(R.range(1, 9 + 1))

//R.flip: 2차 고차 함수의 매개변수 순서를 바꿔줌
const reverseSubstract = R.flip(R.subtract)

const newArray2 = R.pipe(
  R.map(reverseSubstract(10)),
  R.tap(a => console.log(a))
)(R.range(1, 9+1))

type NumberToNumberFunc = (number) => number
const f = (a:number, b:number, c:number):NumberToNumberFunc =>
  (x:number): number => a * x ** 2 + b * x + c

//업그레이드 버전
const exp = (N:number) => (x:number):number => x ** N
const square = exp(2)

const f2 = (a:number, b:number, c:number):NumberToNumberFunc =>
  (x:number):number => R.add(
    R.add(
      R.multiply(a)(square(x))
    )(R.multiply(b)(x)),
    c
  )

const quadratic = f2(1, 2, 1)
const input:number[] = R.range(1, 10 + 1)
const quadraticResult = R.pipe(
  R.map(quadratic),
  R.tap(a => console.log(a))
)(input)

const input2:number[] = R.range(1, 10 + 1), halfvalue = input[input.length / 2]

const subtractOrAdd = R.pipe(
  R.map(R.ifElse(
    R.lte(halfvalue),
    R.inc, 
    R.dec
  )),
  R.tap(a => console.log(a))
)
const result = subtractOrAdd(input2)