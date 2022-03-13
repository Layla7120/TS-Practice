export const f = <T>(x: T):string => `f({${x}})`
export const g = <T>(x: T):string => `g({${x}})`
export const h = <T>(x: T):string => `h({${x}})`

const compose = <T, R>(...functions: readonly Function[]): Function => (x: T) : (T) => R => {
  const deepCopiedFunctions = [...functions]
  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

const inc2 = x => x + 1

const composedFGH = compose(h, g, f)
console.log(composedFGH('x'))

const composed = compose(inc2, inc2,inc2)
console.log(composed(1))