export type KeyValueType = {
  [key: string]: String
}

export const makeObject = (key:string, value:string): KeyValueType => ({[key]: value})

console.log(makeObject('name', 'Jack'))
console.log(makeObject('firstName', 'Jane'))