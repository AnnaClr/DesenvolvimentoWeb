// Faça um programa que solicite (prompt) o nome do usaario, de as boa vindas e avise que irá fazer uma soma: Ex: Bem vindo "nome", vamos fazer uma soma!

// Apresente a soma dos numeros com "alert" na tela: Ex: A soma do "numero1" e o "numero2" é "soma". Use Template String


let userName = prompt("Digite seu nome: ")
alert("Olá, " + userName + ", vamos fazer uma soma!")

let firstNumber = Number( prompt("Digite o primeiro número: "))
let secondNumber = Number( prompt("Digite o segundo número: "))
let sum = firstNumber + secondNumber

alert(`A soma de ${firstNumber} + ${secondNumber} é ${sum}`)

console.log("Hello, World!")


// console.log(typeof firstNumber)

// let num1 = "3"
// num1 = Number(num1)
// console.log(num1)
// console.log(typeof num1)