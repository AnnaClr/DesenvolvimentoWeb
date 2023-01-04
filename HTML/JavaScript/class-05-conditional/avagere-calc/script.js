// Crie um algoritimo que solicite o nome e as notas 1 e 2 do aluno;
// Crie uma função para calcular a sua média;
// Depois apresente o nome do aluno, sua média e sua situação;
// O aluno será aprovado somente SE ele teve média maior ou igual a 7.

// let userName = String( prompt("Digite sua nome: "))
// alert("Olá, " + userName + "! Digite sua nota:")

// let firstNumber = Number( prompt("1º Nota: "))
// let secondNumber = Number( prompt("2º Nota: "))

// function média(userName) {
//     let  = (num1 + num2) / 2
//     return média.toFixed(2)
// }

// function média(userName) {
//     let média = (firstNumber + secondNumber) / 2
//     return média.toFixed(2)
// }

// const aluno = [
//     {
//         name: userName
//     }


// ]

// for (const userName of aluno) {
//     document.write(`A média de ${aluno.name} é ${média(aluno)} <br>`)

// }

const aluno = prompt("Nome do aluno:")
const nota1 = Number(prompt("1° Nota:"))
const nota2 = Number(prompt("2º Nota:"))

function calcAvarege(note1, note2) {
    return (note1 + nota2) / 2
}

const avarege = calcAvarege(nota1, nota2)

window.alert(avarege)

if (avarege >= 7) {
    situation = "Aprovado"

} else {
    situation = "Reprovado"

}

window.alert(`O ${aluno} tem média de ${avarege} e foi ${situation}`)
