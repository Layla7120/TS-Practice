export const filter = <T>(array:T[], callback:(value:T, index?:number) => boolean):T[] => {
  let result: T[] = []
  for(let index: number = 0; index < array.length; ++index){
    const value = array[index]
    if(callback(value, index))
      result = [...result, value]
  }
  return result
}

import {range} from './range'

const array: number[] = range(1, 10 + 1)

let odds: number[] = array.filter((value) => value % 2 != 0)
let evens: number[] = array.filter((value) => value % 2 ==0)

console.log(odds, evens)

const array2: number[] = range(1, 10 + 1)
const half = array.length / 2

let belowHalf: number[] = array.filter((v, index) => index < half)
let overHalf: number[] = array.filter((v, index) => index >= half)
console.log(belowHalf, overHalf)