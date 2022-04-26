function* gen(){
  let count = 5
  let select = 0
  while(count--){
    select = yield `you select ${select}`
  }
}

const random = (max, min=0) => Math.round(Math.random() * (max-min)) + min

const iter = gen()
while(true){
  const {value, done} = iter.next(random(10, 1))
  if(done) break
  console.log(value)
}