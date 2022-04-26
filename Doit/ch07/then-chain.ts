// Promise.resolve(1)
//   .then((value:number) => {
//     console.log(value)
//     return Promise.resolve(true)
//   })
//   .then((value: boolean) => {
//     console.log(value)
//     return [1, 2, 3]
//   })
//   .then((value: number[]) => {
//     console.log(value)
//     return {name:'jack', age:32}
//   })
//   .then((value: {name:string, age:number}) => {
//     console.log(value)
//   })

// const isAllTrue = (values:boolean[]) => values.every((value => value === true))

// console.log(isAllTrue([true, true, true]),
//             isAllTrue([false, true, true]),)

// const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

// getAllResolveResult<any>([Promise.resolve(true), Promise.resolve('hello')])
//   .then(result => console.log(result))

// getAllResolveResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
//   .then(result => console.log(result))
//   .catch(error => console.log('error:',error.message))

// const isAnyTrue = (values: boolean[]) => values.some((value => value == true))

// console.log(
//   isAnyTrue([false, true, false]),
//   isAnyTrue([false, false, false])
// )

Promise.race([Promise.resolve(true), Promise.resolve('hello')])
  .then(value => console.log(value))

Promise.race([Promise.reject(new Error('error')), Promise.resolve(true)])
  .then(value => console.log(value, '1'))
  .catch(error => console.log(error.message))

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
  .then(value => console.log(value, '2'))
  .catch(error => console.log(error.message))