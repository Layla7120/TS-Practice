const createRangeIterable = (from: number, to:number) => {
  let currentValue = from
  return{
    next(){
      const value = currentValue < to ? currentValue++ : undefined
      const done = value == undefined
      return {value, done}
    }
  }
}

const iterator = createRangeIterable(1, 3 + 1)
while(true){
  const {value, done} = iterator.next()
  if(done) break
  console.log(value)
}

class RangeIterable {
  constructor(public from:number, public to:number){}
  [Symbol.iterator](){
    const that = this
    let currentValue = that.from
    return{
      next(){
        const value = currentValue < that.to ? currentValue++ : undefined
        const done = value == undefined
        return {value, done}
      }
    }
  }
}

const iterator2 = new RangeIterable(1, 3 + 1)

for (let value of iterator2)
  console.log(value)
