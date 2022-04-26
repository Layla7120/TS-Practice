export const map = <T, Q>(array:T[], callback: (value: T, index?: number) => Q): Q[] =>{
  let result:Q[] = []
  for(let index = 0; index < array.length; ++index){
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}

import {range} from './range'

let squares:number[] = range(1, 5 + 1)
  .map((val:number) => val * val)
console.log(squares)

let names:string[] = range(1, 5 + 1)
  .map((val, index) => `[${index}]: ${val}`)
console.log(names)