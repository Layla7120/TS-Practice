import {range} from './range'
import {fold} from './fold'
import {filter} from './filter'

let numbers:number[] = range(1, 100 + 1)

let result= fold(numbers, (result, value) => result + value, 0)
console.log(result)

const isOdd = (n:number):boolean => n % 2 != 0
let result2 = fold(
  filter(numbers, isOdd),
  (result, value) => result + value, 0)
console.log(result2)