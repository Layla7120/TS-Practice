import { readFileSync, readFile } from "fs";

console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync('./ch07/package.json')
console.log(buffer.toString())

readFile('./ch07/package.json', (error:Error, buffer:Buffer) => {
  console.log('read package.json using asynchronous api...')
  console.log(buffer.toString())
})

const readFilePromise = (filename:string) : Promise<string> => 
   new Promise<string>((resolve, reject) => {
     readFile(filename, (error:Error, buffer:Buffer) => {
       if(error)
          reject(error)
        else
          resolve(buffer.toString())
     })
   });

(async () => {
  const content = await readFilePromise('./ch07/package.json')
  console.log('read package.json using Promise and async/await...')
  console.log(content)
})()