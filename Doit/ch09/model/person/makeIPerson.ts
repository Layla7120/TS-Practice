import {IPerson, ILocation} from './IPerson'

export const makeIPerson = (
  name: string,
  age: number,
  title?: string,
  location?: ILocation
) => ({ name, age, title, location })

export {IPerson, ILocation}