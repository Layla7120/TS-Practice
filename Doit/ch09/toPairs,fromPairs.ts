import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'

//toPairs = 객체를 배열로 변환해줌
const person:IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)
console.log('pairs', pairs)

//배열을 다시 객체로 변환해줌
const pairs2: [string, any][] = R.toPairs(makeRandomIPerson())
const person2: IPerson = R.fromPairs(pairs) as IPerson
console.log('person2:', person2)