// >>>Modulos (Import & Export)<<<
// import {sum, sub, mult, div } from "./functions.js";

// import { operations } from "./functions.js";

// let num1 = 7
// let num2 = 7

// sum(num1, num2)
// sub(num1, num2)
// mult(num1, num2)
// div(num1, num2)

// operations.sum(num1, num2)
// operations.sub(num1, num2)
// operations.mult(num1, num2)
// operations.div(num1, num2)

// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//         this.canDrive = age >= 18
//         this.status = () => {
//             if (this.canDrive) {
//                 return 'Pode digirir!'
//             } else {
//                 return 'Não pode dirigir!'
//             }
//         }
       
//     }
// }

// const person1 = new Person('Ana Clara', 17)
// console.log( person1.name, person1.age)
// console.log(`${person1.name} ${person1.status()}`)


// >>> FACTORY <<<
// function person(name, age) {
//     return {
//         name,
//         age,
//         canDrive: age >= 18,
//         status: function status(canDrive) {
//             if (this.canDrive) {
//                 return 'Pode dirigir!'
//             } else {
//                 return 'Não pode dirigir!'
//             }
//         }
//     }
// }

// console.log(person('Ana Clara', 17))

// <<< DESTRUCTIVE >>>
// const array = ["A", "B"]
// const [item1, item2] = array

// console.log(array)
// console.log(item1);
// console.log(item2);

// <<< REST >>>
// function showArray(array, ...numbers) {
//     console.log(array, numbers)
// }

// showArray(array, 2, 3, 4, 5, 6)

// <<< SPREAD >>>
// const numbers = [2, 3, 4, 5, 6]
// console.log(...numbers)

// const [...clone] = numbers
// clone.pop()

// console.log(Math.max(...numbers));
// console.log(clone)

// let num; num = 7
// console.log(num)
// ASP (Automatic Semicolon Insertion)


// BABEL (ES6 to ES5)
// - Parser: Code 6 top AST (Abstract Syntex Tree)
// - Transformer: AST Manipulates (JSON)
// - Generator: AST to Code 5