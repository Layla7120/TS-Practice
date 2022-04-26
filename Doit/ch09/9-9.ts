import * as R from 'ramda'

//배열에 직접 삽입하면 기존 배열을 훼손시키므로
const array: number[] = [3, 4]
const newArray = R.prepend(1)(array)

const newArray2 = R.append(1)(array)
console.log(array, newArray, newArray2)

const array2 = R.range(1, 2 + 1).map((x:number) => {
  return R.range(1, 2 + 1).map((y:number) => {
    return [x, y]
  })
})

console.log(array2)

//flatten
const flattendArray = R.flatten(array2)
console.log(flattendArray)

//unnest
const unnestedArray = R.unnest(array2)
console.log(unnestedArray)

const twoUnnestedArray = R.pipe(R.unnest, R.unnest)(array2)
console.log(twoUnnestedArray)

//sort (a: number, b: number): number => a - b [마이너스면 오름차순 0이나 플러스값이면 내림차순]
type voidToNumberFunc = () => number
const makeRandomNumber = (max: number): voidToNumberFunc =>
  (): number => Math.floor(Math.random() * max)

const array3 = R.range(1, 5 + 1).map(makeRandomNumber(100))
const sortedArray = R.sort( (a: number, b: number): number => a - b)(array)

console.log(array, sortedArray)

//sortBy 객체일때 특정 속성값에 따라 정렬
import {IPerson, makeRandomIPerson} from './model/person'
import {displayPersons} from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortBy(R.prop('name'))(persons)
const ageSortedPersons = R.sortBy(R.prop('age'))(persons)

displayPersons('sorted by name: ')(nameSortedPersons)
displayPersons('sorted by age: ')(ageSortedPersons)

//sortWith : 오름차순만 가능한 sortBy의 해결책 R.ascend, R.descend로 내림차순까지 가능
// const nameSortedPersons2 = R.sortWith([R.descend(R.prop('name'))])(persons)

// displayPersons('sorted by name: ')(nameSortedPersons2)