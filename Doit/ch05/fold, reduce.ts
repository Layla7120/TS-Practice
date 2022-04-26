export const fold = <T>(array:T[], callback: (result: T, val: T) => T, initValue:T) => {
  let result:T = initValue
  for(let i = 0; i < array.length;
     ++i){
    const value = array[i]
    result = callback(result, value)
  }
  return result
}

import {range} from './range'

let reduceSum: number = range(1, 100 + 1)
  .reduce((result:number, value:number) => result + value, 0)

console.log(reduceSum)

let reduceSum2:number = range(1, 10 + 1)
  .reduce((result:number, value:number) => result * value, 1)
console.log(reduceSum2)