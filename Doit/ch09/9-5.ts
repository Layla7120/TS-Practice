import * as R from 'ramda'

type StringToStringFunc = (string) => string
export const toCamelCase = (delim:string):StringToStringFunc => {
  const makeFirstToCapital = (word:string) => {
    const characters = word.split('')
    return characters.map((c, index) => index == 0 ? c.toUpperCase() : c).join('')
  }

  const indexedMap = R.addIndex(R.map)
  return R.pipe(
    R.trim,
    R.split(delim),
    R.map(R.toLower),
    indexedMap((value:string, index:number) => index > 0 ?
      makeFirstToCapital(value): value
    ),
    // @ts-ignore
    R.join('')
  ) as StringToStringFunc
}

console.log(
  toCamelCase(' ')('Hello world'),
  toCamelCase('_')('Hello_Albert_Einstein')
)