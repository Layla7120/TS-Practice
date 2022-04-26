type FirstOrderFunc<T, R> = (T) =>R
type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>
type ThridOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>

const inc: FirstOrderFunc<number, number> = (x:number):number => x + 1

const add: SecondOrderFunc<number, number> = 
  (x:number): FirstOrderFunc<number, number> =>
  (y:number): number => x + y

//curry
console.log(add(1)(2))

const add3: ThridOrderFunc<number, number> = 
  (x:number) :SecondOrderFunc<number, number> =>
  (y:number) :FirstOrderFunc<number,number> =>
  (z:number) : number => x + y + z

console.log(add3(1)(2)(3))

// const add1: FirstOrderFunc<number, number> = add(1)
const add2: SecondOrderFunc<number, number> = add3(1)
const add1: FirstOrderFunc<number, number> = add2(2)

// console.log(add(2), add(1)(2))

console.log(add1(3), add2(2)(3), add3(1)(2)(3))