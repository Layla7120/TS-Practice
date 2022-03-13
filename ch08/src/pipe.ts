import {f, g, h} from './compose'
const pipe = <T>(...functions: readonly Function[]): Function => (x: T) : T => {
  return functions.reduce((value, func) => func(value), x)
}

const piped = pipe(f, g, h)
console.log(piped('x'))