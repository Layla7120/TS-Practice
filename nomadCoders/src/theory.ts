// //dosen't compile back to javascript
// interface Human{
//   name:string;
//   age:number;
//   gender:string;
// }
class Human{
  public name: string;
  public age: number;
  public gender: string;
  constructor(name:string, age:number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 54, "female");

const person = {
  name: "jenny",
  age: 24, 
  gender: "female"
}

// const sayHi = (name:string, age:number, gender?:string):string => {
//   return `hello ${name}, ${age}, you are a ${gender}`
// }

const sayHi = (person: Human):string => {
  return `hello ${person.name}, ${person.age}, you are a ${person.gender}`;
}
console.log(sayHi(lynn));

export{};
  