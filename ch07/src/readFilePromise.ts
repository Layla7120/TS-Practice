import { readFile } from "fs";

export const readFilePromise = (filename: string): Promise<string> => 
  new Promise<string>((
    resolve: (value: string) => void,
    reject: (error: Error) => void) => {
      readFile(filename, (err:Error, buffer: Buffer) => {
        if(err) reject(err)
        else resolve(buffer.toString())
      })
    })

readFilePromise('./ch07/package.json')
    .then((content:string) => {
      console.log(content)
      return readFilePromise('./ch07/tsconfig.json')
    })
    .then((content:string) => {
      console.log(content)
      return readFilePromise('.')
    })
    .catch((err: Error) => console.log('error:', err.message))
    .finally(() => console.log('프로그램 종료'))
