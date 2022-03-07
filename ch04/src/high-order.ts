// const add = (a:number): (number) => number => (b:number):number => a + b
// const result = add(1)(2)
// console.log(result)

export type NumberToNumberFunc = (number) => number
export const add = (a:number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b
  }
  return _add
}