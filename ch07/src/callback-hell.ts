import {readFile} from 'fs'

readFile('./ch07/package.json', (err: Error, buffer: Buffer) => {
  if(err) throw err
  else{
    const content:string = buffer.toString()
    console.log(content)

    readFile('./ch07/tsconfig.json', (err: Error, buffer: Buffer) => {
      if(err) throw err
      else{
        const content: string = buffer.toString()
        console.log(content)
      }
    })
  }
})