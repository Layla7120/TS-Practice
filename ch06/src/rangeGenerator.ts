function* rangeGenerator(from:number, to:number){
  let value = from
  while(value < to){
    yield value++
  }
}

const iterator3 = rangeGenerator(1, 3 + 1)
while(1){
  const {value, done} = iterator3.next()
  if(done) break
  console.log(value)
}

for (let value of rangeGenerator(4, 6 + 1))
  console.log(value)